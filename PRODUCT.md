# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing implementation: a single static `index.html` built on a custom "DC" template
runtime (`assets/js/support.js`, generated — not hand-edited), rendering with React 18
loaded from a CDN at runtime. No build step, no framework, no backend. This describes
the landing page only; it is not necessarily the stack of the app behind the login (see
Operating Context).

## Users

Anyone preparing for a exam or selection process with a fixed date and no assigned
prep program: concurseiros (concursos públicos), vestibular/ENEM candidates, Medicina
students, OAB candidates, people pursuing certifications, and students facing academic
exams. Confirmed: the product is deliberately generic across these audiences — none is
prioritized over the others in product or design decisions. Their shared job: turn study
effort into a structured, trackable path toward a known exam date, rather than
unplanned, unmeasured studying.

## Product Purpose

Aprova Aê lets someone organize their study routine, track their performance, and turn
exam preparation into a more strategic, structured journey — instead of studying a lot
without a clear structure. Success looks like a user who can see their plan, their
consistency, and their evolving performance at any point in the preparation, and who
trusts the system to keep past material from being forgotten.

## Positioning

Confirmed differentiator: unifying plan, routine, question tracking, spaced review
scheduling, and progress history in one place — replacing the spreadsheets and
disconnected apps a self-directed exam candidate would otherwise stitch together.
Automatic review scheduling (the landing page's "revisões entram no seu calendário
automaticamente") is the concrete mechanism behind that claim, but the confirmed
positioning is the unification itself, not review scheduling alone.

## Operating Context

The landing page ("Começar agora" CTA) sits in front of a real product app/dashboard
that is being developed in parallel — the landing must stay consistent with that app,
not just function as a standalone marketing piece. The landing itself has no backend:
every CTA is currently an in-page anchor (`#cta`, `#planos`, `#top`), not a live signup
or login flow.

Core workflows implied by the current landing copy (to preserve, not to redesign here):
setting a study goal/exam target, weekly routine planning across disciplines, logging
study hours and questions answered/correct, automatic scheduling of spaced reviews, and
viewing performance history/progress over time.

## Capabilities and Constraints

- Free and Premium plans exist conceptually; monthly/annual toggle is already
  implemented in the landing page. Premium pricing values shown (R$ 24–34/mês) are
  explicitly placeholders, not final pricing — the page itself says so.
- No real authentication, payment, or dashboard exists inside this repository; this
  repo is the landing page only.
- Testimonials section content is placeholder/blank-slate by design (labeled
  "espaço reservado" in the current copy) — not real customer testimonials.

## Brand Commitments

- Name: "Aprova Aê" (with the circumflex).
- Wordmark pairing: 'Plus Jakarta Sans' (weights 500–800) for display/headings and UI
  labels, 'DM Sans' for body copy.
- Primary brand colors in current implementation: indigo `#0014ED` (primary/CTA) and
  deep navy `#000366` (dark accents, gradients, footer wordmark), on white/`#F7F8FC`
  neutral surfaces, with `#0E9F6E` green and `#4ADE80` used as small
  success/positive-signal accents.
- Logomark: a rounded-square gradient tile with a simple check/arrow glyph.

## Evidence on Hand

No real customer testimonials, case studies, press, or usage benchmarks exist yet — the
testimonials section and any performance figures currently on the page (e.g. "68%",
"1.240 questões", "+14%") are illustrative placeholders, not real data. Future work must
not present these as real evidence.

## Product Principles

1. Stay audience-agnostic: no feature, copy, or design decision should silently favor
   one exam vertical (concursos, vestibular/ENEM, Medicina, OAB, certifications,
   academic exams) over the others.
2. Unification is the pitch: plan, routine, questions, reviews, and progress belong in
   one coherent system, not as separately-styled bolt-ons.
3. Never fabricate evidence: no invented testimonials, benchmarks, customer names, or
   real-sounding numbers beyond what is explicitly marked placeholder.
4. Landing and app must read as one product: visual and structural decisions here should
   anticipate consistency with the in-development app/dashboard, not just optimize the
   marketing page in isolation.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established beyond standard web
accessibility practice.
