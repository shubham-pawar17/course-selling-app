type Feature = {
  title: string
  description: string
  active?: boolean
}

export default function FeatureCard({ feature }: { feature: Feature }){
  return (
    <div
      className={`rounded-2xl p-6 shadow-md transition-all duration-300
      ${
        feature.active
          ? "bg-[#1E2257] text-white scale-105"
          : "bg-white text-gray-800 opacity-80"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4
        ${feature.active ? "bg-white text-[#1E2257]" : "bg-teal-400 text-white"}
        `}
      >
        {"</>"}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">
        {feature.title}
      </h3>

      {/* Underline */}
      <div className="w-10 h-[2px] bg-blue-400 mb-3" />

      {/* Description */}
      <p className="text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}
