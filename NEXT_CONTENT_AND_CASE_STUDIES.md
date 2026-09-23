# Portfolio content to add next

This is the working checklist for improving Aagam Shah's portfolio. The website already renders the facts from `public/resume/Aagam_Shah_Resume_2026.pdf`. The case studies below are drafts based on those facts. Bracketed prompts are information to supply and **must not be published as claims until verified**.

For implementation steps, read `brain/09-EDITING_GUIDE.md`. Portfolio data lives in `src/content/portfolio.ts`; global contact and social settings live in `src/config/site.ts`.

## 1. Highest-priority additions

### Real project images

- [ ] Capture a clean desktop screenshot of `balajicomputers.com` and `tarasitaravillas.com`.
- [ ] Capture at least one mobile screenshot for each live website.
- [ ] Remove customer names, personal data, private dashboards, credentials, and unpublished business information from screenshots.
- [ ] Save optimized WebP or AVIF files in `public/assets/` with descriptive names, such as `balaji-home-desktop.webp` and `tara-mobile.webp`.
- [ ] Replace each project's `cover` illustration and add its `gallery` array in `src/content/portfolio.ts`.
- [ ] If available, add approved photos of hardware assembly or repairs to the hardware project. Current SVG covers are illustrations, not screenshots.

### Clarify the two company website case studies

The resume says WordPress and React were used **across both company websites**. It does not say which site used which stack. For **each** site, provide:

| Detail                                                | Balaji Computers | Tara Sitara Luxury Villa |
| ----------------------------------------------------- | ---------------- | ------------------------ |
| Exact stack and framework                             | [fill in]        | [fill in]                |
| Your contribution versus others' work                 | [fill in]        | [fill in]                |
| Project start and launch month/year                   | [fill in]        | [fill in]                |
| Main audience and goal                                | [fill in]        | [fill in]                |
| Key pages or features you built                       | [fill in]        | [fill in]                |
| Hardest technical problem and how you solved it       | [fill in]        | [fill in]                |
| Hosting/deployment provider, if public                | [fill in]        | [fill in]                |
| SEO work you personally performed                     | [fill in]        | [fill in]                |
| Outcome you can substantiate                          | [fill in]        | [fill in]                |
| Permission to publish screenshots and project details | [fill in]        | [fill in]                |

Useful outcomes can be concrete without invented percentages: a completed launch, a working catalog, a responsive booking enquiry flow, a resolved DNS issue, or a documented maintenance process. Add numbers only when you have a reliable source.

### Links and credentials

- [ ] Add verified LinkedIn and GitHub URLs, if you want them public, to `siteConfig.social` in `src/config/site.ts`.
- [ ] Add public repository links only for projects you own and can share. A localhost clone has no live URL unless you deploy it.
- [ ] For each certification, provide the issuing organization when missing, credential ID, verification URL, and a certificate image only if you want those details displayed. Do not upload certificates that expose private identifiers without reviewing them.
- [ ] Confirm the live Balaji Computers URL is accessible from outside your own network. It timed out during the initial build review; Tara Sitara returned HTTP 200.

### Production domain and contact

- [ ] Choose the final portfolio domain. Set `VITE_SITE_URL` to its exact HTTPS origin before the production build. This enables absolute canonical/OpenGraph URLs and generates `sitemap.xml`.
- [ ] Decide whether the current `mailto:` contact flow is enough. It validates input and opens the visitor's email app; it does not send a message itself. For direct submission, choose a form provider or a custom API, add server-side validation and spam protection, and keep credentials out of the frontend.
- [ ] After deployment, test the resume download, project routes, social preview, and form on the actual domain.

## 2. Case study draft — Balaji Computers

**Existing route:** `/projects/balaji-computers`

**Live site listed in resume:** `https://balajicomputers.com`

**Current status:** A case study page already exists. The text below is a fuller editorial draft using only verified resume facts.

### Summary

I independently developed and maintained the Balaji Computers company website while working as an IT Support Engineer & Web Developer at Shree Balaji Computer Trading Co. My website responsibilities across the company's two sites included development, deployment, hosting, domain and DNS configuration, SSL, SEO, and ongoing updates.

### Context

My role combined customer-facing hardware and software support with responsibility for live company websites. Alongside website work, I diagnosed and repaired laptops, desktops, mini PCs, tiny PCs, and servers and handled onsite and remote technical queries.

### What I handled

- Website development and ongoing maintenance.
- Deployment and hosting setup.
- Domain, DNS, and SSL configuration.
- SEO work and site updates.

