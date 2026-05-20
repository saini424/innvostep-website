import fs from "fs"
import path from "path"
import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts() {

  const files = fs.readdirSync(blogDirectory)

  const posts = files.map((fileName) => {

    const slug = fileName.replace(".mdx", "")

    const fullPath = path.join(blogDirectory, fileName)

    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    }
  })

  return posts
}

export function getPostBySlug(slug: string) {

  const fullPath = path.join(blogDirectory, `${slug}.mdx`)

  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data,
    content,
  }
}