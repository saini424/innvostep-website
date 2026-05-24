import Link from 'next/link'
import { BgDecoration } from "@/components/ui/bg-decoration"

export default function BlogPage() {
  return (
    <div className="relative min-h-screen py-20 px-6">
      <BgDecoration />
      
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            InnvoStep Blog
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
            Startup Knowledge <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              For The Next Generation
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Learn entrepreneurship, startup execution, AI tools, founder mindset, and modern business skills.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ARTICLE CARD START */}
          <Link href="/blog/how-to-start-entrepreneurship-as-a-student">
            <div className="group relative bg-white/50 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl hover:bg-white/80 cursor-pointer">
              <div className="text-xs font-bold text-emerald-600 mb-4 bg-emerald-100 px-3 py-1 rounded-full w-fit">
                ENTREPRENEURSHIP
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                How To Start Entrepreneurship As A Student
              </h3>
              <p className="text-slate-600 mb-8 line-clamp-3">
                Learn how students can begin their entrepreneurship journey from zero with zero funding.
              </p>
              <div className="flex items-center text-sm font-black text-slate-900">
                Read Article 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </Link>
          {/* ARTICLE CARD END */}

        </div>
      </div>
    </div>
  )
}