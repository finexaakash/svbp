# SVBP College multi-page static website

## Pages
- `index.html` — Home
- `about.html` — About us
- `messages.html` — Chairman & Principal messages
- `faculty.html` — Faculty
- `campus.html` — Campus gallery and directions
- `admissions.html` — Admissions information
- `contact.html` — Contact details

Shared assets and styling: `assets/`, `style.css`, `script.js`.

## Cloudflare Pages deployment
This is a static website. No backend, database, npm install, or build command is needed.

### Direct Upload
1. Extract this ZIP on your computer.
2. In Cloudflare Dashboard, open **Workers & Pages** and create a Pages project using **Direct Upload / Upload assets**.
3. Upload the contents of this folder, ensuring `index.html` is at the top level.
4. Leave the build command empty and deploy.

### Git-based deployment
Push all files to a GitHub repository and connect it to Cloudflare Pages. Select no framework/build command and set the output directory to the repository root as the Cloudflare interface allows.

## Important content note
Confirm faculty names, designations, affiliations, course approvals, facilities and all institutional claims with the college before publishing. The Messages page contains general B.Ed. learning copy, not statements attributed to named leaders. The page uses a lightweight map-style illustration and a link to Google Maps, not a map API.

## Homepage refresh
The homepage now uses a forest-green, sage, ivory and amber palette with expanded sections for B.Ed. teacher education, pedagogy, learner development, classroom practice, faculty information, campus, admissions and contact details. Confirm institutional claims, admission requirements and facility details with the college before publishing.


## Easy edits (no backend required)

### Campus photo gallery
The campus gallery uses the supplied photos in `assets/campus-*.webp`. Replace a photo by keeping its filename, or update its references in `campus.html`, `index.html`, `style.css` or `script.js`.

### Edit faculty details
The Faculty page summarizes B.Ed. learning areas. Add staff names and designations only after confirming them with the college.

### Animation and responsive design
`script.js` provides scroll-reveal effects, count-up numbers, mobile navigation and automatic footer year. `style.css` includes responsive layouts and reduced-motion support. Keep both files alongside all HTML files.

### Changing the animated numbers
In `index.html`, elements such as `<span data-count="15">15</span>` animate when they appear on screen. Change `data-count` and the displayed starting text to your desired number. Only show factual numbers that the college can verify.

## Latest dynamic homepage polish
The homepage now has a four-image auto-rotating hero slideshow with clickable dots and a next control, stronger entrance/hover animations, improved count-up facts, layered hero/fact-band stacking fixes, and an image editing guide (`IMAGE-EDITING-GUIDE.md`). The slideshow image list is editable in `script.js`.
