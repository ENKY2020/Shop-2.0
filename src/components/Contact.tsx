import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappLink = "https://wa.me/254768063078";

  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Ready to get started? Contact us through WhatsApp Business
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-blue-600 p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-blue-100 mb-8">Reach out to us for professional ICT services and solutions</p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <span>+254 768 063 078</span>
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-200"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  <span>WhatsApp Business</span>
                </a>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold mb-3">Business Hours:</h4>
                <p className="text-blue-100">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-blue-100">Sunday: By Appointment</p>
              </div>
            </div>

            <div className="p-10">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:text-lg md:px-10"
              >
                <MessageCircle className="h-6 w-6 mr-2" />
                Contact on WhatsApp
              </a>

              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Our Services Include:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Document Processing & Printing</li>
                  <li>✓ Professional Scanning Services</li>
                  <li>✓ Digital Marketing Campaigns</li>
                  <li>✓ Website Development</li>
                  <li>✓ Online Product Listings</li>
                  <li>✓ WhatsApp Business Marketing</li>
                  <li>✓ Tech Education & Training</li>
                  <li>✓ Digital Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}