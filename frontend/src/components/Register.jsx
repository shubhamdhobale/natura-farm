import img from "../../public/assets/cowlogin.jpg";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, createUserWithEmailAndPassword, doc, setDoc } from "../firebase/firebaseConfig.js";
import { useState } from "react";
import { Bounce, ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phonenumber, password } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        phonenumber,
      });
      toast.success('User registered successfully!');
      console.log("User registered successfully!");
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    } catch (error) {
      console.error("Error registering user: ", error);
      toast.error("Error registering user" );
    }
  };

  return (
    <div className='flex items-center justify-center relative top-20'>
      <div className='flex flex-col items-center justify-center w-full max-w-md border px-8 py-8 rounded-lg shadow-lg '>
        <h1 className='font-bold text-2xl'>Welcome to Natura Family</h1>
        <p>Please fill the details below</p>
        <div className='flex flex-col mt-6 gap-4 w-full'>
          <div className=''>
            <img src={img} alt="Cow" className='w-full h-auto' />
          </div>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name"
              className='border rounded-sm p-2'
              onChange={handleChange}
              name='name'
              value={formData.name}
            />
            <input 
              type="email" 
              placeholder="Email"
              className='border rounded-sm p-2'
              onChange={handleChange}
              name='email'
              value={formData.email}
            />
            <input 
              type="text" 
              placeholder="Phone number"
              className='border rounded-sm p-2'
              onChange={handleChange}
              name='phonenumber'
              value={formData.phonenumber}
            />
            <input 
              type="password" 
              placeholder='Password'
              className='border rounded-sm p-2'
              onChange={handleChange}
              name='password'
              value={formData.password}
            />
            <button className='bg-blue-500 text-white rounded-sm p-2' type="submit">Register</button>
          </form>
          <div className='w-full flex flex-col justify-center items-center mt-2'>
            <p className='text-xs'>Already have an account? <Link to='/login' className='hover:underline text-blue-400'>Login</Link></p>
          </div>
        </div>
      </div>
      <ToastContainer transition={Bounce} position="top-right" theme="light" draggable style={{ top:"70px"  }} />
    </div>
  );
};

export default Register;
