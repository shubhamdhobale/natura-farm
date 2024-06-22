import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Support from './pages/Support.jsx';
import Products from './pages/Products.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';
import Profile from './pages/Profile.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Register from './components/Register.jsx';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './components/ForgotPassword.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/support' element={<Support />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/register' element={<Register />} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />
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
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
