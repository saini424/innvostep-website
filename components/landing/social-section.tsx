"use client"

export default function SocialSection() {
  return (
    <section className="py-24 px-6 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Learn. Build. <span className="text-cyan-500">Grow.</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Follow Innvostep across platforms and start your entrepreneurial journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/innvostep/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 rounded-[32px] p-10 bg-white hover:shadow-2xl hover:-translate-y-2 transition duration-300 block"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400 flex items-center justify-center shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6 object-contain"
              />
            </div>

            <h3 className="text-3xl font-bold mt-7 text-black">
              Instagram
            </h3>

            <p className="text-gray-500 text-[17px] mt-4 leading-relaxed">
              Daily startup reels, mindset content & business insights.
            </p>

            <div className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-white text-sm font-semibold shadow-md">
              Follow on Instagram
            </div>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Innvostep"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 rounded-[32px] p-10 bg-white hover:shadow-2xl hover:-translate-y-2 transition duration-300 block"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center shadow-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className="w-6 h-6 object-contain"
              />
            </div>

            <h3 className="text-3xl font-bold mt-7 text-black">
              YouTube
            </h3>

            <p className="text-gray-500 text-[17px] mt-4 leading-relaxed">
              Learn entrepreneurship, startup execution & business growth.
            </p>

            <div className="mt-8 inline-flex items-center rounded-xl bg-red-500 px-6 py-3 text-white text-sm font-semibold shadow-md">
              Subscribe on YouTube
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/innvostep/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 rounded-[32px] p-10 bg-white hover:shadow-2xl hover:-translate-y-2 transition duration-300 block"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
                className="w-6 h-6 object-contain"
              />
            </div>

            <h3 className="text-3xl font-bold mt-7 text-black">
              LinkedIn
            </h3>

            <p className="text-gray-500 text-[17px] mt-4 leading-relaxed">
              Professional startup content, founder journey & updates.
            </p>

            <div className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-white text-sm font-semibold shadow-md">
              Connect on LinkedIn
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}