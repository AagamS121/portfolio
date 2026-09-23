# Decisions

## 2026-09-23 — React Three Fiber

Use R3F rather than raw Three.js for React lifecycle integration. Keep its chunk lazy and its scene independent from Hero content. The alternate static illustration supports weaker devices and failures.

## 2026-09-23 — Typed local content

Use one typed content module and one site config. A CMS would add complexity and public editing risk for a small portfolio. Components map over data objects.

## 2026-09-23 — Organized CSS with tokens

Use a single CSS system with semantic variables rather than mixing Tailwind and modules. It makes theme edits direct and avoids dependencies.

## 2026-09-23 — Email app contact flow

With no backend or form-service credentials, validate client-side and open a prefilled email. The interface states clearly when the visitor must send. A future server integration can replace only form submission logic.

## 2026-09-23 — Project stack attribution

The resume names WordPress and React across two company websites but does not assign one to each. Individual case studies describe verified responsibilities without claiming a specific stack.
