import Link from "next/link"
import { getContents, type TocSection, type TutorialSummary } from "@/lib/tutorials"

function TutorialLinks({ tutorials }: { tutorials: TutorialSummary[] }) {
  if (tutorials.length === 0) return null

  return (
    <ul className="border-t border-line">
      {tutorials.map((tutorial) => (
        <li key={tutorial.slug} className="border-b border-line">
          <Link
            href={`/tutorials/${tutorial.slug}`}
            className="group block py-3 outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="font-display text-lg tracking-tight text-ink group-hover:text-accent">
              {tutorial.title}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-muted">{tutorial.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function Sections({ sections, depth }: { sections: TocSection[]; depth: number }) {
  return sections.map((section) => {
    const Heading = depth === 0 ? "h2" : "h3"
    return (
      <section key={section.path} className={depth === 0 ? "mt-10" : "mt-6"}>
        <Heading
          className={
            depth === 0
              ? "font-display text-xl tracking-tight"
              : "text-xs font-medium tracking-[0.14em] text-muted uppercase"
          }
        >
          {section.label}
        </Heading>
        <div className={depth === 0 ? "mt-3" : "mt-2 pl-4"}>
          <TutorialLinks tutorials={section.tutorials} />
          <Sections sections={section.children} depth={depth + 1} />
        </div>
      </section>
    )
  })
}

export default function HomePage() {
  const contents = getContents()
  const isEmpty = contents.tutorials.length === 0 && contents.sections.length === 0

  return (
    <main className="pt-10">
      <h1 className="font-display text-3xl leading-tight tracking-tight text-ink">Contents</h1>
      {isEmpty ? (
        <p className="mt-8 text-muted">No tutorials yet.</p>
      ) : (
        <div className="mt-8">
          <TutorialLinks tutorials={contents.tutorials} />
          <Sections sections={contents.sections} depth={0} />
        </div>
      )}
    </main>
  )
}
