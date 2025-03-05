const footerNavigation = {
  forCandidates: {
    title: "Footer.for-candidates.title",
    links: [
      { href: "/jobs", title: "Footer.navigation.jobs" },
      { href: "/employers", title: "Footer.navigation.employers" },
      { href: "/bookmarks", title: "Footer.navigation.bookmarks" },
      { href: "/dashboard", title: "Footer.navigation.candidate-dashboard" },
    ],
  },
  forEmployers: {
    title: "Footer.for-employers.title",
    links: [
      { href: "/candidates", title: "Footer.navigation.candidates" },
      { href: "/pricing", title: "Footer.navigation.pricing" },
      { href: "/dashboard", title: "Footer.navigation.employer-dashboard" },
      { href: "/submit-job", title: "Footer.navigation.submit-job" },
    ],
  },
  aboutUs: {
    title: "Footer.about-us.title",
    links: [
      { href: "/about", title: "Footer.navigation.about-us" },
      { href: "/contact", title: "Footer.navigation.contact" },
      { href: "/terms", title: "Footer.navigation.terms" },
      { href: "/privacy", title: "Footer.navigation.privacy" },
      { href: "/faq", title: "Footer.navigation.faq" },
    ],
  },
} as const;

export default footerNavigation;
