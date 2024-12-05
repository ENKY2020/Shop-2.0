import { Menu, X, Monitor, ShoppingBag, Youtube, MessageCircle, Lock, UserCircle } from 'lucide-react';
import { useState } from 'react';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Enky Solutions</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#marketplace" className="text-gray-600 hover:text-blue-600">Marketplace</a>
            <a href="#content" className="text-gray-600 hover:text-blue-600">Content</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact Us</a>
            {user ? (
              <>
                <a href="/profile" className="inline-flex items-center text-gray-600 hover:text-blue-600">
                  <UserCircle className="h-4 w-4 mr-1" />
                  Profile
                </a>
                {user.email === 'enkysolutions2019@gmail.com' && (
                  <a href="/admin" className="inline-flex items-center text-gray-600 hover:text-blue-600">
                    <Lock className="h-4 w-4 mr-1" />
                    Admin
                  </a>
                )}
              </>
            ) : (
              <>
                <a href="/login" className="text-gray-600 hover:text-blue-600">Login</a>
                <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</a>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
              <a href="#marketplace" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Marketplace</a>
              <a href="#content" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Content</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact Us</a>
              {user ? (
                <>
                  <a href="/profile" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                    <span className="inline-flex items-center">
                      <UserCircle className="h-4 w-4 mr-1" />
                      Profile
                    </span>
                  </a>
                  {user.email === 'enkysolutions2019@gmail.com' && (
                    <a href="/admin" className="block px-3 py-2 text-gray-600 hover:text-blue-600">
                      <span className="inline-flex items-center">
                        <Lock className="h-4 w-4 mr-1" />
                        Admin
                      </span>
                    </a>
                  )}
                </>
              ) : (
                <>
                  <a href="/login" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Login</a>
                  <a href="/signup" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Sign Up</a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}