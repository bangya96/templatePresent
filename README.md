# AEM Enersol — Slidev Presentation Template

A branded Slidev presentation template with AEM Enersol corporate styling. Designed for use with **GitHub Copilot** — open the project in VS Code, describe your presentation content, and Copilot will generate slides using the template's custom layouts.

## Quick Start

```bash
npm install
npm run dev
```

This opens the presentation at `http://localhost:3030`.

## How to Use with GitHub Copilot

1. Open this project in VS Code with GitHub Copilot enabled
2. Open `slides.md`
3. Prompt Copilot to create your presentation:

> "Create a 10-slide presentation about cloud migration strategy for enterprise clients"

> "Replace the sample slides with a project status update presentation covering timeline, milestones, and next steps"

> "Add a new slide after slide 3 comparing AWS vs Azure vs GCP using the two-column layout"

Copilot reads the instructions in `.github/copilot-instructions.md` and knows all available layouts, slots, and props.

## Available Layouts

| Layout | Description | Use For |
|--------|-------------|---------|
| `aem-cover` | Title slide with hexagon decorations | First slide |
| `aem-section` | Full-page section divider | Between major sections |
| `aem-content` | Standard content with title/subtitle | Most slides |
| `aem-two-cols` | Two-column layout | Comparisons, side-by-side |
| `aem-four-cols` | Four-column grid | Feature showcases, metrics |
| `aem-steps` | Numbered process steps | Workflows, procedures |
| `aem-end` | Thank you / closing slide | Last slide |

## Project Structure

```
├── slides.md                  # Your presentation content
├── layouts/                   # Custom slide layouts
│   ├── aem-cover.vue
│   ├── aem-section.vue
│   ├── aem-content.vue
│   ├── aem-two-cols.vue
│   ├── aem-four-cols.vue
│   ├── aem-steps.vue
│   └── aem-end.vue
├── components/                # Shared UI components
│   ├── AemHeader.vue
│   ├── AemFooter.vue
│   └── HexBackground.vue
├── styles/
│   └── index.css              # Brand colors & global styles
├── public/                    # Static assets (logo, images)
├── .github/
│   └── copilot-instructions.md  # Copilot layout guide
└── uno.config.ts              # UnoCSS theme config
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Green Light | `#8BC977` | Accent, highlights |
| Green | `#63BF81` | Secondary accent |
| Teal Light | `#28B98F` | Gradient midpoint |
| Teal | `#03AD9A` | Primary brand color |
| Teal Dark | `#008192` | Links, interactive |
| Blue Dark | `#064B77` | Section headers |
| Navy | `#1D275A` | Primary dark / headings |

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run export   # Export to PDF
```

## Customization

- **Colors**: Edit CSS variables in `styles/index.css` and theme in `uno.config.ts`
- **Logo**: Replace `public/logo.svg` with your logo
- **Footer**: Update default text in `components/AemFooter.vue`
- **Layouts**: Modify Vue SFCs in `layouts/` to adjust structure
