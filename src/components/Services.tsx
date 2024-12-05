import { FileText, Building2, Calculator, BookOpen, Plane, MessageCircle } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Document Services',
    description: 'Professional CV, Portfolio & Letter Writing',
    icon: FileText,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    services: [
      { name: 'Professional CV Typesetting', price: 350 },
      { name: 'International CV Typesetting', price: 500 },
      { name: 'Portfolio Creation', price: 1500 },
      { name: 'Cover Letters', price: 150 },
      { name: 'Recommendation Letters', price: 200 },
      { name: 'CV Revamps', price: 100 }
    ]
  },
  {
    title: 'Government Services',
    description: 'E-Citizen & KRA Services',
    icon: Building2,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    services: [
      { name: 'Police Clearance Certificate', price: null },
      { name: 'Driving License Application', price: null },
      { name: 'SHA Services', price: null },
      { name: 'NSSF Services', price: null },
      { name: 'KRA Services', price: null }
    ]
  },
  {
    title: 'Academic & Business',
    description: 'Research Projects & Business Plans',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    services: [
      { name: 'Academic Research Projects', price: 3500 },
      { name: 'Business Plans', price: 2500 },
      { name: 'Report Writing', price: 1500 }
    ]
  },
  {
    title: 'Travel Services',
    description: 'Visa & Green Card Applications',
    icon: Plane,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    services: [
      { name: 'Green Card DV Lottery (Single)', price: 400 },
      { name: 'Green Card DV Lottery (Family)', price: 500 },
      { name: 'USA Visit Visa Application', price: 1500 },
      { name: 'Kenyan Visa Passport', price: 700 }
    ]
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Cyber Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Quality services at competitive rates
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {serviceCategories.map((category) => (
            <div key={category.title} className="relative group">
              <div className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {category.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex justify-between items-center text-sm">
                      <span>{service.name}</span>
                      {service.price && (
                        <span className="font-medium">KSh {service.price}</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}