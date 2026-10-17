import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FRAPPE_URL = process.env.FRAPPE_URL;
const FRAPPE_API_KEY = process.env.FRAPPE_API_KEY;
const FRAPPE_API_SECRET = process.env.FRAPPE_API_SECRET;

const ALLOWED_SERVICES = [
  "ERP Implementation",
  "HR Management System",
  "Custom Software Development",
  "Website Development",
  "Other",
] as const;

const MAX_BODY_SIZE = 12_000;
const REQUEST_TIMEOUT = 10_000;

type ContactRequest = {
  full_name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

type FrappeError = {
  exception?: string;
  exc_type?: string;
  _server_messages?: string;
  message?: string;
};

function jsonResponse(
  success: boolean,
  message: string,
  status = 200
) {
  return NextResponse.json(
    { success, message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  try {
    // 1. Check configuration.
    if (!FRAPPE_URL || !FRAPPE_API_KEY || !FRAPPE_API_SECRET) {
      console.error("ERPNext integration configuration is incomplete.");

      return jsonResponse(
        false,
        "Our contact service is temporarily unavailable. Please try again later.",
        500
      );
    }

    // 2. Validate request content type.
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return jsonResponse(
        false,
        "Invalid request format.",
        415
      );
    }

    // 3. Check request size.
    const contentLength = Number(
      request.headers.get("content-length") || "0"
    );

    if (contentLength > MAX_BODY_SIZE) {
      return jsonResponse(
        false,
        "Your submission is too large.",
        413
      );
    }

    // 4. Parse JSON.
    let body: ContactRequest;

    try {
      body = (await request.json()) as ContactRequest;
    } catch {
      return jsonResponse(
        false,
        "Invalid JSON request.",
        400
      );
    }

    // 5. Basic honeypot spam check.
    if (
      typeof body.website === "string" &&
      body.website.trim() !== ""
    ) {
      return jsonResponse(
        true,
        "Thank you for contacting TechVision."
      );
    }

    // 6. Normalize input.
    const fullName =
      typeof body.full_name === "string"
        ? body.full_name.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const phone =
      typeof body.phone === "string"
        ? body.phone.trim()
        : "";

    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    const service =
      typeof body.service === "string"
        ? body.service.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    // 7. Required field validation.
    if (!fullName || !email || !service) {
      return jsonResponse(
        false,
        "Please provide your full name, email address, and requested service.",
        400
      );
    }

    // 8. Length validation.
    if (
      fullName.length > 140 ||
      email.length > 254 ||
      phone.length > 50 ||
      company.length > 140 ||
      message.length > 5000
    ) {
      return jsonResponse(
        false,
        "One or more fields exceed the allowed length.",
        400
      );
    }

    // 9. Email validation.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse(
        false,
        "Please enter a valid email address.",
        400
      );
    }

    // 10. Service validation.
    if (
      !ALLOWED_SERVICES.includes(
        service as (typeof ALLOWED_SERVICES)[number]
      )
    ) {
      return jsonResponse(
        false,
        "Please select a valid service.",
        400
      );
    }

    // 11. Split name into standard ERPNext fields.
    const nameParts = fullName.split(/\s+/);

    const firstName = nameParts.shift() || "";
    const lastName = nameParts.join(" ");

    // 12. Build the standard ERPNext Lead document.
    const leadData: Record<string, string> = {
      first_name: firstName,
      email_id: email,
      source: "Website",
    };

    if (lastName) {
      leadData.last_name = lastName;
    }

    if (phone) {
      leadData.phone = phone;
    }

    if (company) {
      leadData.company_name = company;
    }

    // 13. Send the request to ERPNext.
    const controller = new AbortController();

    const timeout = setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT
    );

    let frappeResponse: Response;

    try {
      frappeResponse = await fetch(
        `${FRAPPE_URL.replace(/\/+$/, "")}/api/resource/Lead`,
        {
          method: "POST",
          headers: {
            Authorization:
              `token ${FRAPPE_API_KEY}:${FRAPPE_API_SECRET}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(leadData),
          cache: "no-store",
          signal: controller.signal,
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    // 14. Process ERPNext errors.
    if (!frappeResponse.ok) {
      const errorText = await frappeResponse.text();

      let frappeError: FrappeError = {};

      try {
        frappeError = JSON.parse(errorText) as FrappeError;
      } catch {
        // ERPNext returned a non-JSON error.
      }

      const exception = frappeError.exception || "";
      const errorType = frappeError.exc_type || "";

      // Log details on the server only.
      console.error("ERPNext Lead creation failed:", {
        status: frappeResponse.status,
        exception,
        errorType,
        response: errorText.slice(0, 1500),
      });

      // 15. Duplicate email handling.
      const isDuplicateEmail =
        frappeResponse.status === 409 &&
        (
          errorType === "DuplicateEntryError" ||
          /Email Address must be unique/i.test(exception) ||
          /email.*already (exists|used)/i.test(exception)
        );

      if (isDuplicateEmail) {
        return jsonResponse(
          false,
          "This email address is already registered in our CRM. Please contact us using another email address or email info@techvision.edu.et for assistance.",
          409
        );
      }

      // 16. Authentication and permissions.
      if (
        frappeResponse.status === 401 ||
        frappeResponse.status === 403
      ) {
        return jsonResponse(
          false,
          "We could not process your request right now. Please try again later.",
          502
        );
      }

      // 17. Other validation errors.
      if (frappeResponse.status === 417) {
        return jsonResponse(
          false,
          "Some information could not be accepted. Please check your details or contact our team.",
          400
        );
      }

      // 18. Rate limiting from ERPNext.
      if (frappeResponse.status === 429) {
        return jsonResponse(
          false,
          "Too many requests. Please wait a moment and try again.",
          429
        );
      }

      // 19. ERPNext server errors.
      if (frappeResponse.status >= 500) {
        return jsonResponse(
          false,
          "Our CRM is temporarily unavailable. Please try again later.",
          502
        );
      }

      // 20. Unexpected upstream responses.
      return jsonResponse(
        false,
        "We could not submit your request. Please check your details and try again.",
        502
      );
    }

    // 21. Verify the created Lead.
    const result = await frappeResponse.json();

    if (!result.data?.name) {
      console.error(
        "ERPNext returned no Lead identifier after creation."
      );

      return jsonResponse(
        false,
        "We could not confirm your submission. Please contact info@techvision.edu.et.",
        502
      );
    }

    console.info(
      "TechVision website Lead created:",
      result.data.name
    );

    // 22. Return success.
    return jsonResponse(
      true,
      "Thank you for contacting TechVision! Our team will contact you soon."
    );
  } catch (error) {
    // 23. Timeout handling.
    if (error instanceof Error && error.name === "AbortError") {
      return jsonResponse(
        false,
        "The request took too long. Please try again later.",
        504
      );
    }

    // 24. Unexpected network or application errors.
    console.error("Contact API error:", error);

    return jsonResponse(
      false,
      "Something went wrong. Please try again later.",
      500
    );
  }
}