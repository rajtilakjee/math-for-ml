import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type Tutorial = {
  slug: string
  title: string
  description: string
  tags: string[]
  content: string
}

const tutorialsDirectory = path.join(process.cwd(), "content", "tutorials")

function readTags(value: unknown) {
  if (!Array.isArray(value)) return []
  return value.filter((tag): tag is string => typeof tag === "string" && tag.trim() !== "")
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export function getTutorials(): Tutorial[] {
  if (!fs.existsSync(tutorialsDirectory)) return []

  const filenames = fs
    .readdirSync(tutorialsDirectory)
    .filter((filename) => filename.endsWith(".md"))

  const tutorials = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "")
    const raw = fs.readFileSync(path.join(tutorialsDirectory, filename), "utf8")
    const { data, content } = matter(raw)
    const title = readString(data.title)
    const description = readString(data.description)

    if (!title) throw new Error(`${filename} is missing a title.`)
    if (!description) throw new Error(`${filename} is missing a description.`)

    return {
      slug,
      title,
      description,
      tags: readTags(data.tags),
      content,
    }
  })

  return tutorials.sort((a, b) => a.title.localeCompare(b.title))
}

export function getTutorial(slug: string) {
  return getTutorials().find((tutorial) => tutorial.slug === slug) ?? null
}
