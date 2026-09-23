# Animation and 3D

`HeroVisual.tsx` always renders a CSS workstation. It checks WebGL support, reduced motion, and the 700px breakpoint before lazy-loading `HeroScene.tsx` when the hero enters the viewport. Failure leaves the static scene and all text/actions usable.

`HeroScene.tsx` uses React Three Fiber with code-built low-poly laptop and server stack, ambient/directional/point lighting, a perspective camera, no textures and DPR capped at 1.5. Demand-driven rendering runs only while the pointer movement is settling. `useFrame` eases small pointer-based rotation and requests another frame until settled. No animation controls carry essential information. Mobile and reduced-motion visitors see the static equivalent.

`useReveal.ts` uses GSAP ScrollTrigger for brief opacity/vertical section entrances. It skips animations under reduced motion. `gsap.context().revert()` removes triggers and inline effects during React cleanup. Hover motion lives in CSS. Changing the scene does not require changing Hero text: replace only `HeroScene.tsx` or `HeroVisual.tsx` if load behavior changes.
