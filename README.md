# AuraFizz

A premium, fully responsive website for AuraFizz, a healthy sparkling beverage with 10g of protein per can.
**Tagline:** Refresh Your Everyday.

Built with plain HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and content |
| `style.css` | Design tokens, layout, animations, responsive rules |
| `script.js` | Flavour data, SVG can generator, cards, tabs, nav, form |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push the three files (plus this README) to the root of a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute, the site is live at `https://<your-username>.github.io/<repo-name>/`.

All paths are relative, so it works from a project subpath without changes.

## Customise

- **Flavours:** edit the `FLAVOURS` object at the top of `script.js` (name, colours, notes, pairing). Cards and showcase tabs update automatically.
- **Colours and fonts:** change the variables in `:root` at the top of `style.css`.
- **Product photography:** the cans are generated as inline SVG by `canSVG()` in `script.js`. To use real photos, replace its output with `<img>` tags.
- **Newsletter form:** it only validates the email and shows a message. Connect it to a service (Mailchimp, Formspree, etc.) in the `submit` handler at the bottom of `script.js`.
- **Social links:** replace the placeholder URLs in the footer of `index.html`.
- **Copy:** all text, including the health and protein claims (10g protein, low sugar), is placeholder. Replace it with your real nutrition facts, and check your local labelling rules before publishing health claims.

## Brand palette

| Colour | Hex |
| --- | --- |
| Cream | `#f6f0e4` |
| Forest green | `#1f3d2f` |
| Champagne gold | `#c9a96e` |
| Charcoal | `#2a2a2a` |

## Typography

Cormorant Garamond (headings) and Jost (body), loaded from Google Fonts.

## Accessibility and performance

- Keyboard-focusable cards, tabs and menu, with visible focus rings and `aria-expanded` / `aria-selected` states
- `Esc` closes the mobile menu
- Animations are disabled for visitors who prefer reduced motion
- No images to download, since the product art is inline SVG

## Browser support

Current versions of Chrome, Edge, Firefox and Safari.
