import { useState } from 'react';
import img from '../../public/assets/cow1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '../firebase/firebaseConfig.js'; 
import { useAuth } from '../context/AuthContext';
import { Bounce, ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle , FaFacebook} from 'react-icons/fa';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);

      // Update the auth context
      login();

      // Redirect to the profile page after successful login
      setTimeout(() => {
        navigate('/profile');
      }, 1000);
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error("User not logged in")
      setError('Failed to log in. Please check your credentials and try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User logged in with Google:', user);

      // Update the auth context
      login();

      // Redirect to the profile page after successful login
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast.error("Google sign-in failed")
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <div className='flex items-center justify-center relative top-20'>
      <div className='flex flex-col items-center justify-center w-full max-w-md border px-8 py-8 rounded-lg shadow-lg'>
        <h1 className='font-bold text-2xl'>Login</h1>
        <p>Please enter email & password</p>
        <div className='flex flex-col mt-6 gap-4 w-full'>
          <div className=''>
            <img src={img} alt="Cow" className='w-full h-auto' />
          </div>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              className='border rounded-sm p-2'
              onChange={handleChange}
              name='email'
              value={formData.email}
            />
            <input 
              type="password" 
              placeholder='Password' 
              className='border rounded-sm p-2'
              onChange={handleChange}
              name='password'
              value={formData.password}
            />
            <p className='text-xs text-right'>
              <Link to='/forgot-password' className='hover:underline text-blue-500'>
                Forgot Password?
              </Link>
            </p>
            <button className='bg-blue-500 text-white rounded-sm p-2' type="submit">Login</button>
            {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
          </form>
          <div className='flex flex-col gap-2 mt-4 w-full'>
            <p className='text-xs text-center'>
              New Customer? <Link to='/register' className='hover:underline text-blue-500'>Create an account</Link>
            </p>
            <p className='text-center'>or</p>
            <div className='flex flex-col gap-2 w-full'>
              <button onClick={handleGoogleSignIn} className='bg-gray-50 border rounded-sm flex flex-row justify-center items-center gap-4 py-2'>
                <FaGoogle/>
                Sign in with Google
              </button>
              <button  className='bg-gray-50 border rounded-sm flex flex-row justify-center items-center gap-4 py-2'>
                <FaFacebook/>
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer transition={Bounce} position="top-right" theme="light" draggable style={{ top: "70px" }} />
    </div>
  );
}

export default Login;
