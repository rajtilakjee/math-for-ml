# Math for Machine Learning

A structured, first-principles mathematics curriculum for machine learning, deep learning, and large language models.

## Curriculum structure

Tutorials are organized by mathematical subject and prerequisite sequence. Each Markdown file is published as an individual page under `/tutorials`.

### Part I: Foundations

1. [Algebra Foundations](content/tutorials/01-foundations/01-algebra-foundations.md)
2. [Exponents and Logarithms](content/tutorials/01-foundations/02-exponents-and-logarithms.md)
3. [Equations and Inequalities](content/tutorials/01-foundations/03-equations-and-inequalities.md)
4. [Functions](content/tutorials/01-foundations/04-functions.md)
5. [Function Composition and Inverse Functions](content/tutorials/01-foundations/05-function-composition-and-inverses.md)
6. [Quadratic Functions and Equations](content/tutorials/01-foundations/06-quadratic-functions-and-equations.md)
7. [Polynomial Functions](content/tutorials/01-foundations/07-polynomial-functions.md)
8. [Rational Functions](content/tutorials/01-foundations/08-rational-functions.md)
9. [Exponential Functions](content/tutorials/01-foundations/09-exponential-functions.md)
10. [Trigonometry Foundations](content/tutorials/01-foundations/10-trigonometry-foundations.md)
11. [Sequences and Series](content/tutorials/01-foundations/11-sequences-and-series.md)

Part I builds the algebraic and function fluency needed for linear algebra, calculus, probability and statistics. The chapters cover equations and inequalities, function composition and inverses, polynomial and rational functions, exponential behaviour, trigonometry, and summation.

### Planned parts

- **Part II: Linear Algebra**
- **Part III: Calculus**
- **Part IV: Probability and Statistics**
- **Part V: Classical Machine Learning**
- **Part VI: Deep Learning**
- **Part VII: Foundations of Large Language Models**

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
