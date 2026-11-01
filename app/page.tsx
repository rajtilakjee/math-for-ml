import Link from "next/link"
import { getTutorials } from "@/lib/tutorials"

const tutorialTemplate = `---
title: Gradient descent
description: How a model steps downhill.
tags:
  - optimization
---

The step is $\\theta \\leftarrow \\theta - \\eta \\nabla L$.

$$
L(\\theta) = \\frac{1}{n} \\sum_{i=1}^{n} \\ell_i
$$`

export default function HomePage() {
  const tutorials = getTutorials()

  return (
    <main className="pt-10">
      <p className="text-xs font-medium tracking-[0.16em] text-accent uppercase">
        Mathematics and machine learning
      </p>
      <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink">
        The ML Engineer&apos;s Field Guide
      </h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted">
        The concepts, code, and craft behind production ML. Each note is a Markdown file,
        and the equations are typeset with MathJax.
      </p>

      <h2 className="mt-12 text-xs font-medium tracking-[0.16em] text-muted uppercase">Tutorials</h2>
      {tutorials.length === 0 ? (
        <p className="mt-4 border-y border-line py-6 text-muted">No tutorials yet.</p>
      ) : (
        <div className="mt-4 divide-y divide-line border-y border-line">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="group block py-5 outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <h3 className="font-display text-xl tracking-tight text-ink group-hover:text-accent">
                {tutorial.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-muted">{tutorial.description}</p>
              {tutorial.tags.length > 0 ? (
                <p className="mt-3 text-sm text-clay">{tutorial.tags.join(" · ")}</p>
              ) : null}
            </Link>
          ))}
        </div>
      )}

      <section className="mt-16">
        <h2 className="font-display text-xl tracking-tight">Publish a tutorial</h2>
        <div className="mt-3 space-y-3 leading-relaxed text-muted">
          <p>
            Add a Markdown file to <code className="text-ink">content/tutorials</code>. The file
            name is the address:{" "}
            <code className="text-ink">content/tutorials/gradient-descent.md</code> is published at{" "}
            <code className="text-ink">/tutorials/gradient-descent</code>.
          </p>
          <p>
            Deploy the repository on Vercel. The new file is published on the next deployment.
            Inline maths uses <code className="text-ink">$...$</code> or <code className="text-ink">\(...\)</code>.
            Display maths uses a <code className="text-ink">$$</code> block or <code className="text-ink">\[...\]</code>.
            MathJax typesets both. Code fences are left as code.
          </p>
        </div>
        <pre className="mt-5 overflow-x-auto rounded-md bg-panel p-4 text-sm leading-relaxed text-ink">
          {tutorialTemplate}
        </pre>
      </section>
    </main>
  )
}
