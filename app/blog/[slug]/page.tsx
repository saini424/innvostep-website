import * as fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import { BgDecoration } from "@/components/ui/bg-decoration"
import { MarketChart } from "@/components/blog/market-chart"
import { ArrowLeft, Clock, Share2, Sparkles, Zap, TrendingUp, CheckCircle2, Rocket,Brain } from 'lucide-react'
import Link from 'next/link'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const contentDirectory = path.join(process.cwd(), 'content/blog')
  const filePath = path.join(contentDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return notFound()
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  // Clean frontmatter and symbols so the reader sees pure content
  const contentOnly = fileContent.replace(/---[\s\S]*?---/, '').replace(/#/g, '').trim()

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 pb-32 overflow-x-hidden">
      <BgDecoration />
      
      {/* 1. TOP PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-50">
        <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 w-1/3 animate-in slide-in-from-left duration-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24">
        
        {/* BACK BUTTON */}
        <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-purple-600 font-bold transition-all mb-12 group bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm hover:shadow-md animate-in fade-in slide-in-from-left-4 duration-500">
          <ArrowLeft className="mr-2 size-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>

        {/* 2. HERO SECTION (High-Impact Typography) */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="px-5 py-1.5 bg-purple-600 text-white text-[11px] font-black rounded-full tracking-tighter uppercase shadow-lg shadow-purple-200">Founder Guide</span>
            <span className="text-slate-400 text-xs font-bold flex items-center gap-1.5"><Clock className="size-3.5"/> 6 min read</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95] mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            How to Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500">Entrepreneurship</span> <br />
            as a Student.
          </h1>

          {/* Featured Image Landing Block */}
          <div className="relative w-full h-[400px] md:h-[600px] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Student Building" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 flex items-center gap-6 text-white">
                <div className="size-16 rounded-full border-4 border-white/20 p-1 backdrop-blur-md">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                </div>
                <div>
                    <p className="text-xl font-black">Shravan Sankhla</p>
                    <p className="text-sm font-medium opacity-70 italic">Strategy by InnvoStep Founders</p>
                </div>
            </div>
          </div>
        </header>

        {/* 3. DUAL COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20">
          
          {/* MAIN ARTICLE AREA */}
          <main className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="bg-white rounded-[4rem] p-8 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-white relative">
              
              {/* Premium Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-4 rounded-3xl shadow-xl rotate-[-5deg] hidden md:block">
                <Sparkles className="size-6 mb-2 text-purple-400" />
                <p className="text-[10px] font-black uppercase tracking-widest">Editor's Choice</p>
              </div>

              <div className="prose prose-slate prose-lg md:prose-xl max-w-none 
                prose-p:text-slate-600 prose-p:leading-[1.9] 
                prose-headings:text-slate-900 prose-headings:font-black
                prose-strong:text-purple-600">
                
                {/* Visual Quote Block */}
                <div className="bg-slate-50 border-l-8 border-purple-600 p-10 rounded-tr-[2.5rem] rounded-br-[2.5rem] mb-16 italic font-medium text-slate-800 text-2xl leading-snug">
                    "Execution is the only currency in the startup world. Students winning today aren't waiting for permission; they're just shipping code."
                </div>

                <ReactMarkdown>{contentOnly}</ReactMarkdown>

                {/* THE MARKET CHART SECTION */}
                <div className="my-20 p-2 bg-slate-50 rounded-[3rem] border border-slate-100">
                   <MarketChart />
                </div>

                {/* Final Takeaway Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                  <div className="p-8 bg-purple-50 rounded-[2.5rem] border border-purple-100">
                    <Zap className="size-6 text-purple-600 mb-4" />
                    <h4 className="m-0 font-black text-slate-900">The 48-Hour Rule</h4>
                    <p className="text-sm mt-4 text-purple-900 leading-relaxed">Don't plan for months. Build your first version in 48 hours and get real feedback.</p>
                  </div>
                  <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                    <TrendingUp className="size-6 text-blue-600 mb-4" />
                    <h4 className="m-0 font-black text-slate-900">Audience First</h4>
                    <p className="text-sm mt-4 text-blue-900 leading-relaxed">Build a following on LinkedIn or X before you launch your paid product.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* SIDEBAR WIDGETS (Fills blank space) */}
          <aside className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700">
            <div className="sticky top-12 space-y-10">
              
              {/* Core Checklist */}
              <div className="p-8 bg-white border border-slate-200 rounded-[3rem] shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 size-32 bg-emerald-500/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
                <h4 className="font-black text-[10px] mb-8 uppercase tracking-[0.2em] text-emerald-600 flex items-center gap-2">
                    <CheckCircle2 className="size-4" /> The Founder Checklist
                </h4>
                <ul className="space-y-6">
                    {[
                      { icon: <Rocket />, t: "Identify a niche problem" },
                      { icon: <Brain />, t: "Leverage AI Workflows" },
                      { icon: <Zap />, t: "Ship an MVP in 7 days" }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="size-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                           {item.icon}
                        </div>
                        <p className="text-sm font-bold text-slate-700 leading-tight">{item.t}</p>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Share Box */}
              <div className="p-8 bg-slate-900 rounded-[3rem] text-white text-center">
                <Share2 className="size-8 mx-auto mb-6 text-purple-400" />
                <h4 className="font-black text-xl mb-4">Value this?</h4>
                <p className="text-slate-400 text-xs mb-8">Spread the founder mindset with your network.</p>
                <button className="w-full py-4 bg-white text-slate-900 font-black rounded-2xl hover:scale-[1.03] active:scale-95 transition-all">
                    Copy Link
                </button>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}