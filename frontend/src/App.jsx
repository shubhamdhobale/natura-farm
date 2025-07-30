import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import Profile from './pages/Profile.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Register from './components/Register.jsx';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/ForgotPassword.jsx';
import Contact from './pages/Contact.jsx';
import Admin from './pages/Admin.jsx';
import Blogs from './pages/Blogs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/profile' element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
    </Route>
  )
);

const App = () => {
  return (
    <div className='w-screen h-screen box-border'>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;
