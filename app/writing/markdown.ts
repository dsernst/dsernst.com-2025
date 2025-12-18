import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'app/writing/posts')

export type Post = {
  slug: string
  title: string
  date: Date
  excerpt: string
  content: string
  image?: string
}

function generateExcerpt(content: string): string {
  // Split into paragraphs and take first two
  const paragraphs = content
    .split('\n\n')
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .map((p) => p.replace(/^#+ /, '')) // Strip leading #s
    .slice(0, 2) // Take first two paragraphs
    .join('\n\n')

  return paragraphs
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return await getPostBySlug(slug)
    })
  )

  return allPostsData.sort((a, b) => b.date.getTime() - a.date.getTime())
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: new Date(data.date),
    excerpt: data.excerpt || generateExcerpt(content),
    content: contentHtml,
    image: data.image,
  }
}
