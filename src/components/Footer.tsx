import { Youtube, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Professional ICT solutions provider specializing in digital services, marketplace solutions, and tech education.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="https://www.youtube.com/@LockdownPodcastKE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Youtube className="h-5 w-5 mr-2" />
                @Lockdown Podcast KE
              </a>
              <a 
                href="https://www.facebook.com/EnkySolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white"
              >
                <Facebook className="h-5 w-5 mr-2" />
                Enky Solutions
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <a 
              href="https://wa.me/254768063078"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              +254 768 063 078 (WhatsApp)
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Enky Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}