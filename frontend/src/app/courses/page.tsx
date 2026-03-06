import { getCourses } from "../lib/api";
import { Course } from "../types/course";

export default async function CoursesPage() {
  const courses: Course[] = await getCourses();

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course._id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={course.image}
            alt={course.title}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p className="text-gray-600">{course.description}</p>
          <p className="text-lg font-semibold mt-2">₹{course.price}</p>
        </div>
      ))}
    </div>
  );
}