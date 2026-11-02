# Nilesh Singh — Portfolio

A responsive developer portfolio converted from a single HTML file into reusable React components with Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`.

## Update links, images, and portfolio content

Edit [`src/config.js`](./src/config.js). No component changes are needed for routine content updates.

- **Profile image:** paste a direct image URL into `PROFILE.profileImage`.
- **Project images:** paste a URL into the matching project's `image` field. Leave it empty to keep the built-in artwork.
- **Resume and social links:** paste URLs into `PROFILE.links.resume`, `github`, `linkedin`, or `instagram`.
- **Email:** set `PROFILE.links.email` to an email address. The contact form opens a message in the visitor's default email app.
- **Projects, skills, stats, and other text:** update the matching arrays and fields in `PROFILE`. Stats count up and down as you scroll; change each `stats[].value` to update its target.

For local images, place files in `public/` and use a root-relative path such as `/images/profile.jpg`.

## Project structure

```text
src/
├── App.jsx
├── config.js
├── index.css
├── main.jsx
├── components/
│   ├── About.jsx
│   ├── Activity.jsx
│   ├── ContactModal.jsx
│   ├── Footer.jsx
│   ├── Goals.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Journey.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
└── pages/
    └── Portfolio.jsx
```
