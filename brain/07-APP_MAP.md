# App map

```text
/
├── #home
├── #about
├── #experience
├── #skills
├── #projects
├── #certifications
├── #education
└── #contact

/projects/:slug → data-driven case study
* → custom 404
```

Header links use `/#section` so they also return from case studies. Route effects scroll to a hash target after navigation. An IntersectionObserver updates the active section indicator. The mobile menu uses the same navigation list and closes after choosing a link.
