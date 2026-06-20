import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'app/writing/posts')

export type Post = {
  slug: string
  title: string
  date: Date
  excerpt: string
  content: string
  image?: string
}

function getAllPostFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) return getAllPostFiles(fullPath)
    if (entry.name.endsWith('.md')) return [fullPath]
    return []
  })
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

async function getPostFromFile(fullPath: string): Promise<Post> {
  const slug = path.basename(fullPath, '.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeExternalLinks, {
      target: '_blank',
      rel: ['noopener', 'noreferrer'],
    })
    .use(rehypeStringify)
    .process(content)
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

export async function getAllPosts(): Promise<Post[]> {
  const filePaths = getAllPostFiles(postsDirectory)
  const allPostsData = await Promise.all(filePaths.map((filePath) => getPostFromFile(filePath)))

  return allPostsData.sort((a, b) => b.date.getTime() - a.date.getTime())
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePaths = getAllPostFiles(postsDirectory)
  const fullPath = filePaths.find((p) => path.basename(p, '.md') === slug)
  if (!fullPath) throw new Error(`Post not found: ${slug}`)

  return getPostFromFile(fullPath)
}
