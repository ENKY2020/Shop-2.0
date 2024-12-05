import { useAuth } from './hooks/useAuth';
import { isAdmin } from './lib/supabase';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Marketplace from './components/Marketplace';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Handle different routes
  const path = window.location.pathname;

  if (path === '/admin') {
    return isAdmin(user?.email) ? (
      <>
        <Toaster position="top-right" />
        <AdminPanel />
      </>
    ) : (
      <Login />
    );
  }

  if (path === '/login') {
    return (
      <>
        <Toaster position="top-right" />
        <Login />
      </>
    );
  }

  if (path === '/signup') {
    return (
      <>
        <Toaster position="top-right" />
        <SignUp />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Services />
      <Marketplace />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}