### What to add before expanding the published case study

1. **Site purpose:** What should visitors be able to do—browse products, enquire, purchase, request repairs, or something else?
2. **Exact stack:** Was this site built in WordPress, React, WooCommerce, or another combination? Name themes/plugins only if they are relevant and verified.
3. **Scope:** Which pages, product/catalog tools, forms, integrations, and responsive views did you personally build?
4. **Technical challenge:** Describe one real issue—for example deployment, catalog structure, DNS, SSL, performance, or mobile layout—and the steps you took to resolve it.
5. **Result:** Add a factual launch or maintenance outcome. If you have analytics, cite the period and source before adding metrics.
6. **Evidence:** Add approved desktop/mobile screenshots and, if possible, a concise diagram or screenshot of a feature you built.

**Do not claim yet:** a specific framework for this individual site, sales growth, conversion improvement, traffic increase, page-speed score, or exact launch date. The resume does not establish those details.

## 3. Case study draft — Tara Sitara Luxury Villa

**Existing route:** `/projects/tara-sitara-luxury-villa`

**Live site listed in resume:** `https://tarasitaravillas.com`

**Current status:** A case study page already exists. The draft below can become more specific after the project details are confirmed.

### Summary

I independently developed and maintained the Tara Sitara Luxury Villa company website. My work across the two company websites covered development, deployment, hosting, domain and DNS setup, SSL, SEO, and continuing maintenance.

### Context

The website presents a hospitality business to visitors across screen sizes. The current portfolio describes responsive presentation and ongoing web infrastructure work; it does not attribute an unverified booking system, payment flow, or business outcome to this site.

### What I handled

- Responsive website development and maintenance.
- Deployment, hosting, domain, DNS, and SSL setup.
- SEO and ongoing content/site updates.

### What to add before expanding the published case study

1. **Audience and goal:** What should a guest learn or do on the site?
2. **Exact stack:** Confirm whether this individual site uses React, WordPress, or another stack.
3. **Features:** Identify the pages, galleries, contact/booking flows, forms, or integrations you personally implemented.
4. **Mobile decisions:** Describe a real layout or usability issue and how you solved it.
5. **Deployment work:** Describe an actual hosting, DNS, SSL, or release challenge and your solution.
6. **Outcome:** State a verified result, such as a launched responsive site or a maintained enquiry flow. Add bookings or conversion data only if measured and shareable.
7. **Evidence:** Add approved desktop and mobile screenshots.

**Do not claim yet:** a particular framework for this individual site, booking automation, revenue impact, performance score, or launch date without verification.

## 4. Smaller project case studies

### Responsive E-Commerce Clones

The resume confirms local Amazon and Myntra inspired responsive interfaces built with HTML, CSS, JavaScript, VS Code, and XAMPP. These are learning projects, not work for those companies.

To improve this case study, add local screenshots, a shareable repository if available, the specific interface features completed, the responsive breakpoints you handled, and one design or JavaScript problem you solved. Keep any trademark references clearly framed as inspiration.

### Computer Assembly & Troubleshooting

The resume confirms desktop assembly, Windows installation, BIOS configuration, compatibility troubleshooting, and performance optimization. To improve this case study, add approved build photos, component specifications if you still know them, the initial problem, diagnostic steps, the repair/configuration performed, and a verifiable outcome. Avoid showing serial numbers or customer data.

## 5. Reusable case study worksheet

Copy this block for every future project. Fill only fields you can verify.

```md
### Project name

- Public URL:
- Repository URL:
- Month/year:
- Client or project type:
- My role:
- Other contributors and their roles:
- Audience and goal:
- Initial problem:
- Requirements:
- Exact tools/technologies I used:
- Work I personally completed:
- Hardest challenge:
- Steps I took to solve it:
- Deployment and maintenance responsibilities:
- Verified result:
- Evidence/source for any numbers:
- Screenshot filenames and publication permission:
- Details that must remain private:
```

Once complete, update the matching object in `src/content/portfolio.ts`. The card and case study route update automatically; there is no need to edit navigation or page layout.

## 6. Final publication review

- [ ] Read each claim against the latest resume and your own project records.
- [ ] Check spelling of employers, dates, certification titles, URLs, and technical products.
- [ ] Review every image for permission, privacy, readability, and mobile cropping.
- [ ] Run `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build`.
- [ ] Review the deployed site at 375px, 430px, 768px, 1024px, and a desktop width; test keyboard navigation and reduced motion.
- [ ] Verify the live website links, direct case study reloads, downloadable resume, sitemap, and contact flow.
