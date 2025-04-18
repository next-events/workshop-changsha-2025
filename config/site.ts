export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NExT 2025 Workshop",
  description: "Responsible AI and Large Foundation Models - NExT 2025 Workshop, Yuelu Academy, Changsha",
  navItems: [
    {
      label: "Intro",
      href: "/",
    },
    {
      label: "Registration",
      href: "/registration",
    },
    {
      label: "Hotel",
      href: "/hotel",
    },
    {
      label: "Program",
      href: "/program",
    },
    {
      label: "Organizers",
      href: "/organizers",
    },
    // {
    //   label: "Sponsors",
    //   href: "/sponsors",
    // },
    {
      label: "Location",
      href: "/location",
    },
  ],
  links: {
    github: "https://github.com/next-events/workshop-dec-2025",
    registration: "https://forms.google.com",
    website: "https://next-events.github.io/workshop-dec-2024/",
  },
};
