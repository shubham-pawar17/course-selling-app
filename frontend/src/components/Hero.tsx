export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gray-50 flex">
      <div>
        <p className="text-black">Join 100,000+ enrolled students today</p>
        <h1 className="flex justify-start text-4xl md:text-6xl text-blue-950 font-bold max-w-4xl mx-auto">
          Master Full Stack Development
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Master Full Stack Development through hands-on open source projects.
          Join a community of developers transforming their careers with practical,
          real-world programming skills.
        </p>
        <a
          href="/courses"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Explore Courses
        </a>

        <a
          href="#about"
          className="px-6 py-3 border rounded-lg"
        >
          Learn More
        </a>
      </div>
      <div>
        <img
          src="/kirat.png"
          alt="Hero Image"
          className="w-150 h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}