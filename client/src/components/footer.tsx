import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Footer() {
  const services = [
    "Refrigerator Repair",
    "Microwave Repair", 
    "Oven Repair",
    "Stove Repair",
    "Range Repair"
  ];

  const contactInfo = [
    { icon: Phone, text: "757-777-7034", href: "tel:757-777-7034" },
    { icon: Mail, text: "taylormadeappliancellc@gmail.com", href: "mailto:taylormadeappliancellc@gmail.com" },
    { icon: Clock, text: "Mon-Fri: 9:00 AM - 4:00 PM" },
    { icon: MapPin, text: "Serving Virginia Beach & surrounding areas" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="footer-company-name">
              Taylor Made Appliance Repair
            </h3>
            <p className="text-gray-300 mb-4" data-testid="footer-tagline">
              "We Repair What Your Husband Fixed!"
            </p>
            <p className="text-gray-300 text-sm" data-testid="footer-description">
              Professional appliance repair services for refrigerators, microwaves, ovens, stoves, and ranges.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-services-title">Services</h4>
            <ul className="space-y-2 text-gray-300" data-testid="footer-services-list">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">Contact Info</h4>
            <div className="space-y-2 text-gray-300" data-testid="footer-contact-list">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <IconComponent className="w-4 h-4 mr-2" />
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="hover:text-white transition-colors"
                        data-testid={`footer-contact-link-${index}`}
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm" data-testid="footer-copyright">
            &copy; 2024 Taylor Made Appliance Repair. All rights reserved. Licensed and insured.
          </p>
        </div>
      </div>
    </footer>
  );
}
