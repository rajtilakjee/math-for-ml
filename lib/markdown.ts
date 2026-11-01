import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified, type Plugin } from "unified"
import { visit } from "unist-util-visit"

type TextNode = { type: "text"; value: string }

type MathNode = {
  type: string
  value?: string
  data?: {
    hName: string
    hProperties: { className: string[] }
    hChildren: TextNode[]
  }
}

/** Expose TeX in elements MathJax can typeset. remark-math otherwise emits code, which MathJax skips. */
const remarkMathjaxSource: Plugin = () => (tree) => {
  visit(tree, (node) => {
    const mathNode = node as MathNode
    if (mathNode.value == null) return

    if (mathNode.type === "inlineMath") {
      mathNode.data = {
        hName: "span",
        hProperties: { className: ["math", "math-inline"] },
        hChildren: [{ type: "text", value: `\\(${mathNode.value}\\)` }],
      }
    } else if (mathNode.type === "math") {
      mathNode.data = {
        hName: "div",
        hProperties: { className: ["math", "math-display"] },
        hChildren: [{ type: "text", value: `\\[${mathNode.value}\\]` }],
      }
    }
  })
}

/** remark-math reads `$` and `$$`. Turn LaTeX `\[...\]` and `\(...\)` into those before parsing. */
function acceptLatexDelimiters(source: string) {
  return source
    .split(/(```[\s\S]*?```|~~~[\s\S]*?~~~)/g)
    .map((part, index) => {
      if (index % 2 === 1) return part
      return part
        .replace(/\\\[([\s\S]*?)\\\]/g, (_, tex: string) => `$$${tex}$$`)
        .replace(/\\\(([\s\S]*?)\\\)/g, (_, tex: string) => `$${tex}$`)
    })
    .join("")
}

export async function renderMarkdown(source: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkMathjaxSource)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(acceptLatexDelimiters(source))

  return String(file)
}
