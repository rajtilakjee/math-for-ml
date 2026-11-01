import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-[50rem] items-baseline justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-base text-ink outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
        >
          Field Guide
        </Link>
        <p className="text-sm text-muted">Maths and machine learning</p>
      </div>
    </header>
  )
}
