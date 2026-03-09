import SearchInput from "./search";

export default function Navbar() {
  
  return (
    <div className="bg-white text-black flex justify-between items-center px-35 py-4 border border-gray-300 shadow-lg">
      <div className="flex space-x-6">
        <div className="font-bold text-lg">100
          <span className="text-red-600">x</span>Devs</div>
        <div className="flex space-x-7 text-indigo-950">
          <button>Home</button>
          <button>Courses</button>
          <button>Store</button>
        </div>
      </div>
      <div className="flex space-x-2">
        <SearchInput/>
        <button className="border border-gray-400 rounded-lg shadow-2xl text-sm text-blue-950 px-4">Sign up</button>
        <button className="border border-gray-400 rounded-lg shadow-2xl text-sm px-4 bg-blue-950 text-white">Log in</button>
      </div>
    </div>
  )
}