export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="px-35 flex items-center justify-between gap-12 w-full">
        <div className="flex-1">

          <div className="inline-flex items-center gap-3 border border-dashed border-gray-400 rounded-full px-5 py-1 text-sm text-gray-700 mb-6">
            <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
            Join 100,000+ enrolled students today
          </div>

          <h1 className="text-7xl font-bold text-blue-950">
            Master Full Stack <br />
            Development
          </h1>

          <p className="text-gray-600 mt-1 text-md max-w-xl">
            Master Full Stack Development through hands-on open source projects.
            Join a community of developers transforming their careers with
            practical, real-world programming skills.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-200 transition">
              Learn more
            </button>

            <button className="px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition">
              Explore Courses
            </button>
          </div>

        </div>

        <div className="flex-1 items-end">
          <div className="relative">
            
            <img
              src="/kirat.png"
              alt="hero"
              className="rounded-3xl w-140 h-120"
            />
          </div>
        </div>

      </div>
    </section>
  );
}