# Drive & Shine Landing

Act as an expert UI/UX designer and frontend developer specializing in high-converting landing pages for local B2C businesses.

Create a modern, sleek, single-page web application for an independent Auto Repair Shop (STO - Станция Технического Обслуживания). The design must be built using Tailwind CSS and a modern UI component library (like ShadcnUI).

### Design Aesthetic:

*   **Style:** "Modern Garage Professional". Think clean layouts, robust typography, and industrial but premium vibes.

*   **Color Palette:** Use a striking Dark Mode theme (dark grays/charcoal) with vibrant accent colors (e.g., Electric Blue or Neon Green) for CTAs and interactive elements. High contrast for readability in dark environments.

*   **Typography:** Strong, sans-serif fonts (like Inter or Roboto).

### Core Structure (Single Page):

1.  **Hero Section:**

    *   Compelling headline focused on trust and speed (e.g., "Fast, Reliable Auto Repair in [City]").

    *   Subheadline: "Certified mechanics, fair pricing. Get your car back on the road today."

    *   Large, prominent "Book a Service" Call-to-Action (CTA) button that smooth-scrolls to the booking form.

    *   High-quality background image or blurred video placeholder related to clean, modern car repair (not a dirty garage).

2.  **Popular Services (Card Layout):**

    *   A grid of interactive cards showing 4-6 key services (e.g., Oil Change, Brake Repair, Computer Diagnostics, Suspension, Engine Repair).

    *   Each card has a simple icon, service name, brief description, and a small "Book Now" link that also anchors to the form.

3.  **The "Reverse Demo" Booking Form (Crucial Context Section):**

    *   A prominent section with a clean, centered form titled "Schedule Your Visit".

    *   **Form Fields:**

        *   Full Name (Input text)

        *   Phone Number (Input tel, mandatory)

        *   Car Make & Model (Input text)

        *   Type of Service Needed (Dropdown or Select menu)

        *   Preferred Date (Date picker)

        *   Preferred Time Slot (e.g., Morning, Afternoon, Evening select)

    *   **Submit Button:** A large, high-contrast button labeled "Confirm Booking".

    *   *AI Developer Note:* Implement a mock "submission" behavior. When the form is submitted, show a stylish "Success" overlay saying "Thank you! Our manager will call you back in 15 minutes to confirm."

4.  **Trust & Location Section:**

    *   Placeholder icons for "Certified Technicians," "Warranty Included," "Fair Pricing."

    *   Small Google Map embed placeholder.

    *   Address, Clickable Phone Number, and Opening Hours.

5.  **Footer:** Simple copyright and links.

### Technical Requirements for the Generator:

*   Use Tailwind CSS utilities.

*   Focus on conversion-oriented UI/UX elements (clear CTAs, prominent form).

*   The layout MUST be fully responsive (mobile-first approach).

*   Add subtle hover animations on cards and buttons for a premium feel.

*   *Do not implement the backend (n8n hook), but ensure the form structure is ready for a simple POST request.*

The language of the visible text on the page should be Russian.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2411fa2b-f099-5903-890d-4016d089de42).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
