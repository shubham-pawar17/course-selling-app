import { useState } from "react"
import FeatureCard from "./WhyCard"

const features = [
  {
    title: "Live Interactive Sessions",
    description:
      "Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.",
  },
  {
    title: "Real Engineer, Real Experience",
    description:
      "Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.",
  },
  {
    title: "Learn by Doing",
    description:
      "Hands-on projects, open-source contributions & practical coding in real-world systems.",
  },
]

const WhySection = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#0B2A66]">
        Why 100xDevs?
      </h2>
      <p className="text-gray-600 mt-2">
        Our most comprehensive and impactful learning experiences
      </p>

      {/* Cards */}
      <div className="mt-12 flex items-center justify-center gap-6">
        
        {/* Left Arrow */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1))
          }
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
        >
          ←
        </button>

        {/* Cards */}
        <div className="flex gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer"
            >
              <FeatureCard
                feature={{
                  ...feature,
                  active: index === activeIndex,
                }}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % features.length)
          }
          className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </section>
  )
}

export default WhySection