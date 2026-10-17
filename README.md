# TechVision

TechVision is a modern, responsive website designed to showcase TechVision's technology solutions, services, industries, and pricing.

The project is built with **Next.js, React, TypeScript, and Tailwind CSS**, with a focus on responsive design, reusable components, consistent branding, and a clean user experience across desktop and mobile devices.

## Overview

The TechVision website provides visitors with information about the company's products, solutions, supported industries, pricing options, and ways to get in touch with the team.

The interface follows TechVision's brand guidelines and uses a reusable component-based architecture to maintain consistency across the website.

## Main Pages

The website currently includes:

- **Home** — Introduction to TechVision, key statistics, solutions, industries, and pricing overview
- **Solutions** — Detailed presentation of TechVision products and technology solutions
- **Industries** — Solutions organized around the industries TechVision serves
- **Pricing** — Individual pricing plans and bundled product suites
- **About** — Information about TechVision and the organization
- **Contact** — Allows visitors to contact or request more information from TechVision

## Key Features

- Responsive design for desktop, tablet, and mobile
- Light and dark theme support
- Reusable React components
- TechVision brand-aligned typography and colors
- Product and solution sections
- Industry-specific content
- Monthly and annual pricing options
- Product bundle pricing
- Smooth navigation between page sections
- Responsive navigation and footer
- Interactive hover states and transitions
- Modular component structure for easier maintenance

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **Next Font**

## Project Structure

```text
techvision-home/
├── app/
│   ├── about/
│   ├── contact/
│   ├── industries/
│   ├── pricing/
│   ├── solutions/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   ├── industries/
│   ├── pricing/
│   ├── site/
│   ├── solutions/
│   └── ui/
│
├── lib/
│   └── site-data.ts
│
├── public/
│
├── package.json
└── README.md
```

The project separates page-specific components from shared site components so that common elements can be reused throughout the application.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Nazrawit-T-B/techvision-home.git
```

Move into the project directory:

```bash
cd techvision-home
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the following address in your browser:

```text
http://localhost:3000
```

The application will automatically update while you make changes during development.

## Development

Create a separate branch before working on a new feature or fix:

```bash
git switch -c your-branch-name
```

After making your changes:

```bash
git add .
git commit -m "your commit message"
git push -u origin your-branch-name
```

If you are a collaborator working with the main repository through an `upstream` remote, push the branch using:

```bash
git push -u upstream your-branch-name
```

Then create a pull request for review before merging the changes into the main branch.

## Design System

The website follows the TechVision brand identity.

### Brand Colors

| Color | Hex |
|---|---|
| TechVision Green | `#00D38D` |
| TechVision Blue | `#002333` |
| White | `#FFFFFF` |
| Black | `#000000` |

### Typography

- **Archivo** — Primary typeface
- **Helvetica** — Secondary typeface
- **Neteru** — Ethiopic-script typography where applicable

The application uses reusable theme variables and Tailwind utility classes to maintain consistent styling across pages and components.

## Component Architecture

Shared components are used throughout the website to reduce duplication and keep the interface consistent.

Examples include:

- Site navigation
- Footer
- Page headers
- CTA sections
- Pricing cards
- Bundle cards
- Solution cards
- Industry sections
- Buttons and other UI elements

Page-specific components are organized into their respective component directories.

## Current Development

The website is actively being developed and refined. Current work includes:

- Improving responsive behavior
- Refining page layouts and spacing
- Aligning components with TechVision's design system
- Improving navigation between sections
- Maintaining consistent light and dark themes
- Refining solutions, industries, and pricing experiences
- Preparing additional functionality for future integration

## Contributing

When contributing to the project:

1. Make sure your local repository is up to date.
2. Create a new branch for your changes.
3. Keep changes focused on the feature or issue being addressed.
4. Test the website locally.
5. Commit your changes with a clear commit message.
6. Push your branch to the repository.
7. Open a pull request for review.

Avoid pushing unfinished changes directly to the main branch.

## License

This project is developed for TechVision. All rights reserved.