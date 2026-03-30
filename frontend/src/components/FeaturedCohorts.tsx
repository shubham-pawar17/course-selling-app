import CohortCard from "./CohortCard"

const cohorts = [
  {
    title: "100xSchool Combined Bootcamp",
    description:
      "Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI (Every Saturday)",
    image: "/images/bootcamp1.png",
    price: 5999,
    originalPrice: 8999,
    discount: "34% off",
  },
  {
    title: "Web Dev + Devops Bootcamp",
    description: "Complete Typescript + MERN stack + Devops + System Design",
    image: "/images/bootcamp2.png",
    price: 3999,
    originalPrice: 5999,
    discount: "34% off",
  },
  {
    title: "Web3 Bootcamp",
    description: "Complete Solana and Web3 Bootcamp",
    image: "/images/bootcamp3.png",
    price: 3999,
    originalPrice: 5999,
    discount: "34% off",
  },
]

const FeaturedCohorts = () => {
  return (
    <section className="bg-[#0B2A66] py-16 px-6">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-white mb-10">
        Featured Cohorts
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {cohorts.map((cohort, index) => (
          <CohortCard key={index} cohort={cohort} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedCohorts