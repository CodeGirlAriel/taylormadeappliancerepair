export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="hero-title">
              Professional Appliance Repair You Can Trust
            </h1>
            <p className="text-xl text-primary font-semibold mb-6" data-testid="hero-tagline">
              "We Repair What Your Husband Fixed!"
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="hero-description">
              Expert repair services for refrigerators, microwaves, ovens, stoves, and ranges. With years of experience and a commitment to quality, we get your appliances working like new again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                data-testid="button-schedule-service"
              >
                Schedule Service
              </button>
              <a 
                href="tel:757-777-7034" 
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                data-testid="button-call-now"
              >
                Call Now: 757-777-7034
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional appliance technician at work" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
