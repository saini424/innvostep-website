"use client"

export default function SocialSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black">
            Learn. Build. Grow.
          </h2>
          <p className="text-gray-500 mt-4 text-xl">
            Follow Innvostep across platforms and start your entrepreneurial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <a
            href="https://www.instagram.com/innvostep/"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-3xl p-10 hover:shadow-2xl transition block"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white text-4xl font-bold">
              IG
            </div>
            <h3 className="text-5xl font-bold mt-10">Instagram</h3>
            <p className="text-gray-500 text-2xl mt-6 leading-relaxed">
              Daily startup reels, mindset content &amp; business insights.
            </p>
            <div className="mt-10 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-2xl text-xl font-semibold inline-block">
              Follow on Instagram
            </div>
          </a>

          <a
            href="https://www.youtube.com/@Innvostep"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-3xl p-10 hover:shadow-2xl transition block"
          >
            <div className="w-20 h-20 rounded-2xl bg-red-500 flex items-center justify-center text-white text-4xl font-bold">
              YT
            </div>
            <h3 className="text-5xl font-bold mt-10">YouTube</h3>
            <p className="text-gray-500 text-2xl mt-6 leading-relaxed">
              Learn entrepreneurship, startup execution &amp; business growth.
            </p>
            <div className="mt-10 bg-red-500 text-white px-8 py-4 rounded-2xl text-xl font-semibold inline-block">
              Subscribe on YouTube
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/innvostep/"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-3xl p-10 hover:shadow-2xl transition block"
          >
            <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
              IN
            </div>
            <h3 className="text-5xl font-bold mt-10">LinkedIn</h3>
            <p className="text-gray-500 text-2xl mt-6 leading-relaxed">
              Professional startup content, founder journey &amp; updates.
            </p>
            <div className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold inline-block">
              Connect on LinkedIn
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
