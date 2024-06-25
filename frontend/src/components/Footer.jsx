import footerimg from '../../public/assets/footer.png';
import {   FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative pt-40 flex flex-col">
      <img src={footerimg} alt="" />
      <div className='flex flex-row w-full justify-evenly py-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold tracking-wider'>Reach Out</h1>
          <div className='flex flex-col mt-3 gap-2'>
          <div className='flex flex-row  gap-4'>
            <FaMapMarkerAlt/>
            <p>A/P - Manchar , Tal - Ambegoan,<br/> Dist - Pune ,
            410 503</p>
          </div>
          <div className='flex flex-row  gap-4'>
            <FaEnvelope/>
            <p>abc@gmail.com</p>
          </div>
          <div className='flex flex-row  gap-4'>
            <FaPhone/>
            <p>+91 1234567890</p>
          </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold tracking-wider'>Useful Links</h1>
          <p>Home</p>
          <p>Products</p>
          <p>Blogs</p>
          <p>Support</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold tracking-wider'>General</h1>
          <p>Privacy Policy</p>
          <p>Refund & Cancellation Policy</p>
          <p>Terms & Condition</p>
          <p>Shipping & Delivery Policy</p>
          <p>Return Policy</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-semibold tracking-wider'>Social Media</h1>
          <div className='flex flex-col gap-4'>
            <FaFacebook size={30} />
            <FaInstagram size={30}/>
            <FaTwitter size={30}/>
            <FaWhatsapp size={30}/>
          </div>
        </div>
      </div>
      <div className='text-center bg-[#807849] py-2 text-white tracking-wider font-semibold'>@ 2024 | Natura Organics | All Copyrights Reserved</div>
    </footer>
  )
}

export default Footer