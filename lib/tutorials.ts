import fs from "fs"
import path from "path"
import matter from "gray-matter"

export type Tutorial = {
  slug: string
  title: string
  description: string
  tags: string[]
  folders: string[]
  content: string
}

export type TutorialSummary = Omit<Tutorial, "content">

export type TocSection = {
  path: string
  label: string
  tutorials: TutorialSummary[]
  children: TocSection[]
}

export type Contents = {
  tutorials: TutorialSummary[]
  sections: TocSection[]
}

const tutorialsDirectory = path.join(process.cwd(), "content", "tutorials")

function readTags(value: unknown) {
  if (!Array.isArray(value)) return []
  return value.filter((tag): tag is string => typeof tag === "string" && tag.trim() !== "")
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export function labelFromFolder(name: string) {
  return name.replace(/[-_]+/g, " ").replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
}

function readTutorial(filePath: string): Tutorial {
  const relative = path.relative(tutorialsDirectory, filePath)
  const slug = relative.replace(/\.md$/, "").split(path.sep).join("/")
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const title = readString(data.title)
  const description = readString(data.description)

  if (!title) throw new Error(`${relative} is missing a title.`)
  if (!description) throw new Error(`${relative} is missing a description.`)

  return {
    slug,
    title,
    description,
    tags: readTags(data.tags),
    folders: slug.split("/").slice(0, -1),
    content,
  }
}

function collectTutorials(directory: string): Tutorial[] {
  if (!fs.existsSync(directory)) return []

  const tutorials: Tutorial[] = []
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      tutorials.push(...collectTutorials(fullPath))
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      tutorials.push(readTutorial(fullPath))
    }
  }
  return tutorials
}

function byTitle(a: TutorialSummary, b: TutorialSummary) {
  return a.title.localeCompare(b.title)
}

function buildSection(folder: string, parentPath: string, tutorials: TutorialSummary[]): TocSection {
  const pathName = parentPath ? `${parentPath}/${folder}` : folder
  const here = tutorials.filter((tutorial) => tutorial.folders.join("/") === pathName)
  const childNames = [
    ...new Set(
      tutorials
        .filter((tutorial) => tutorial.folders[parentPath ? parentPath.split("/").length : 0] === folder)
        .map((tutorial) => tutorial.folders[pathName.split("/").length])
        .filter((name): name is string => Boolean(name)),
    ),
  ].sort((a, b) => a.localeCompare(b))

  return {
    path: pathName,
    label: labelFromFolder(folder),
    tutorials: here.sort(byTitle),
    children: childNames.map((name) => buildSection(name, pathName, tutorials)),
  }
}

export function getTutorials() {
  return collectTutorials(tutorialsDirectory).sort((a, b) => a.slug.localeCompare(b.slug))
}

export function getContents(): Contents {
  const tutorials = getTutorials().map(({ content: _content, ...summary }) => summary)
  const root = tutorials.filter((tutorial) => tutorial.folders.length === 0).sort(byTitle)
  const topFolders = [...new Set(tutorials.flatMap((tutorial) => tutorial.folders.slice(0, 1)))].sort((a, b) =>
    a.localeCompare(b),
  )

  return {
    tutorials: root,
    sections: topFolders.map((folder) => buildSection(folder, "", tutorials)),
  }
}

export function getTutorial(slug: string | string[]) {
  const key = (Array.isArray(slug) ? slug : [slug]).join("/")
  if (!key || key.split("/").some((part) => part === "" || part === "." || part === "..")) return null
  return getTutorials().find((tutorial) => tutorial.slug === key) ?? null
}
