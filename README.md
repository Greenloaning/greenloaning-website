# Greenloaning Biostudies — Website

Static rebuild of the Greenloaning Biostudies website (an ecological consultancy), replacing the original WordPress site at [greenloaning.com.au](http://greenloaning.com.au/). Plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Status

The rebuild and a systematic site audit are complete and merged to `main`. Hosted on GitHub Pages under the `Greenloaning` org at https://greenloaning.github.io/greenloaning-website/ — live, but not yet pointed at the real domain (see To-do below).

## Structure

```
├── *.html          23 pages (services, projects/case-studies, team, contact, etc.)
├── style.css        single stylesheet, no preprocessor
├── main.js          nav toggle, scroll effects, contact form submission (Web3Forms)
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

- [ ] **Point greenloaning.com.au at GitHub Pages.** Blocked on registrar access — nobody on this project has login to wherever the domain is currently managed yet. Once available: add the domain under Pages settings (creates a `CNAME` file), then at the registrar add 4 `A` records (apex) to GitHub's Pages IPs (185.199.108/109/110/111.153) plus a `CNAME` for `www` → `greenloaning.github.io`, then enable "Enforce HTTPS" once DNS resolves.
- [ ] **Swap contact form to the real business inbox.** Submissions currently go to `greenloaning@proton.me` (a testing address) — before real launch, generate a fresh access key at web3forms.com against the real business inbox (e.g. `adminteam@greenloaning.com.au`) and swap the `access_key` value in `contact.html`.
- [ ] **Deeper SEO.** Basic on-page SEO (meta descriptions, robots.txt, sitemap.xml, favicon) is done. Still open: structured data (schema.org), analytics, keyword research, submitting the sitemap to Google Search Console / Bing Webmaster Tools once the domain is live.
- [ ] **Full accessibility pass.** Only spot-checked so far (alt text, basic contrast). A proper WCAG audit hasn't been done.
- [ ] **Broader cross-browser/device testing.** Verified in headless Chrome (desktop + mobile emulation) and briefly on a real phone. Not tested in Safari/Firefox or on a range of real devices.
- [ ] **Alison Martin's photo** (company-director page, team page) is cropped tight to her face — the only source photo available is already tightly cropped with no room to show more. Would need a new, less-tightly-cropped photo from her to improve this.

## Notes for whoever picks this up next

- No `package.json`, no dependencies to install, nothing to compile. Edit HTML/CSS/JS directly and refresh the browser.
