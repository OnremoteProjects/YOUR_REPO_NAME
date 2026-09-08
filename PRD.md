# Product Requirements Document
## Ram Pyari Kundan Lal Mahajan NGO — Website

**Version:** 1.0
**Status:** Draft for review — placeholders throughout marked `TODO`
**Owner:** NGO team
**Built as:** Static HTML / CSS / JS (no build tools required, deploy anywhere)

---

## 1. Purpose & Goals

Build a public website for the NGO that:
1. Tells the NGO's story and builds trust (About Us).
2. Showcases the two flagship courses and their **measurable impact**, with growing-number animation.
3. Highlights the **Drishti certification partnership** prominently, since it is a key credibility signal.
4. Shows real proof of work via photo carousels (Inauguration Day, Review Meetings).
5. Makes it effortless to **donate**, **volunteer**, or **enrol**, and to contact the trust (phone / email / map).

**Out of scope for v1:** payment gateway integration, CMS/admin panel, blog, multi-language support. Notes are left in the code (`TODO`) for where these can be added later.

---

## 2. Users

| User | Need |
|---|---|
| Prospective donor | Understand impact quickly, trust the org, donate easily |
| Rural woman / youth (or their family) | Understand what the course teaches, how long, how to enrol |
| Volunteer | Understand how to get involved |
| Partner / govt body / Drishti | See the partnership is real and visible |
| General visitor / press | Understand who the NGO is and what it has achieved |

---

## 3. Site Map

```
Home (index.html)
├── About Us (about.html)
│     └── #drishti — Drishti partnership section
├── Our Programs (programs.html)
│     ├── #tailoring — Tailoring Course for Rural Women
│     └── #dca — Diploma in Computer Application
├── Gallery (gallery.html)
│     ├── Inauguration Day (tab + carousel)
│     └── Review Meetings (tab + carousel)
└── Contact Us (contact.html)
      ├── #volunteer — Get in touch / contact form
      ├── #message-form — Send Us a Message form
      └── #donate — Donate section
```

Every page shares the same header (top bar + nav) and footer.

**Optional future pages** (mentioned by client as "nice to have", not required for v1):
- Events (if the NGO starts running public events/camps)
- Blog / News (updates, press mentions)
- Testimonials (dedicated page pulling quotes from graduates)

These are easy to add later using the same header/footer/section patterns already established.

---

## 4. Page-by-Page Requirements

