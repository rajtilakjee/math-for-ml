import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-[50rem] px-6 py-4">
        <Link
          href="/"
          className="font-display text-base text-ink outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
        >
          Math for Machine Learning
        </Link>
      </div>
    </header>
  )
}
