export default function CoursesPreview() {
  return (
    <section id="courses" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Popular Cohorts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((course) => (
            <div
              key={course}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">
                Full Stack Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Build real-world apps using React, Node, and DevOps.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}