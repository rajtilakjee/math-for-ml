import Link from "next/link"

export default function NotFound() {
  return (
    <main className="pt-16">
      <h1 className="font-display text-3xl tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">That tutorial is not in the guide.</p>
      <Link
        href="/"
        className="mt-6 inline-block text-accent underline underline-offset-4 outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent"
      >
        Contents
      </Link>
    </main>
  )
}
