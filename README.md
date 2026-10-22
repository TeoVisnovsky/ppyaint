# Papaya International – static website

Plain HTML, CSS and vanilla JavaScript – no build step, works on any hosting.

| File | What it is |
| --- | --- |
| `index.html` | Page structure and static texts |
| `styles.css` | All styles (mobile-first) |
| `script.js` | Renders content, project filter & modal, menu, contact form |
| `data.js` | **Editable content** – projects, team, partners, supporters, news, contact details |

## Editing content

Open `data.js`, copy an existing object in the relevant array (e.g. `PROJECTS`, `TEAM`, `NEWS`) and change the values. Leave `image` empty to show a grey placeholder. Only the 3 newest news items are displayed.

## Contact form

Set `SITE.formEndpoint` in `data.js` to a form service endpoint (e.g. Formspree). When empty, the form opens the visitor's e-mail app.

## Local preview

```
python3 -m http.server 8000
```
