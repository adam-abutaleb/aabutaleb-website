/**
 * Single source of truth for identity and contact links.
 * Every page reads from here, so a link is only ever changed in one place.
 * A value left as null is simply not rendered (no broken links ship).
 */
export const site = {
  // TODO(content): confirm the display name.
  name: 'Adam Abutaleb',
  // TODO(content): confirm the one-line positioning statement.
  tagline: 'CS & Mathematics double major building software and quantitative tools.',
  description:
    'Portfolio of a CS & Mathematics double major: projects, write-ups and contact details.',
  // TODO(content): fill these in. null = hidden.
  email: null as string | null,
  github: null as string | null,
  linkedin: null as string | null,
  // Drop resume.pdf into /public and set this to '/resume.pdf'.
  resume: null as string | null,
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
];
