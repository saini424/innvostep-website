import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {

  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-black">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">

        <div className="max-w-6xl mx-auto">

          <span className="uppercase tracking-[0.3em] text-sm text-gray-500 font-semibold">
            INNVOSTEP BLOG
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-6 max-w-4xl leading-[0.95]">
            Startup Knowledge For The Next Generation
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mt-8 leading-relaxed">
            Learn entrepreneurship, startup execution, AI tools,
            founder mindset, growth strategies, and modern business skills.
          </p>

        </div>

      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >

              <article className="bg-white border border-black/5 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                <span className="text-sm uppercase tracking-wider text-green-600 font-semibold">
                  Entrepreneurship
                </span>

                <h2 className="text-2xl font-black mt-4 leading-tight group-hover:text-green-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-8 text-sm font-semibold text-black">
                  Read Article →
                </div>

              </article>

            </Link>

          ))}

        </div>

      </section>

    </main>
  )
}