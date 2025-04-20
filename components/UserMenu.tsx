import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserData {
  username?: string;
  email?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        setUserData(user);
        setShowLogoutMessage(false); // Reset logout message when user data changes
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  const handleSignUp = () => {
    onClose();
    router.push('/signup');
  };

  const handleLogin = () => {
    onClose();
    router.push('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserData(null);
    setShowLogoutMessage(true);
    // Keep the menu open to show the message
    setTimeout(() => {
      setShowLogoutMessage(false);
      onClose();
      router.push('/');
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
        setShowLogoutMessage(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="z-50 absolute right-20 top-[70px] w-[240px] bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden"
    >
      <div className="py-2 text-left">
        {showLogoutMessage ? (
          <div className="px-6 py-4 text-center bg-green-50">
            <p className="text-green-600 font-medium animate-fadeIn">
              You are logged out successfully!
            </p>
          </div>
        ) : userData ? (
          <>
            <div className="px-6 py-3 border-b border-gray-200">
              <div className="font-medium text-gray-900">{userData.username}</div>
              <div className="text-sm text-gray-500">{userData.email}</div>
            </div>
            <button 
              className="text-left w-full px-6 py-3 text-[14px] hover:bg-gray-100"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <button 
              className="text-left w-full px-6 py-3 text-[14px] font-semibold hover:bg-gray-100" 
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <button 
              className="text-left w-full px-6 py-3 text-[14px] hover:bg-gray-100"
              onClick={handleLogin}
            >
              Log in
            </button>
          </>
        )}
      </div>
      {!showLogoutMessage && (
        <div className="border-t border-gray-200 py-2">
          <button className="text-left w-full px-6 py-3 text-[14px] hover:bg-gray-100">
            Airbnb your home
          </button>
          <button className="text-left w-full px-6 py-3 text-[14px] hover:bg-gray-100">
            Host an experience
          </button>
          <button className="text-left w-full px-6 py-3 text-[14px] hover:bg-gray-100">
            Help Centre
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu; 