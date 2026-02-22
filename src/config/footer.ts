import type { FooterSection } from "../data/types";

export const footerSections: FooterSection[] = [
  {
    title: "Quick Links",
    children: [
      { name: "Home", path: "/" },
      { name: "Explore", path: "/explore" },
      { name: "My Order", path: "/my-orders" },
      { name: "Account", path: "/account" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Contact Us",
    children: [
      { name: "Phone", value: "+234 801 234 5678" },
      { name: "Email", value: "hello@chukskitchen.com" },
      { name: "Location", value: "123 Taste Blvd, Lagos, Nigeria" },
    ],
  },
  {
    title: "Socials",
    children: [
      { value: "Facebook", name: "https://www.facebook.com/chukskitchen" },
      { value: "Twitter", name: "https://twitter.com/chukskitchen" },
      { value: "LinkedIn", name: "https://www.linkedin.com/company/chukskitchen " },
      { value: "Instagram", name: "https://www.linkedin.com/company/chukskitchen " },
    ],
  },
];