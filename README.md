# Math for Machine Learning

Tutorials on the mathematics used in machine learning. Each tutorial is a Markdown file in `content/tutorials`. The site is a Next.js app, equations are typeset with MathJax, and the deploy target is Vercel.

## Add a tutorial

Create a Markdown file anywhere under `content/tutorials`, including in a subfolder. Give it a `title` and `description` in the frontmatter. `content/tutorials/maths/algebra.md` is published at `/tutorials/maths/algebra`. The home page lists every file as a table of contents, grouped by folder.

Inline maths uses `$...$` or `\(...\)`. Display maths uses a `$$` block or `\[...\]`. MathJax typesets both.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Import this repository in Vercel. Vercel detects Next.js. A tutorial goes live on the next Vercel deployment after its Markdown file is pushed.
