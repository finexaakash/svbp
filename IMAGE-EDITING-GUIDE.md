# Change website images yourself

No backend or build tool is required. All images are in the `assets/` folder.

## Replace a photo
1. Open the `assets` folder.
2. Keep a backup of the original photo.
3. Copy your replacement image into the folder using the exact same filename and extension.
4. Refresh the page. If Cloudflare already hosts the website, redeploy the updated folder.

| File | Where it appears |
|---|---|
| `campus-front.webp` | Homepage hero, page hero and campus gallery |
| `campus-building-side.webp` | Campus gallery |
| `campus-courtyard.webp` | Homepage slideshow and campus gallery |
| `campus-classroom.webp` | Homepage slideshow and campus gallery |
| `campus-computer-room.webp` | Homepage slideshow and campus gallery |
| `campus-computer-room-wide.webp` | Campus gallery |
| `campus-learning-aids.webp` | Campus gallery |
| `campus-teaching-displays.webp` | Homepage introduction and campus gallery |
| `campus-activity-room.webp` | About page and campus gallery |
| `campus-water-point.webp` | Campus gallery |
| `college-seal.png` | College logo |

## Change the hero slideshow
Open `script.js` and find `const slides = [...]`. Each slide has an `image` path and `position`. Update the paths to match filenames inside `assets/`. Keep the four `.hero-dot` buttons in `index.html` aligned with the number of slides.

## Change faculty information
The Faculty page currently describes B.Ed. learning areas. Add confirmed staff names and designations only after checking the details with the college.

## Change animated numbers
In `index.html`, find an element like `<span data-count="7">7</span>`. Update both values to the number you want to display. Use only facts you have verified.

## Edit other text and colors
- Text and section order: edit the corresponding `.html` file.
- Colors, spacing and animations: edit `style.css`.
- Navigation, slideshow and count-up logic: edit `script.js`.
