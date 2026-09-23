# Content model

Edit arrays in `src/content/portfolio.ts`; interfaces are in `src/types/portfolio.ts`. The UI automatically maps every array entry. Use unique `id` values and unique project `slug` values.

```ts
projects.push({
  id: 'inventory-dashboard',
  slug: 'inventory-dashboard',
  title: 'Inventory Management Dashboard',
  eyebrow: 'Web application',
  shortDescription: 'One sentence for cards.',
  fullDescription: 'Case study overview.',
  category: 'Web development',
  technologies: ['React'],
  cover: '/assets/inventory.webp',
  responsibilities: ['Built the dashboard'],
  featured: false,
})
```

`Project` also accepts `gallery` (public image paths), `liveUrl`, `repositoryUrl`, `challenge`, `solution`, `result`, and `year`. Only add those when verified. `Experience` requires company, role, period, summary, achievements and technologies, and can include exact start/end dates or a company URL. `SkillGroup` requires title, description and skills. `Certification` requires title and year, with optional issuer, credential URL/image/skills. `Education` requires title, institution and year. `siteConfig` holds name, title, email, phone, location, resume path and social links. Missing social links render nothing.

Project cover paths are public URLs; place assets in `public/assets`. A new project automatically gets a card and `/projects/:slug` case study without editing routing or layout.
