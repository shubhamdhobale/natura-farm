import blog from '../../public/assets/blog1.avif'
import blog2 from '../../public/assets/blog2.jpeg'
import blog3 from '../../public/assets/blog3.jpg'
import blog4 from '../../public/assets/blog4.jpeg'
import blog5 from '../../public/assets/blog5.jpg'

const Blogs = () => {
  return (
    <section className=" relative w-full flex flex-col px-20 py-20 gap-8 top-10">
      <div className="flex flex-col w-full items-center justify-center">
        <p className="tracking-wider font-semibold text-xl">Food & Health</p>
        <h1 className="tracking-widest font-bold text-5xl">Blogs</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-4 shadow-2xl gap-4 p-8">
        <div className="row-start-1 row-span-4 flex flex-col gap-6 shadow-xl px-8 py-8 hover:scale-105 transition-all duration-1000 hover:overflow-hidden">
          <div className="overflow-hidden shadow-lg drop-shadow-2xl">
            <img src={blog} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 " />
          </div>
          <div className="p-4 flex flex-col gap-6">
            <h1 className="text-5xl font-bold tracking-wider">Fresh and Fit</h1>
            <p className="tracking-wider text-xl">Stay fit and healthy with fresh, vibrant recipes and fitness tips designed to fuel your active lifestyle.</p>
            <button className="relative px-8 py-4 w-1/3 ml-4 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] ">
              Read More
            </button>
          </div>                                                                                                                  
        </div>
        <div className="gap-4 flex flex-row w-full px-4 py-4 shadow-xl overflow-hidden h-60 hover:scale-105 transition-all duration-1000 ">
          <div className="w-1/2 overflow-hidden shadow-lg drop-shadow-2xl">
            <img src={blog2} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 p-4 ">
            <h1 className="text-lg font-bold">Energize Your Plate</h1>
            <p className="tracking-wide">Fuel your body with energizing recipes and nutrition tips that will keep you feeling vibrant and healthy.</p>
            <button className="relative px-8 py-2 w-2/3  border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="shadow-xl gap-4 flex flex-row w-full overflow-hidden px-4 py-4 h-60 hover:scale-105 transition-all duration-1000 ">
          <div className="w-1/2 overflow-hidden shadow-lg drop-shadow-2xl">
            <img src={blog3} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 p-4">
            <h1 className="text-lg font-bold">Farm to Fork Wellness</h1>
            <p className="tracking-wide">Connect with your food from farm to fork, focusing on locally sourced ingredients and sustainable eating habits.</p>
            <button className="relative px-8 py-2 w-2/3  border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="gap-4 flex flex-row w-full shadow-xl overflow-hidden px-4 py-4 h-60 hover:scale-105 transition-all duration-1000 ">
          <div className="w-1/2 overflow-hidden shadow-lg drop-shadow-2xl">
            <img src={blog4} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 p-4">
            <h1 className="text-lg font-bold">The Nutritious Table</h1>
            <p className="tracking-wide">Set a nutritious table with recipes and advice for creating balanced, healthful meals every day.</p>
            <button className="relative px-8 py-2 w-2/3  border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="gap-4 flex flex-row w-full shadow-xl overflow-hidden px-4 py-4 h-60 hover:scale-105 transition-all duration-1000 ">
          <div className="w-1/2 overflow-hidden shadow-xl drop-shadow-2xl">
            <img src={blog5} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="w-1/2 flex flex-col gap-2 p-4">
            <h1 className="text-lg font-bold">Nature’s Nutrition</h1>
            <p className="tracking-wide">Dive into the world of natural nutrition with insights on organic foods, clean eating, and holistic health practices.</p>
            <button className="relative px-8 py-2 w-2/3 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Blogs