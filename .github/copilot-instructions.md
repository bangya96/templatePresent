# AEM Enersol Slidev Template — Copilot Instructions

This is a **Slidev** presentation project using the AEM Enersol corporate template. When the user asks you to create or modify slides, follow these instructions.

## Project Overview

- Framework: **Slidev** (Vue-based Markdown presentation)
- The main file to edit is **`slides.md`**
- Custom layouts are in the `layouts/` folder
- Assets (logo, images) are in the `public/` folder
- Styles use the AEM Enersol brand colors

## Brand Colors

Use these colors in any custom HTML/CSS:

| Name         | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| green-light | `#8BC977` | Accent, highlights       |
| green       | `#63BF81` | Secondary accent         |
| teal-light  | `#28B98F` | Gradient midpoint        |
| teal        | `#03AD9A` | Primary brand color      |
| teal-dark   | `#008192` | Links, interactive       |
| blue-dark   | `#064B77` | Section headers          |
| navy        | `#1D275A` | Primary dark / headings  |

Gradient: left `#8BC977` → right `#1D275A`

## How to Write Slides

Slides are separated by `---`. Each slide can have frontmatter (YAML between `---` lines).

### Slide Structure Template

```md
---
layout: aem-content
title: Your Title Here
subtitle: Your Subtitle Here
---

Your markdown content here...

---
```

## Available Layouts

### 1. `aem-cover` — Cover/Title Slide

First slide of the presentation. Has hexagonal decorations on the left, content on the right.

**Named slots:**
- `::title::` — Main presentation title (use `# TechTalk`)
- `::subtitle::` — Subtitle (use `## Subtitle text`)
- `::author::` — Prepared by text
- `::client::` — Prepared for (logos, company names)

**Example:**
```md
---
layout: aem-cover
---

::title::
# Project Name

::subtitle::
## Brief description of the presentation

::author::
John Doe, Senior Engineer

::client::
**Prepared For:** Client Company
```

### 2. `aem-section` — Section Divider

Full-page section divider with large centered text and hexagonal decorations. Use between major sections.

**Default slot:** The headline text.
**Named slot:** `::body::` — Optional text below the headline.

**Example:**
```md
---
layout: aem-section
---

# SECTION TITLE
```

### 3. `aem-content` — Standard Content Slide

The most common slide type. Has header bar with AEM logo, title/subtitle area, content body, and footer.

**Props (in frontmatter):**
- `title` — Slide title (teal color)
- `subtitle` — Slide subtitle (navy color, with left accent border)
- `footerTitle` — Footer left text (default: "Place your cover page title here")

**Default slot:** Main content area — supports full markdown (lists, tables, blockquotes, code).

**Example:**
```md
---
layout: aem-content
title: Your Title
subtitle: Your Subtitle
---

- Bullet point one
- Bullet point two
- Bullet point three

> Important note or quote
```

### 4. `aem-two-cols` — Two-Column Layout

Content slide with two side-by-side columns.

**Props:** Same as `aem-content` (`title`, `subtitle`, `footerTitle`)

**Named slots:**
- `::content::` — Optional intro text above columns
- `::left::` — Left column content
- `::right::` — Right column content

**Example:**
```md
---
layout: aem-two-cols
title: Comparison
subtitle: Option A vs Option B
---

::left::

### Option A

- Feature 1
- Feature 2
- Feature 3

::right::

### Option B

- Feature 1
- Feature 2
- Feature 3
```

### 5. `aem-four-cols` — Four-Column Layout

Content slide with four equal columns, ideal for feature showcases or card layouts.

**Props:** Same as `aem-content` (`title`, `subtitle`, `footerTitle`)

**Named slots:**
- `::content::` — Optional intro text above columns
- `::col1::` — First column
- `::col2::` — Second column
- `::col3::` — Third column
- `::col4::` — Fourth column

**Example:**
```md
---
layout: aem-four-cols
title: Our Services
subtitle: Core Capabilities
---

::col1::

### 🔧 Engineering

Design and build solutions

::col2::

### 📊 Analytics

Data-driven insights

::col3::

### ☁️ Cloud

Scalable infrastructure

::col4::

### 🔒 Security

Enterprise protection
```

### 6. `aem-steps` — Process/Steps Slide

Content slide for numbered steps or processes. Each step is an HTML block with specific CSS classes.

**Props:** `title`, `footerTitle`

**Default slot:** Step items using this HTML structure:

```html
<div class="step-item" style="--step-color: #03AD9A">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3>Step Title</h3>
    <p>Step description text.</p>
  </div>
</div>
```

Use these colors for sequential steps:
- Step 1: `#03AD9A` (teal)
- Step 2: `#008192` (teal-dark)
- Step 3: `#064B77` (blue-dark)
- Step 4: `#1D275A` (navy)

**Example:**
```md
---
layout: aem-steps
title: Implementation Process
---

<div class="step-item" style="--step-color: #03AD9A">
  <div class="step-number">1</div>
  <div class="step-content">
    <h3>Planning</h3>
    <p>Define scope, timeline, and resources.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #008192">
  <div class="step-number">2</div>
  <div class="step-content">
    <h3>Development</h3>
    <p>Build and test the solution.</p>
  </div>
</div>

<div class="step-item" style="--step-color: #064B77">
  <div class="step-number">3</div>
  <div class="step-content">
    <h3>Deployment</h3>
    <p>Roll out to production environment.</p>
  </div>
</div>
```

### 7. `aem-end` — Thank You / Closing Slide

Final slide with gradient band and AEM branding.

**Default slot:** Thank you text (use `# THANK YOU`)
**Named slot:** `::contact::` — Contact information below the gradient band.

**Example:**
```md
---
layout: aem-end
---

# THANK YOU

::contact::

**Company Name** — www.example.com — email@example.com
```

## Tips for Creating Good Slides

1. **Always start with `aem-cover`** and end with `aem-end`
2. **Use `aem-section`** between major topics as dividers
3. **Keep content concise** — bullet points over paragraphs
4. **Use tables** for structured data (timelines, comparisons)
5. **Use `aem-steps`** for processes, workflows, or sequential information
6. **Use `aem-two-cols`** for comparisons or side-by-side info
7. **Use `aem-four-cols`** for feature showcases or card grids
8. The first frontmatter block (before the first `---` separator) configures the entire deck:
   ```yaml
   ---
   title: Presentation Title
   theme: none
   aspectRatio: 16/9
   canvasWidth: 980
   ---
   ```

## Common Slide Patterns

### Agenda Slide
```md
---
layout: aem-content
title: Agenda
subtitle: Today's Discussion
---

- **Topic 1** — Description
- **Topic 2** — Description
- **Topic 3** — Description
```

### Data/Statistics Slide
```md
---
layout: aem-four-cols
title: Key Metrics
subtitle: Q4 2024 Results
---

::col1::
### 📈 Revenue
**$24M**
+15% YoY growth

::col2::
### 👥 Clients
**50+**
Active enterprise clients

::col3::
### 🌍 Markets
**8**
Countries served

::col4::
### ⭐ NPS
**92**
Customer satisfaction
```

### Comparison Slide
```md
---
layout: aem-two-cols
title: Before vs After
---

::left::
### Before
- Manual processes
- Limited visibility
- High costs

::right::
### After
- Automated workflows
- Real-time dashboard
- 40% cost reduction
```
