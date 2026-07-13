# Greenloaning Biostudies — Website

Static rebuild of the Greenloaning Biostudies website (an ecological consultancy), replacing the original WordPress site at [greenloaning.com.au](http://greenloaning.com.au/). Plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Status

The rebuild and a systematic site audit are complete and merged to `main`. Not yet live — still needs to be deployed and pointed at the domain (see To-do below).

## Structure

```
├── *.html          23 pages (services, projects/case-studies, team, contact, etc.)
├── style.css        single stylesheet, no preprocessor
├── main.js          nav toggle, scroll effects, form UI (no backend wired up yet)
├── images/          all site images
├── favicon.ico / favicon-32.png / favicon-192.png / apple-touch-icon.png
├── robots.txt
└── sitemap.xml       lists all 23 pages under greenloaning.com.au
```

No templating — each page is a full standalone HTML file, so shared markup (nav, footer) is duplicated across all 23 files. Editing the nav or footer means updating every page.

## Running locally

No build step needed. From the repo root:

```
python3 -m http.server 8934
```

Then visit `http://localhost:8934`. To check it on a phone on the same Wi-Fi, visit `http://<this-machine's-LAN-IP>:8934` from the phone's browser.

## To-do

- [ ] **Set up GitHub account/org and push this repo.** Recommend a free **GitHub Organization** rather than a personal account or paid plan — GitHub Pages custom domains work on free org accounts, and orgs make it easy to add/remove collaborators or transfer ownership later (relevant since the business may be sold and the site handed to a new owner). *(Planned for the next session.)*
- [ ] **Enable GitHub Pages and point greenloaning.com.au at it** (DNS: CNAME/ALIAS record depending on subdomain vs apex, plus a `CNAME` file in the repo).
- [ ] **Contact form backend.** The form currently shows a "not connected yet, email us directly" notice and has its submit button disabled. GitHub Pages can't run server code, so this needs a third-party static-form service — Formspree, Web3Forms, and Static Forms all have workable free tiers.
- [ ] **Deeper SEO.** Basic on-page SEO (meta descriptions, robots.txt, sitemap.xml, favicon) is done. Still open: structured data (schema.org), analytics, keyword research, submitting the sitemap to Google Search Console / Bing Webmaster Tools once the domain is live.
- [ ] **Full accessibility pass.** Only spot-checked so far (alt text, basic contrast). A proper WCAG audit hasn't been done.
- [ ] **Broader cross-browser/device testing.** Verified in headless Chrome (desktop + mobile emulation) and briefly on a real phone. Not tested in Safari/Firefox or on a range of real devices.
- [ ] **Alison Martin's photo** (company-director page, team page) is cropped tight to her face — the only source photo available is already tightly cropped with no room to show more. Would need a new, less-tightly-cropped photo from her to improve this.

## Notes for whoever picks this up next

- All fixes/decisions from the July 2026 site audit (broken links/images, a corrupted photo recovered via the Wayback Machine, image distortion bugs, mobile nav bugs) are in the git log — commit messages explain the *why*, not just the *what*.
- No `package.json`, no dependencies to install, nothing to compile. Edit HTML/CSS/JS directly and refresh the browser.
