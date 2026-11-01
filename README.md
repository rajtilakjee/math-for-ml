# The ML Engineer's Field Guide

Tutorials on mathematics and machine learning. Each tutorial is a Markdown file in `content/tutorials`. The site is a Next.js app, equations are typeset with MathJax, and the deploy target is Vercel.

## Add a tutorial

Create `content/tutorials/your-slug.md` with `title` and `description` in the frontmatter. The file name is the URL: `your-slug.md` is published at `/tutorials/your-slug`.

Inline maths uses `$...$` or `\(...\)`. Display maths uses a `$$` block or `\[...\]`. MathJax typesets both.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Import this repository in Vercel. Vercel detects Next.js. A tutorial goes live on the next Vercel deployment after its Markdown file is pushed.
