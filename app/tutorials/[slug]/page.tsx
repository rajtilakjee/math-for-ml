import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { TutorialBody } from "@/components/tutorial-body"
import { renderMarkdown } from "@/lib/markdown"
import { getTutorial, getTutorials } from "@/lib/tutorials"

type TutorialPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getTutorials().map((tutorial) => ({ slug: tutorial.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: TutorialPageProps): Promise<Metadata> {
  const { slug } = await params
  const tutorial = getTutorial(slug)
  if (!tutorial) return { title: "Not found" }

  return {
    title: tutorial.title,
    description: tutorial.description,
  }
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params
  const tutorial = getTutorial(slug)
  if (!tutorial) notFound()

  const html = await renderMarkdown(tutorial.content)

  return (
    <main className="pt-10">
      <Link
        href="/"
        className="text-sm text-accent underline underline-offset-4 outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
      >
        All tutorials
      </Link>
      <header className="mt-6">
        <h1 className="font-display text-3xl leading-tight tracking-tight">
          {tutorial.title}
        </h1>
        <p className="mt-3 leading-relaxed text-muted">{tutorial.description}</p>
        {tutorial.tags.length > 0 ? (
          <p className="mt-4 text-sm text-clay">{tutorial.tags.join(" · ")}</p>
        ) : null}
      </header>
      <div className="mt-10">
        <TutorialBody html={html} />
      </div>
    </main>
  )
}
