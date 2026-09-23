import type { Certification, Education, Experience, Project, SkillGroup } from '../types/portfolio'

/** All factual portfolio content originates from Aagam_Shah_Resume_2026.pdf. */
export const experience: Experience[] = [
  {
    id: 'balaji',
    company: 'Shree Balaji Computer Trading Co.',
    role: 'IT Support Engineer & Web Developer',
    period: 'Mar 2026 — Present',
    summary:
      'Hands-on support for computers, servers and networks alongside independent website development and maintenance.',
    featured: true,
    achievements: [
      'Resolved 1,000+ hardware and software queries through onsite and remote support.',
      'Repaired laptops, desktops, mini PCs, tiny PCs and servers, including RAM/SSD upgrades, screens and motherboard-level work.',
      'Installed and troubleshot Windows 7–11, Windows Server 2022/2025, Ubuntu and Linux systems.',
      'Configured routers, switches, Wi-Fi, LAN and printers; handled hosting, DNS, SSL, SEO and website updates.',
    ],
    technologies: [
      'Windows Server',
      'Ubuntu / Linux',
      'Networking',
      'WordPress',
      'React',
      'DNS / SSL',
    ],
  },
  {
    id: 'jv',
    company: 'JV Traders',
    role: 'E-Commerce Manager',
    location: 'Unjha, Gujarat',
    period: '2019 — 2020',
    summary:
      'Managed product catalogs, inventory and online sales across marketplaces and a WooCommerce store.',
    achievements: [
      'Managed Amazon Seller Central, Flipkart Seller Hub and the company WordPress/WooCommerce store.',
      'Maintained listings, pricing, inventory and catalogs for spices and agricultural products.',
    ],
    technologies: ['WooCommerce', 'Amazon Seller Central', 'Flipkart Seller Hub'],
  },
  {
    id: 'new-shiv',
    company: 'New Shiv Infotech Pvt. Ltd.',
    role: 'IT Support Technician',
    location: 'Unjha, Gujarat',
    period: '2017 — 2019',
    summary:
      'Provided onsite and remote troubleshooting across client systems, operating systems and network equipment.',
    achievements: [
      'Supported 150+ client systems across multiple departments.',
      'Installed and maintained Windows and Linux systems, routers, switches and LAN/WAN connections.',
      'Handled backups, virus removal, OS upgrades and performance optimization.',
    ],
    technologies: ['Windows', 'Linux', 'LAN / WAN', 'Backup & recovery'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'support',
    title: 'IT support & hardware',
    description: 'From diagnosis to repair and end-user support.',
    skills: [
      'Hardware / software troubleshooting',
      'Laptop & desktop repair',
      'Mini / tiny PCs & servers',
      'Component replacement',
      'RAM / SSD upgrades',
      'BIOS configuration',
      'Onsite & remote support',
      'Printers',
    ],
  },
  {
    id: 'systems',
    title: 'Systems & servers',
    description: 'Operating systems, maintenance and recovery.',
    skills: [
      'Windows 7 / 8 / 10 / 11',
      'Windows Server 2022 / 2025',
      'Ubuntu / Linux',
      'OS installation',
      'Backup & recovery',
      'Endpoint protection',
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Connectivity across local infrastructure.',
    skills: [
      'Routers & switches',
      'Wi-Fi',
      'LAN / WAN troubleshooting',
      'DNS',
      'DHCP',
      'IP addressing',
    ],
  },
  {
    id: 'web',
    title: 'Web & commerce',
    description: 'Building, launching and maintaining websites.',
    skills: [
      'React',
      'WordPress',
      'WooCommerce',
      'HTML / CSS / JavaScript',
      'Responsive design',
      'Hosting & deployment',
      'Domains / DNS / SSL',
      'SEO',
      'XAMPP / VS Code',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'balaji-computers',
    slug: 'balaji-computers',
    title: 'Balaji Computers',
    eyebrow: 'Company website / commerce',
    shortDescription:
      'A company web presence connected to product information, customer enquiries and ongoing maintenance.',
    fullDescription:
      'One of two company websites Aagam independently developed and maintained. His remit across the websites covered development, deployment, hosting, domains, DNS, SSL, SEO and ongoing updates.',
    category: 'Web development',
    technologies: ['Website development', 'Hosting', 'DNS', 'SSL', 'SEO'],
    cover: '/assets/project-balaji.svg',
    liveUrl: 'https://balajicomputers.com',
    responsibilities: [
      'Website development and maintenance',
      'Deployment and hosting',
      'Domain, DNS and SSL configuration',
      'SEO and ongoing updates',
    ],
    challenge:
      'Keep a company website available and current while handling technical support responsibilities.',
    solution:
      'Developed and maintained the site, with responsibility for the web infrastructure around its deployment.',
    result: 'A live company website supported through ongoing updates and maintenance.',
    featured: true,
  },
  {
    id: 'tara-sitara',
    slug: 'tara-sitara-luxury-villa',
    title: 'Tara Sitara Luxury Villa',
    eyebrow: 'Hospitality website',
    shortDescription:
      'A responsive hospitality website maintained alongside its hosting and web infrastructure.',
    fullDescription:
      'One of two company websites Aagam independently developed and maintained, including deployment, hosting, domain configuration, SSL, SEO and ongoing updates.',
    category: 'Web development',
    technologies: ['Responsive web', 'Deployment', 'Hosting', 'DNS', 'SSL', 'SEO'],
    cover: '/assets/project-tara.svg',
    liveUrl: 'https://tarasitaravillas.com',
    responsibilities: [
      'Responsive website development',
      'Deployment and maintenance',
      'Hosting, domain, DNS and SSL configuration',
      'SEO and content updates',
    ],
    challenge:
      'Present villa information clearly across devices and keep the live site maintained.',
    solution:
      'Built and maintained the website and managed its associated deployment and domain setup.',
    result: 'A live hospitality website with responsive presentation and ongoing maintenance.',
    featured: true,
  },
  {
    id: 'ecommerce-clones',
    slug: 'responsive-ecommerce-clones',
    title: 'Responsive E-Commerce Clones',
    eyebrow: 'Local learning project',
    shortDescription:
      'Amazon and Myntra inspired interfaces built locally to practice responsive storefront design.',
    fullDescription:
      'Localhost interface projects made to demonstrate front-end design and e-commerce interactions. These were independent learning projects, not commissioned work for Amazon or Myntra.',
    category: 'Front-end project',
    technologies: ['HTML', 'CSS', 'JavaScript', 'XAMPP', 'VS Code'],
    cover: '/assets/project-commerce.svg',
    responsibilities: [
      'Responsive layouts',
      'Front-end interface development',
      'Local testing with XAMPP',
    ],
  },
  {
    id: 'hardware-assembly',
    slug: 'hardware-assembly',
    title: 'Computer Assembly & Troubleshooting',
    eyebrow: 'Hands-on hardware project',
    shortDescription:
      'Desktop assembly, BIOS setup, Windows installation and compatibility troubleshooting.',
    fullDescription:
      'A hands-on project covering desktop assembly, Windows installation, BIOS configuration and diagnosis of hardware and software compatibility issues.',
    category: 'IT infrastructure',
    technologies: ['Desktop hardware', 'BIOS', 'Windows', 'Troubleshooting'],
    cover: '/assets/project-hardware.svg',
    responsibilities: [
      'Assembled desktop systems',
      'Installed Windows and configured BIOS',
      'Resolved compatibility issues and optimized performance',
    ],
  },
]

export const certifications: Certification[] = [
  {
    id: 'ccna',
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    year: '2020',
    skills: ['Networking'],
  },
  { id: 'star', title: 'Star Cyber Secure User - R11', year: '2020', skills: ['Security'] },
  {
    id: 'rhcsa',
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    year: '2018',
    skills: ['Linux'],
  },
  {
    id: 'itf',
    title: 'CompTIA IT Fundamentals',
    issuer: 'CompTIA',
    year: '2018',
    skills: ['IT fundamentals'],
  },
  { id: 'aplus', title: 'CompTIA A+', issuer: 'CompTIA', year: '2017', skills: ['Hardware'] },
  { id: 'cscu', title: 'Certified Secure Computer User', year: '2017', skills: ['Security'] },
]

export const education: Education[] = [
  {
    id: 'iant',
    title: 'CHNA — Computer Hardware & Network Administrator',
    institution: 'Institute of Advance Network and Technology (IANT)',
    location: 'Mehsana, Gujarat',
    year: '2020',
  },
  {
    id: 'ssc',
    title: 'Secondary School Certificate (SSC)',
    institution: 'Shree L.P. Kakadiya Vidhya Bhawan',
    year: '2015',
  },
]

export const languages = [
  'Gujarati · Native',
  'Hindi · Fluent',
  'English · Conversational, fluent reading and writing',
  'Marathi · Conversational',
]
