import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";
import { solutionsProducts } from "./solutions-content";
import { Button } from "../ui/button";

export function ProductSections() {
  return (
    <div className="mx-auto flex max-w-[1264px] flex-col gap-36 px-6 pt-24 pb-8">
      {solutionsProducts.map((product, idx) => {
        const reversed = idx % 2 === 1;

        return (
          <section
            key={product.slug}
            id={product.slug}
            className="scroll-mt-24 border-b border-border bg-background last:border-b-0"
          >
            <div className="py-16">
              <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:items-start lg:px-0">
                <div
                  className={`lg:col-span-5 lg:row-start-1 ${
                    reversed ? "lg:col-start-7 lg:pl-8" : "lg:col-start-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background">
                      <product.icon className="h-5 w-5 text-foreground" />
                    </span>

                    <h2 className="font-display align-middle text-[30px] font-medium leading-[38px] tracking-[0px] text-foreground">
                      {product.name}
                    </h2>
                  </div>

                  <p
                    className={`mt-6 leading-6 text-muted-foreground ${
                      product.lead ? "text-base" : "text-sm"
                    }`}
                  >
                    {product.lead && (
                      <strong className="block text-xl font-black leading-6 text-muted-foreground">
                        {product.lead}
                      </strong>
                    )}
                    {product.description}
                  </p>

                  {product.cards ? (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {product.cards.map((card) => (
                        <div
                          key={card.title}
                          className={`flex flex-col gap-1 rounded-[2px] border bg-background p-4 ${
                            product.cardStyle === "plain"
                              ? "border-border"
                              : "border-foreground shadow-[-5px_5px_0_-1px_#FCF8FA,-5px_5px_0_0_#111827]"
                          }`}
                        >
                          <card.icon className="h-[19px] w-[18px] text-primary" />

                          <h3 className="font-mono text-sm font-medium text-foreground">
                            {card.title}
                          </h3>

                          <p className="text-xs leading-5 text-foreground">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="mt-6 flex flex-col gap-[18px]">
                      {product.features?.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm leading-6 text-foreground"
                        >
                          <CircleCheck className="h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-6 mb-5 font-mono text-xs text-foreground">
                    From ${product.startingPrice}/mo{" "}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#111827] px-8 py-3 font-mono text-[14px] text-white shadow-[-5px_5px_0_0_#2DB266]"
                  >
                    <Link href="/contact">
                      Request Demo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={`lg:col-span-5 lg:row-start-1 ${
                    reversed ? "lg:col-start-2" : "lg:col-start-7"
                  }`}
                >
                  <div className="h-80 rounded-[4px] border border-border bg-background p-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-border/50 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                      <Image
                        src={product.image}
                        alt={`${product.name} dashboard`}
                        fill
                        sizes="(min-width: 1024px) 454px, 100vw"
                        className="object-cover object-[0%_48%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}