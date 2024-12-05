import { Printer, ScanLine, Globe, ShoppingBag, Youtube, MessageCircle, Code, FileText } from 'lucide-react';

const detailedServices = [
  {
    title: 'Document Services',
    description: 'Professional printing, scanning, and document processing with high-quality output.',
    icon: Printer,
    features: ['Color & B/W Printing', 'Document Formatting', 'Professional Finishing']
  },
  {
    title: 'Digital Marketing',
    description: 'Reach 4.6k-10k people monthly through our effective WhatsApp marketing campaigns.',
    icon: MessageCircle,
    features: ['WhatsApp Business Marketing', 'Content Strategy', 'Campaign Management']
  },
  {
    title: 'Web Development',
    description: 'Custom website development and maintenance services for your business.',
    icon: Code,
    features: ['Responsive Design', 'E-commerce Solutions', 'Website Maintenance']
  },
  {
    title: 'Online Marketplace',
    description: 'List and sell your products through our trusted digital marketplace.',
    icon: ShoppingBag,
    features: ['Product Listings', 'Secure Transactions', 'Marketing Support']
  }
];

export default function DetailedServices() {
  return (
    <div id="marketplace" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Detailed Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions for all your digital needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {detailedServices.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">{service.title}</h3>
                </div>
                <p className="mt-4 text-gray-500">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}