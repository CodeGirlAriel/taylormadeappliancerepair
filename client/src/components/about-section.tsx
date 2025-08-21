import { Check } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Licensed and fully insured",
    "Transparent, upfront pricing", 
    "Quality parts and warranties",
    "Professional, courteous service"
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-testid="about-title">
              About Taylor Made Appliance Repair
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="about-description-1">
              With years of experience in appliance repair, we understand how frustrating it can be when your essential kitchen appliances break down. That's why we're committed to providing fast, reliable, and professional repair services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="about-description-2">
              Our motto "We Repair What Your Husband Fixed!" reflects our expertise in handling those tricky repairs that need a professional touch. We take pride in our honest approach and quality workmanship.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center" data-testid={`about-feature-${index}`}>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Check className="text-white w-5 h-5" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional appliance repair technician with tools" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
