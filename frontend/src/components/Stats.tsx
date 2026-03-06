export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        <div>
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="text-gray-600">Students</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-gray-600">Projects Built</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">10+</h2>
          <p className="text-gray-600">Cohorts</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">4.9⭐</h2>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>
    </section>
  );
}