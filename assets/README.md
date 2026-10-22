# Photos – where to put them

Drop each file into this folder with **exactly** the name below and it appears on the site automatically.
Until a file exists, the site shows a grey placeholder with the expected path.

Tip: export photos as JPG, ~2000 px on the long side, < 500 KB (use squoosh.app). File names are case-sensitive.

## Main page
| File | Where it shows | Recommended |
| --- | --- | --- |
| `img/band.jpg` | Peach “Who we are” band (right side) | roughly square, 1400×1380 |
| `img/about.jpg` | Photo tile in “Mission & values” | square |
| `img/pillar-erasmus.jpg` | What we do – Erasmus+ | landscape 4:3 |
| `img/pillar-participation.jpg` | What we do – Youth participation | landscape 4:3 |
| `img/pillar-education.jpg` | What we do – Non-formal education | landscape 4:3 |

## Projects (`img/projects/`)
Main photo + 3 gallery photos per project, e.g. `bukowina.jpg`, `bukowina-1.jpg`, `bukowina-2.jpg`, `bukowina-3.jpg`.
Exact names are listed in `data.js` → `PROJECTS` → `image` and `gallery`.

## Stories (`img/stories/`)
`story-1.jpg` (shown large, landscape 16:9), `story-2.jpg` … `story-4.jpg` (landscape 3:2) – photos of participants. Add a video link in `data.js` → `STORIES` → `video` to show a “Watch the film” button.

## Team (`img/team/`)
`member-1.jpg` … `member-4.jpg` – square portraits.

## News (`img/news/`)
`news-1.jpg` – landscape 3:2 (only the newest article shows a photo; the next two appear as coloured tiles).

## Partner logos (`img/logos/`)
Optional. Put a PNG/SVG here and set `logo: "assets/img/logos/name.png"` in `data.js` → `PARTNERS` / `SUPPORTERS`.
