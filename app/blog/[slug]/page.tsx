import { getPostBySlug } from "@/lib/blog";

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
    title: `${post.title} | Innvostep`,
    description: post.description,
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
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-white text-black py-20">
      <article className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-5xl font-black mb-8">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 mb-12">
          {post.description}
        </p>

        <div className="space-y-6 text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </main>
  );
}