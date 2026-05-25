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
    <main className="bg-[#f8f8f6] min-h-screen pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-6">

        {/* HERO */}
        <div className="mb-20">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
            🚀 Entrepreneurship Guide
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-black mb-8">
            {post.frontmatter.title}
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-3xl">
            {post.frontmatter.description}
          </p>

        </div>

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-black prose-p:text-gray-700 prose-p:leading-8 prose-li:text-gray-700 prose-strong:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4">

          <MDXRemote source={post.content} />

        </div>

      </article>
    </main>
  );
}