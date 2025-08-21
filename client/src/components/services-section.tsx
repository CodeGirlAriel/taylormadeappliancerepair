import { Snowflake, Cpu, Flame, Zap, Wrench, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Snowflake,
      title: "Refrigerator Repair",
      description: "Not cooling properly? Strange noises? We diagnose and fix all refrigerator issues quickly and efficiently.",
      features: [
        "Temperature control issues",
        "Ice maker problems", 
        "Door seal replacement",
        "Compressor repair"
      ]
    },
    {
      icon: Cpu,
      title: "Microwave Repair",
      description: "Microwave not heating or making unusual sounds? Our experts can restore it to perfect working condition.",
      features: [
        "Magnetron replacement",
        "Turntable motor repair",
        "Door switch problems",
        "Control panel issues"
      ]
    },
    {
      icon: Flame,
      title: "Oven Repair", 
      description: "Oven not heating evenly or at all? We service all types of ovens to get your cooking back on track.",
      features: [
        "Heating element replacement",
        "Temperature sensor repair",
        "Self-cleaning issues",
        "Door hinge problems"
      ]
    },
    {
      icon: Zap,
      title: "Stove Repair",
      description: "Gas or electric stove problems? We handle everything from burner issues to electrical connections.",
      features: [
        "Burner replacement",
        "Gas valve repair",
        "Electrical connection issues",
        "Control knob problems"
      ]
    },
    {
      icon: Wrench,
      title: "Range Repair",
      description: "Complete range repair services for both the stovetop and oven components of your cooking range.",
      features: [
        "Combination unit issues",
        "Ventilation problems",
        "Timer and clock repair",
        "Safety system checks"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">
            Our Expert Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="services-description">
            We specialize in repairing the most essential kitchen appliances to keep your home running smoothly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow" data-testid={`service-card-${index}`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid={`service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6" data-testid={`service-description-${index}`}>
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-500 space-y-2" data-testid={`service-features-${index}`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
          
          {/* Quality Guarantee Card */}
          <div className="bg-primary rounded-xl p-8 text-white" data-testid="quality-guarantee-card">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid="guarantee-title">Quality Guarantee</h3>
              <p className="mb-6" data-testid="guarantee-description">
                We stand behind our work with a comprehensive warranty on all repairs and parts.
              </p>
              <ul className="text-sm space-y-2" data-testid="guarantee-features">
                <li>• Licensed & insured</li>
                <li>• Warranty on all work</li>
                <li>• Honest pricing</li>
                <li>• Professional service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
