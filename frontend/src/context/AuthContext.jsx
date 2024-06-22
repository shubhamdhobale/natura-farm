import { createContext, useState, useContext } from 'react';
import { auth, signOut } from '../firebase/firebaseConfig.js';
import { toast } from 'react-toastify';
// import { auth } from '../firebase/firebaseConfig'; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    try {
      setIsLoggedIn(true);
      toast.success('Logged in successfully!');
    } catch (error) {
      console.log(error)
      toast.error("Error in login")
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      toast.success('Logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to log out.');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
