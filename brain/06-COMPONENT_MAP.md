# Component map

```text
App
├── RouteEffects (metadata, JSON-LD, scroll restoration)
├── HomePage
│   ├── Header (desktop/mobile navigation)
│   ├── Hero → HeroVisual → lazy HeroScene / static fallback
│   ├── About (metrics and terminal)
│   ├── Experience (selected tab and detail panel)
│   ├── Skills (mapped groups)
│   ├── Projects (mapped cards)
│   ├── Certifications (mapped cards)
│   ├── Education (entries and languages)
│   ├── Contact → ContactForm (validation and mailto)
│   └── Footer
├── lazy ProjectPage (case study from project data)
└── NotFoundPage
```

`ErrorBoundary` wraps the app and separately protects the WebGL enhancement. `useReveal` owns scoped GSAP animations and cleanup. The 3D scene has no dependency on profile content or hero copy.
