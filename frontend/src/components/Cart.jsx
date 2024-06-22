import { Link } from 'react-router-dom'
import cartimg from '../../public/assets/empty-cart.png'


const Cart = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="border shadow-lg w-fit flex flex-col items-center justify-center gap-3 py-14 mt-16">
        <img src={cartimg} alt="" className='w-1/3'/>
        <h2 className="text-lg font-bold">Your Cart is Empty</h2>
        <p className="text-sm">Add some items to your cart to get started</p>
        <Link to='/products' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Browse Products</Link>


      </div>
    </div>
  )
}

export default Cart