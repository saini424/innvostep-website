import * as fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import { BgDecoration } from "@/components/ui/bg-decoration"
import { MarketChart } from "@/components/blog/market-chart"
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const contentDirectory = path.join(process.cwd(), 'content/blog')
  const filePath = path.join(contentDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return notFound()
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  // Clean frontmatter and symbols
  const contentOnly = fileContent.replace(/---[\s\S]*?---/, '').replace(/#/g, '').trim()

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 pb-24">
      <BgDecoration />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
        <div className="h-full bg-purple-600 w-1/3"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-20">
        <Link href="/blog" className="flex items-center text-slate-400 hover:text-purple-600 transition-all mb-12 group">
          <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1 bg-purple-600 text-white text-[10px] font-bold rounded-full tracking-tighter uppercase">Entrepreneurship</span>
            <span className="text-slate-400 text-xs flex items-center gap-1"><Clock className="size-3"/> 6 min read</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8">
            How to Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Entrepreneurship</span> as a Student.
          </h1>

          <div className="flex items-center justify-between border-y border-slate-200 py-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-white shadow-lg" />
              <div>
                <p className="text-sm font-bold text-slate-900">Shravan Sankhla</p>
                <p className="text-xs text-slate-400 font-medium italic">Founder, InnvoStep</p>
              </div>
            </div>
            <button className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              <Share2 className="size-4 text-slate-600" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
          {/* Main Article Card */}
          <main className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
            <div className="prose prose-slate prose-lg max-w-none 
              prose-p:text-slate-600 prose-p:leading-[1.8] 
              prose-headings:text-slate-900 prose-headings:font-black
              prose-strong:text-purple-600">
              
              <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-3xl border border-purple-100 mb-12">
                <Sparkles className="size-6 text-purple-600 shrink-0 mt-1" />
                <p className="text-purple-900 font-medium text-sm m-0">The Internet has created a new economy. Students winning today aren't waiting for permission; they are building audiences and startups while learning AI.</p>
              </div>

              <ReactMarkdown>{contentOnly}</ReactMarkdown>

              {/* THE SPECIAL CHART */}
              <MarketChart />

              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Zap className="size-5 text-amber-500 mb-3" />
                  <p className="text-xs font-bold text-slate-400 uppercase">Key Takeaway</p>
                  <p className="text-sm font-bold text-slate-900">Execution is the only differentiator.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <TrendingUp className="size-5 text-emerald-500 mb-3" />
                  <p className="text-xs font-bold text-slate-400 uppercase">Growth Tip</p>
                  <p className="text-sm font-bold text-slate-900">Focus on distribution before product.</p>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar / Blank Space Fillers */}
          <aside className="hidden lg:block space-y-8">
            <div className="sticky top-12 space-y-8">
              <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] text-white shadow-xl overflow-hidden relative">
                <div className="absolute -top-12 -right-12 size-32 bg-purple-500/20 blur-3xl rounded-full" />
                <h4 className="text-xl font-black mb-4 relative z-10">Start Building <br/> Today.</h4>
                <p className="text-slate-400 text-sm mb-6 relative z-10 leading-relaxed">Join 500+ students learning the art of the startup.</p>
                <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl text-sm hover:scale-[1.02] transition-transform relative z-10">
                  Join Community
                </button>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm">
                <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-400">Up Next</h4>
                <div className="space-y-6">
                  {[1,2].map((i) => (
                    <div key={i} className="group cursor-pointer">
                      <p className="text-[10px] font-black text-purple-600 mb-1">AI TOOLS</p>
                      <h5 className="font-bold text-sm group-hover:text-purple-600 transition-colors">How to use AI to build your MVP in 48 hours.</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}