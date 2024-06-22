import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/firebaseConfig';

const Profile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (currentUser) {
      // Fetch user data from Firebase or context
      setUserData({
        name: currentUser.displayName || '',
        email: currentUser.email || '',
      });
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to login page or homepage after logout
      navigate('/login')
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="container mx-auto relative top-40">
      <h1 className="text-2xl font-bold my-4">Profile</h1>
      <div className="border p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block font-semibold">Name:</label>
          <p>{userData.name}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email:</label>
          <p>{userData.email}</p>
        </div>
        <div className="flex justify-between">
          <Link to="/edit-profile" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Edit Profile
          </Link>
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
