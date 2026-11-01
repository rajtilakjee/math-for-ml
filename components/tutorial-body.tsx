"use client"

import { useEffect, useRef, useState } from "react"

type MathJaxApi = {
  tex?: {
    inlineMath?: string[][]
    displayMath?: string[][]
    processEscapes?: boolean
  }
  options?: {
    skipHtmlTags?: string[]
  }
  startup?: {
    typeset?: boolean
    promise?: Promise<unknown>
  }
  typesetPromise?: (elements?: Element[]) => Promise<unknown>
  typesetClear?: (elements?: Element[]) => void
}

declare global {
  interface Window {
    MathJax?: MathJaxApi
  }
}

const mathJaxSource = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
let mathJaxReady: Promise<void> | null = null

function loadMathJax() {
  if (window.MathJax?.typesetPromise && window.MathJax.startup?.promise) {
    return window.MathJax.startup.promise.then(() => undefined)
  }

  if (!mathJaxReady) {
    window.MathJax = {
      tex: {
        inlineMath: [
          ["\\(", "\\)"],
          ["$", "$"],
        ],
        displayMath: [
          ["\\[", "\\]"],
          ["$$", "$$"],
        ],
        processEscapes: true,
      },
      options: {
        skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      },
      startup: { typeset: false },
    }

    mathJaxReady = new Promise((resolve, reject) => {
      const script = document.createElement("script")
      script.src = mathJaxSource
      script.async = true
      script.onload = () => {
        const pending = window.MathJax?.startup?.promise
        if (pending) pending.then(() => resolve()).catch(reject)
        else resolve()
      }
      script.onerror = () => reject(new Error("MathJax failed to load"))
      document.head.appendChild(script)
    })
  }

  return mathJaxReady
}

export function TutorialBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const node = ref.current
    if (!node) return

    loadMathJax()
      .then(() => {
        if (cancelled || !ref.current || !window.MathJax?.typesetPromise) return
        window.MathJax.typesetClear?.([ref.current])
        return window.MathJax.typesetPromise([ref.current])
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      if (node && window.MathJax?.typesetClear) window.MathJax.typesetClear([node])
    }
  }, [html])

  return (
    <>
      {failed ? (
        <p className="mb-6 text-sm text-clay" role="status">
          MathJax did not load, so equations are shown as TeX.
        </p>
      ) : null}
      <div ref={ref} className="tutorial" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
