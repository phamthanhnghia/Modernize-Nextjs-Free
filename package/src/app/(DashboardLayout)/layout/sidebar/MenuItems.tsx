import {
  IconAperture,
  IconCopy,
  IconFileInfo,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconNotes,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "PAGES",
  },
  {
    id: uniqueId(),
    title: "Pages",
    icon: IconNotes,
    children: [
      {
        id: uniqueId(),
        title: "About Us",
        href: "/pages/about-us",
        icon: IconFileInfo,
      },
      {
        id: uniqueId(),
        title: "Services",
        href: "/pages/services",
      },
      {
        id: uniqueId(),
        title: "Pricing",
        href: "/pages/pricing",
      },
      {
        id: uniqueId(),
        title: "FAQs",
        href: "/pages/faqs",
      },
      {
        id: uniqueId(),
        title: "Blog",
        href: "/pages/blog",
      },
      {
        id: uniqueId(),
        title: "Testimonials",
        href: "/pages/testimonials",
      },
      {
        id: uniqueId(),
        title: "Portfolio",
        href: "/pages/portfolio",
      },
      {
        id: uniqueId(),
        title: "Careers",
        href: "/pages/careers",
      },
      {
        id: uniqueId(),
        title: "Contact",
        href: "/pages/contact",
      },
      {
        id: uniqueId(),
        title: "Legal",
        href: "/pages/legal",
      },
    ],
  },
  {
    navlabel: true,
    subheader: "UTILITIES",
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: " EXTRA",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },

];

export default Menuitems;


