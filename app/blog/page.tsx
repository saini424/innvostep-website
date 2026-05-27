import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { BgDecoration } from "@/components/ui/bg-decoration"
import { ArrowRight, Sparkles, Zap, Calendar, Clock } from 'lucide-react'

export default function BlogPage() {
  const blogDirectory = path.join(process.cwd(), 'content/blog')
  const files = fs.readdirSync(blogDirectory)
  
  // This reads the REAL data from your MDX files
  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(blogDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContent) // Extracts title, date, etc.

    return {
      slug,
      title: data.title || slug.split('-').join(' '),
      date: data.date || "Recent",
      category: data.category || "Startup",
      description: data.description || "Click to read the full insight."
    }
  })

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] pb-32">
      <BgDecoration />
      
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <header className="mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-purple-600 text-[11px] font-black uppercase tracking-widest mb-8">
            <Sparkles className="size-3" /> The Knowledge Hub
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85] mb-10">
            Insights for <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500">
              Future Founders.
            </span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="group bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 blur-3xl rounded-full" />
                
                <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1 bg-slate-900 text-white text-[10px] font-black rounded-full uppercase tracking-widest">{post.category}</span>
                    <div className="flex items-center gap-4 text-slate-400 text-xs font-bold">
                        <span className="flex items-center gap-1"><Calendar className="size-3"/> {post.date}</span>
                    </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-6 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 mb-10 line-clamp-2 font-medium leading-relaxed">
                    {post.description}
                </p>

                <div className="flex items-center text-sm font-black text-slate-900">
                  Access Blueprint <ArrowRight className="ml-2 size-4 group-hover:translate-x-3 transition-transform text-purple-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}