# couloirgg.github.io

Landing page for **Couloir** — an open source game dev studio building games and tools for the people.

Live at: [couloir.gg](https://couloir.gg)

---

## About

Couloir is an independent studio operating under a pseudonym (handle: **CarbonSMASH**), built on 17+ years of AAA game development experience. Everything we make is open source under GPLv3 — community-first, ad-free, no strings attached.

---

## Community & Support Links

| Platform | URL |
|----------|-----|
| GitHub Org | https://github.com/CouloirGG |
| Discord | https://discord.gg/mwNZ8P6q |
| Ko-fi (support) | https://ko-fi.com/calschuss |
| X / Twitter | https://x.com/CouloirGG |
| YouTube | https://www.youtube.com/channel/UCjZCRl2B_kUd6Ah8gzq4CBQ |

> Ko-fi is the primary public-facing support link. It routes to PayPal on the backend. Do not expose the PayPal dashboard URL publicly.

---

## Active Projects

### POE2 Price Checker
- Real-time overlay tool for Path of Exile 2
- Pulls live market data via OCR
- Stack: Python, OCR, Overlay
- License: GPLv3
- Status: **In Development**

### Retrofit
- Autobattler — scavenge, salvage, and rebuild mechanical units
- 7-person team
- Stack: Unity, C#, Wwise
- Status: **In Development**

---

## Future Brands (Leavenworth, WA)

### Werkhaus
German: "workshop" — CrossFit and strength training gym in Leavenworth's Bavarian village.

### Spielhalle
German: "game hall" — Retro arcade and gaming lounge with community game nights.

---

## Repo Structure

```
couloirgg.github.io/
├── index.html          # Main landing page (single-file HTML/CSS/JS)
├── commission/
│   └── index.html      # Commission inquiry page
├── CNAME               # Custom domain config (couloir.gg)
└── README.md           # This file
```

---

## How to Make Edits

### Quick edits (recommended)
1. Go to [github.dev/CouloirGG/couloirgg.github.io](https://github.dev/CouloirGG/couloirgg.github.io)
2. Open `index.html`
3. Use **Ctrl+H** for find & replace
4. Commit via the Source Control panel (Ctrl+Shift+G) → type message → Ctrl+Enter

### Local dev
```bash
git clone https://github.com/CouloirGG/couloirgg.github.io.git
cd couloirgg.github.io
# Open index.html in browser directly — no build step needed
```

### Deployment
The site is hosted on **GitHub Pages** and auto-deploys on every push to `main`. Changes are usually live within 1-2 minutes.

---

## Notes

- The site is intentionally a **single HTML file** — all CSS and JS is inline. No frameworks, no build pipeline.
- The pseudonym **CarbonSMASH** is used publicly due to employment IP restrictions. Do not associate the studio with real name in public-facing content.
- Ko-fi (`ko-fi.com/calschuss`) is the public support/donation link. PayPal is connected on the backend via Ko-fi — do not link the PayPal dashboard directly.
