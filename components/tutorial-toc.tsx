"use client"

import { useEffect, useRef, useState } from "react"
import type { PageHeading } from "@/lib/headings"

function HeadingList({ headings, activeId }: { headings: PageHeading[]; activeId: string }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {headings.map((heading) => {
        const active = heading.id === activeId
        return (
          <li key={heading.id} className={heading.depth === 3 ? "pl-3" : undefined}>
            <a
              href={`#${heading.id}`}
              aria-current={active ? "location" : undefined}
              className={`block leading-snug outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent ${
                heading.depth === 2 ? "text-sm font-medium" : "text-[0.8125rem]"
              } ${active ? "text-accent" : "text-muted hover:text-ink"}`}
            >
              {heading.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export function TutorialToc({ headings }: { headings: PageHeading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "")
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nodes = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((node): node is HTMLElement => node !== null)
    if (nodes.length === 0) return

    let frame = 0
    const update = () => {
      frame = 0
      let current = nodes[0]
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= 128) current = node
      }
      setActiveId((previous) => (previous === current.id ? previous : current.id))
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [headings])

  useEffect(() => {
    const nav = navRef.current
    if (!nav || !activeId) return
    const link = nav.querySelector<HTMLElement>(`a[href="#${CSS.escape(activeId)}"]`)
    if (!link) return
    const top = link.offsetTop
    const bottom = top + link.offsetHeight
    const cushion = 12
    if (top < nav.scrollTop + cushion) nav.scrollTop = Math.max(0, top - cushion)
    else if (bottom > nav.scrollTop + nav.clientHeight - cushion) {
      nav.scrollTop = bottom - nav.clientHeight + cushion
    }
  }, [activeId])

  if (headings.length === 0) return null

  return (
    <>
      <nav aria-label="On this page" className="mt-8 xl:hidden">
        <details className="border-y border-line py-3">
          <summary className="cursor-pointer text-sm font-medium text-ink outline-offset-4 focus-visible:outline-2 focus-visible:outline-accent">
            On this page
          </summary>
          <HeadingList headings={headings} activeId={activeId} />
        </details>
      </nav>
      <nav
        ref={navRef}
        aria-label="On this page"
        className="page-toc fixed top-24 left-[calc(50%+25rem+1.5rem)] z-20 hidden max-h-[calc(100vh-8rem)] w-52 overflow-y-auto border-l border-line py-1 pl-4 xl:block"
      >
        <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">On this page</p>
        <HeadingList headings={headings} activeId={activeId} />
      </nav>
    </>
  )
}
