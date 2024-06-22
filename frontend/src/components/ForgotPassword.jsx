// ForgotPassword.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
    .then(() => {
    // Password reset email sent!
    setLoading(false);
    toast.success('Password reset email sent successfully!');
    console.log('Password reset email sent successfully!');
    setError(false)
    // ..
  })
  .catch((error) => {
    console.log(error)
    setError(true)
    // ..
  });
  };

  return (
    <div className='flex items-center justify-center relative top-20'>
      <div className='flex flex-col items-center justify-center w-full max-w-md border px-8 py-8 rounded-lg shadow-lg'>
        <h1 className='font-bold text-2xl'>Forgot Password?</h1>
        <p>Please enter your email to receive a password reset link.</p>
        <form className='flex flex-col gap-2 mt-6' onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className='border rounded-sm p-2'
            value={email}
            onChange={handleChange}
            required
          />
          <button
            className={`bg-blue-500 text-white rounded-sm p-2 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Email'}
          </button>
        </form>
        {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
        <div className='flex items-center justify-center mt-4 w-full'>
          <p className='text-xs'>Remembered your password? <Link to='/login' className='hover:underline text-blue-500'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
