import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Innvostep",
    };
  }

  return {
    title: `${post.frontmatter.title} | Innvostep`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-32">
      <article className="prose prose-lg max-w-none prose-headings:text-black prose-p:text-gray-700 prose-strong:text-black prose-li:text-gray-700">
        
        <h1 className="text-5xl font-black mb-6">
          {post.frontmatter.title}
        </h1>

        <p className="text-xl text-gray-500 mb-12">
          {post.frontmatter.description}
        </p>

        <MDXRemote source={post.content} />

      </article>
    </main>
  );
}