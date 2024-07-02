import { ProductsData } from "../Data"
import Button from "../components/Button"

const Products = () => {
  return (
    <main className="w-full relative top-16 py-20 px-20 flex flex-col justify-center items-center gap-10">
    <h1 className="text-3xl font-bold tracking-wider">Classic Legends</h1>
    <hr className="border shadow-2xl w-2/3 border-gray-300"/>
    <div className="flex flex-wrap gap-10 justify-center">
      {
        ProductsData.map((product) => {
          return (
            <div key={product.id} className="flex flex-col w-full sm:w-1/2 lg:w-1/4 border 
             shadow-xl hover:scale-105 duration-1000 transition-all rounded-xl overflow-hidden">
              <div>
                <img src={product.image} alt={product.name} className=""/>
              </div>
              <div className="flex flex-col justify-center items-center gap-2  px-6 py-5">
                <h1 className="text-xl font-semibold tracking-wider">{product.name}</h1>
                <p className="tracking-wider text-center">{product.description}</p>
                <div className="flex justify-between items-center mt-2 gap-2">
                <span className="text-yellow-500">{product.ratings}★</span>
                <span className="text-gray-600 ml-2 cursor-pointer">({product.reviews} reviews)</span>
                  </div>
                <span className="block mt-2 font-bold text-lg">Rs. {product.price}</span>
                <div className="flex flex-row justify-center items-center gap-4 w-full mt-4">
                <Button/>
                <button className="relative overflow-hidden px-2 py-2 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-[15px] outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca]  shadow-xl w-1/2">
      Buy Now
        </button>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  </main>
  
  )
}

export default Products