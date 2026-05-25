import { getPostBySlug } from "@/lib/blog"
import {
  Rocket,
  Brain,
  Target,
  TrendingUp,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found | Innvostep",
    }
  }

  return {
    title: `${post.frontmatter.title} | Innvostep`,
    description: post.frontmatter.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Blog Not Found
      </div>
    )
  }

  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative px-6 py-28 lg:px-20 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">
              Future Entrepreneurs Guide
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight max-w-5xl">
            {post.frontmatter.title}
          </h1>

          <p className="text-2xl text-gray-400 mt-10 max-w-3xl leading-relaxed">
            {post.frontmatter.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-5 py-3">
              🚀 Startup Mindset
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-5 py-3">
              💡 Real Business Skills
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl px-5 py-3">
              📈 Future Growth
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}

      <section className="px-6 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <Rocket className="w-12 h-12 text-green-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Build Fast
            </h3>
            <p className="text-gray-400">
              Learn how modern students launch startups from laptops and phones.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <Brain className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Think Different
            </h3>
            <p className="text-gray-400">
              Entrepreneurial thinking helps you spot opportunities everywhere.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <Target className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Solve Problems
            </h3>
            <p className="text-gray-400">
              The best startups are created by solving real-world frustrations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-white/10 rounded-3xl p-8 hover:scale-105 transition">
            <TrendingUp className="w-12 h-12 text-orange-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              Grow Bigger
            </h3>
            <p className="text-gray-400">
              Build skills, audience, and income while still in college.
            </p>
          </div>

        </div>
      </section>

      {/* MAIN ARTICLE */}

      <section className="px-6 lg:px-20 pb-24">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 lg:p-16 backdrop-blur-xl">

            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white
              prose-headings:font-black
              prose-h2:text-5xl
              prose-h2:mt-24
              prose-h2:mb-8
              prose-h3:text-3xl
              prose-h3:text-green-400
              prose-p:text-gray-300
              prose-p:leading-8
              prose-p:text-xl
              prose-strong:text-white
              prose-ul:text-gray-300
              prose-li:marker:text-green-400
              prose-blockquote:border-green-500
              prose-blockquote:bg-green-500/10
              prose-blockquote:rounded-2xl
              prose-blockquote:px-6
              prose-blockquote:py-4
              prose-blockquote:text-white
              prose-a:text-green-400
            ">
              {post.content}
            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}

      <section className="px-6 lg:px-20 pb-32">
        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-green-500/20 via-black to-cyan-500/20 p-14">

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mb-8">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <span>Start Building Today</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black leading-tight max-w-4xl">
                The Future Belongs To Students Who Build.
              </h2>

              <p className="text-gray-300 text-2xl mt-8 max-w-3xl leading-relaxed">
                Learn entrepreneurship, AI tools, startup execution,
                content creation, and business strategy with Innvostep.
              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition flex items-center gap-2">
                  Explore More
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition">
                  Learn Startup Skills
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}