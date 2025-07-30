import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import logo from '../../public/assets/natura-farm.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login'); 
  };

  return (
    <nav className="bg-white z-50 shadow-md fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/"><img className="h-12 w-auto" src={logo} alt="Natura Farm" /></Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-gray-500 hover:underline  px-3 py-2 rounded-md text-md font-medium transition duration-700">Home</Link>
            <Link to="/products" className="text-gray-900 hover:text-gray-500 hover:underline px-3 py-2 rounded-md text-md  font-medium transition duration-300">Products</Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-500 hover:underline px-3 py-2 rounded-md text-md  font-medium transition duration-300">Contact Us</Link>
            <Link to="/blogs" className="text-gray-900 hover:text-gray-500 hover:underline px-3 py-2 rounded-md text-md  font-medium transition duration-300">Blogs</Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faUser} /></Link>
                <Link to="/cart" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                <button onClick={handleLogout} className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faSignOutAlt} /></button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faUser} /></Link>
                <Link to="/cart" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faShoppingCart} /></Link>
              </>
            )}
          </div>

          <div className="flex items-center gap-4 sm:hidden">
            <div className="flex space-x-4">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faUser} /></Link>
                  <Link to="/cart" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                  <button onClick={handleLogout} className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faSignOutAlt} /></button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faUser} /></Link>
                  <Link to="/cart" className="text-gray-900 hover:text-gray-700 transition duration-300"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                </>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700 transition duration-300"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 transform scale-95"
        enterTo="opacity-100 transform scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 transform scale-100"
        leaveTo="opacity-0 transform scale-95"
      >
        {() => (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</Link>
              <Link to="/products" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Products</Link>
              <Link to="/contact" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Contact Us</Link>
              <Link to="/support" className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Support</Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
