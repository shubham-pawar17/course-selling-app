type Cohort = {
  title: string
  description: string
  image: string
  price: number
  originalPrice: number
  discount: string
}

const CohortCard = ({ cohort }: { cohort: Cohort }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between">
      
      {/* Image */}
      <img
        src={cohort.image}
        alt={cohort.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900">
          {cohort.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {cohort.description}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xl font-bold text-black">
            ₹{cohort.price.toLocaleString()}
          </span>

          <span className="line-through text-gray-400">
            ₹{cohort.originalPrice.toLocaleString()}
          </span>

          <span className="ml-auto bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
            {cohort.discount}
          </span>
        </div>

        {/* Currency Dropdown */}
        <select className="mt-2 w-full border rounded-lg px-3 py-2 text-sm">
          <option>INR</option>
          <option>USD</option>
        </select>

        {/* Button */}
        <button className="mt-3 bg-[#0B2A66] text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
          View Details
        </button>
      </div>
    </div>
  )
}

export default CohortCard