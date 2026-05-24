import { BgDecoration } from "@/components/ui/bg-decoration"

export default function BlogPost() {
  return (
    <div className="relative min-h-screen py-20 px-6">
      <BgDecoration />
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
           <h1 className="text-4xl md:text-6xl font-black mb-6">
             How To Start Entrepreneurship As A Student
           </h1>
           <p className="text-xl text-slate-500 italic">
             Learn how students can begin their entrepreneurship journey from zero.
           </p>
        </header>

        {/* The "Prose" class makes the content look beautiful automatically */}
        <div className="prose prose-lg prose-slate max-w-none bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/40 shadow-2xl">
           {/* Your blog content goes here. If it's Markdown, use a markdown component */}
           <h2>Introduction</h2>
           <p>Entrepreneurship is becoming one of the most valuable skills...</p>
           
           <div className="bg-purple-600 text-white p-6 rounded-2xl my-8">
             <h4 className="text-white mt-0">💡 Quick Tip</h4>
             <p className="mb-0 text-purple-100">Start small. You do not need funding to begin. Focus on marketing and communication.</p>
           </div>
           
           <h3>Focus Areas:</h3>
           <ul>
             <li>Marketing</li>
             <li>Communication</li>
             <li>Networking</li>
             <li>Execution</li>
           </ul>
        </div>
      </article>
    </div>
  )
}