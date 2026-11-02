# Math for Machine Learning

A structured, first-principles mathematics curriculum for machine learning, deep learning, and large language models.

## Curriculum structure

Tutorials are organized by mathematical subject and prerequisite sequence. Each Markdown file is published as an individual page under `/tutorials`.

### Part I: Foundations

1. [Algebra Foundations](content/tutorials/01-foundations/01-algebra-foundations.md)
2. [Exponents and Logarithms](content/tutorials/01-foundations/02-exponents-and-logarithms.md)
3. [Functions](content/tutorials/01-foundations/03-functions.md)
4. [Quadratic Functions and Equations](content/tutorials/01-foundations/04-quadratic-functions-and-equations.md)
5. [Polynomial Functions](content/tutorials/01-foundations/05-polynomial-functions.md)

Topics still to be added to this part: function composition, inverse functions, exponential functions, and trigonometry.

### Planned parts

- **Part II: Linear Algebra**
- **Part III: Calculus**
- **Part IV: Probability and Statistics**
- **Part V: Classical Machine Learning**
- **Part VI: Deep Learning**
- **Part VII: Foundations of Large Language Models**

The order is intentional: algebra and functions develop the notation and manipulation skills needed for linear algebra and calculus. Those subjects then support probability, statistics, and machine learning.

## Add a tutorial

Create a Markdown file anywhere under `content/tutorials`. Add `title` and `description` in its YAML frontmatter. The directory structure determines the published URL and the home-page grouping.

For example, `content/tutorials/02-linear-algebra/vectors.md` is published at `/tutorials/02-linear-algebra/vectors`.

Inline maths uses `$...$` or `\\(...\\)`. Display maths uses a `$$` block or `\\[...\\]`. MathJax typesets both.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Import this repository in Vercel. Vercel detects Next.js. A tutorial goes live on the next Vercel deployment after its Markdown file is pushed.