### 4.1 Home (`index.html`)
- Top bar: social icons + 2 phone numbers + email.
- Header: logo + NGO name, nav (Home / About Us / Our Programs / Gallery / Contact Us), Donate Now button, mobile hamburger.
- Hero: headline + subtext + "Explore Our Programs" and "Donate Now" CTAs, background image placeholder.
- Action strip (3 cards): Enrol in a Course / Become a Volunteer / Support a Student.
- About snippet: short paragraph (placeholder for client's About text) + "Read Our Full Story" link.
- **Programs preview**: 2 cards (Tailoring, Computer Diploma) with course tag, duration, "Drishti Certified" badge, link to full detail on Programs page.
- **Impact counters** (dark teal band): 4 animated counters — women trained, students trained, certificates issued, active batches. Numbers count up from 0 when scrolled into view.
- **Drishti partnership banner**: dedicated, visually distinct section pairing NGO logo + Drishti logo, explaining the tie-up.
- Gallery preview: 1 carousel mixing a few Inauguration + Review images, "View Full Gallery" link.
- CTA band: donation call to action.
- Footer: brand blurb, quick links, programs links, contact details, social icons, copyright.

### 4.2 About Us (`about.html`)
- Page hero banner.
- About Us story (split layout, photo + paragraph — **placeholder marked for the client's supplied About Us text**).
- Mission / How We Work / Certified Outcomes — 3 value cards.
- **Drishti partnership detail section** (`#drishti`) — same visual treatment as home page banner, expanded text, anchor link used from nav/footer.
- Journey / timeline: Centre Inaugurated → Drishti Partnership Formalised → Ongoing Reviews (placeholder years/dates).
- CTA to Gallery.

### 4.3 Our Programs (`programs.html`)
- Page hero banner.
- Intro section.
- **Tailoring Course** (`#tailoring`): photo, description (placeholder for PDF content), **curriculum accordion** (4 sample modules — to be replaced module-by-module once the course PDF is provided), **impact counters** scoped to this course (women trained, batches completed, certificates issued), Enrol CTA.
- **Computer Diploma (DCA)** (`#dca`): photo, description, **curriculum accordion with all 8 real modules already filled in** from the brief (Computer Basics, Windows OS, Typing, MS Office, Internet & Email, Networking, Tally with GST, Files/Folders + Practical Work), impact counters scoped to this course, Enrol CTA.
- Drishti certification callout (repeated, course-specific framing).

### 4.4 Gallery (`gallery.html`)
- Page hero banner.
- Two tabs: **Inauguration Day** / **Review Meetings**, each backed by its own **image carousel** (arrows, dots, swipe, captions, autoplay).
- 5 placeholder slides per album (expandable).
- Explainer cards on how to swap in real photos / add new albums later.

### 4.5 Contact Us (`contact.html`)
- Page hero banner.
- **"Get in Touch"** panel (dark teal, matches client's reference layout): intro line, phone (both numbers), email, address, **Donate Now** + **Become a Volunteer** buttons.
- **"Send Us a Message"** form panel (cream): name, phone, email, reason dropdown, message, submit. Front-end only in v1 — needs a backend/email-service hookup (noted in code).
- **Map section**: Google Maps **Embed API** iframe with a clearly marked placeholder for the API key and address (`YOUR_GOOGLE_MAPS_API_KEY`).
- **Donate section** (`#donate`): CTA band; button currently opens a pre-filled email, marked for replacement with a real payment gateway / UPI link.

---

## 5. Content Inputs Needed From the Client

The site is fully built and wired with clearly marked `TODO` placeholders. To finish it, please supply:

| # | Item | Where it goes |
|---|---|---|
| 1 | NGO logo (transparent PNG/SVG) | `assets/images/logo-ngo.svg` (replace) |
| 2 | Drishti logo | `assets/images/logo-drishti.svg` (replace) |
| 3 | About Us paragraph(s) | `about.html` story section + `index.html` snippet |
| 4 | Inauguration Day photos (as many as you have) | `assets/images/gallery-inauguration-*.jpg` |
| 5 | Review Meeting photos | `assets/images/gallery-review-*.jpg` |
| 6 | Tailoring course curriculum PDF | Expands the 4 sample modules in `programs.html#tailoring` into the real ones |
| 7 | Confirmed real impact numbers (students trained, certificates issued, batches, etc.) | `data-target` attributes in `index.html` and `programs.html` |
| 8 | Registered address | `contact.html` address block + map `q=` parameter |
| 9 | Google Maps API key | `contact.html` map iframe `key=` parameter |
| 10 | Donation method (UPI ID / payment gateway account) | `contact.html` `#donate` button link |
| 11 | Social media links (Facebook, Instagram, WhatsApp, LinkedIn) | Top bar & footer icons in every page |
| 12 | Hero / general photography (optional, beyond gallery) | `assets/images/hero-main.jpg`, `about-*.jpg`, `program-*.jpg` |

### How to send images
Upload them directly in this chat (drag-and-drop or the attach button) — once received, they can be dropped straight into `assets/images/` under the matching filename shown above, so nothing else in the code needs to change.

---

## 6. Design System

Derived from the client's reference screenshot (donation-NGO template, teal + saffron).

| Token | Value | Use |
|---|---|---|
| `--teal-900` | `#1c3b3b` | Header text/bg, dark sections, primary brand color |
| `--saffron-500` | `#e8952e` | Primary accent, CTAs, highlights |
| `--cream-100` | `#faf7f1` | Alternate section background |
| `--white` | `#ffffff` | Base background |
| Display font | Poppins (600/700) | Headings |
| Body font | Work Sans (400/500/600) | Body copy, UI |

- Rounded pill buttons, soft card shadows, rounded-corner imagery — matches the warm, approachable NGO tone from the reference.
- Dark teal used for header/footer/banners; saffron reserved for CTAs and key highlights (Drishti banner, counters, buttons) so it doesn't get diluted.

---

## 7. Key Interactive Behaviours

1. **Animated impact counters** — count up from 0 to target value when scrolled into view (`IntersectionObserver` + `requestAnimationFrame`), used on Home (site-wide impact) and Programs (per-course impact).
2. **Image carousels** — arrows, dot navigation, autoplay (5s), touch-swipe support; used for Gallery (2 albums) and Home gallery preview.
3. **Curriculum accordion** — expandable module list on Programs page.
4. **Responsive nav** — collapses to a hamburger menu under ~940px.
5. **Contact form** — client-side validation + confirmation message; needs backend wiring (see `TODO` in `contact.html`).

---

## 8. Technical Notes

- Pure HTML/CSS/JS, no framework or build step — open `index.html` directly or host on any static host (Netlify, GitHub Pages, Hostinger, etc.).
- All images are SVG placeholders with descriptive labels (e.g. `program-tailoring.jpg.svg`) so it's obvious what to replace and where.
- Google Fonts loaded via CDN (`Poppins`, `Work Sans`) — requires internet access when the site is viewed.
- Google Maps requires an **Embed API key** (free tier available from Google Cloud Console) — placeholder is clearly marked in `contact.html`.
- Accessibility: visible focus states, semantic headings, alt text on all images, `prefers-reduced-motion` respected.

---

## 9. Open Questions for the Client

1. Do you want the **Donate Now** button to link to a payment gateway (Razorpay/Instamojo/PayU), a UPI QR code, or bank details displayed on the page?
2. Should the contact form deliver messages by email (e.g. via Formspree) or do you have a backend/CRM it should post to?
3. Any additional courses planned beyond Tailoring and DCA, that the Programs page should be built to scale to?
4. Do you want testimonials/quotes from graduates included anywhere (Home or a dedicated page)?





<!-- <span>Yogender K. Gupta</span>
          <span>Ved Prakash Gupta</span>
          <span>Chanan Prakash Mahajan</span> -->
