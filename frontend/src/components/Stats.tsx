import { ProfileIcon } from "../icons/Profile"

export default function Stats() {
  return (
    <section className="px-35 py-1 bg-white">
      <div className="bg-blue-950 flex justify-between my-6 rounded-2xl rounded-tr-[150px] p-8">
        <div className="flex m-4 text-2xl ">
          <ProfileIcon />
          <div>
            <div className="text-4xl">27</div>
            <div className="text-gray-400 text-lg">Students cracked GSoC 2025</div>
          </div>
        </div>
        <div className="flex m-4 text-2xl ">
          <div className="w-[1.5px] h-16 bg-white"></div>
          <ProfileIcon />
          <div>
            <div className="text-4xl">$150K</div>
            <div className="text-gray-400 text-lg">Highest International package</div>
          </div>
        </div>
        <div className="flex m-4 text-2xl ">
          <div className="w-[1.5px] h-16 bg-white"></div>
          <ProfileIcon />
          <div>
            <div className="text-4xl">200+</div>
            <div className="text-gray-400 text-lg">High paying internships confirmed</div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-7 bg-teal-500 rounded-tr-[40px]  rounded-tl-xl  rounded-br-xl  rounded-bl-[40px]">
          <div className="pt-8 px-8 text-4xl font-semibold">Job ready skills that matter</div>
          <div className="px-8 pt-2 text-lg font-normal">Master development through real-world applications, not tutorials</div>
          <div className="flex  flex-wrap px-8 mb-4 mt-2 p-1 text-teal-500">
            <span className="rounded-4xl p-2 w-fit m-1  bg-white">Full Stack Development</span>
            <span className="rounded-4xl p-2 w-fit m-1  bg-white">Real-World Projects</span>
            <span className="rounded-4xl p-2 w-fit m-1  bg-white">Open Source Contributions</span>
            <span className="rounded-4xl p-2 w-fit m-1  bg-white">Production Ready</span>
            <span className="rounded-4xl p-2 w-fit m-1  bg-white">DevOps & Deployment</span>
            <span className="rounded-4xl p-2 w-fit m-1  bg-white">Job Ready Portfolio</span>
          </div>
        </div>
        <div className="flex-5 bg-blue-950 rounded-tr-[40px]  rounded-tl-xl  rounded-br-xl  rounded-bl-[40px] text-4xl font-bold px-8 pt-8 pb-11">
          Personally mentoring India's next 100x engineers
          <div className="text-lg font-light">Taking you from 1x to 100x through practical projects and real-world open source</div>
        </div>
      </div>
    </section>
  );
}