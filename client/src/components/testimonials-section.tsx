import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "My husband tried to fix our refrigerator and made it worse! Taylor Made came out the next day and had it working perfectly. Professional, honest, and reasonably priced. Highly recommended!",
      name: "Sarah Johnson",
      location: "Virginia Beach"
    },
    {
      rating: 5, 
      text: "Fast, reliable service! Our oven stopped working and they diagnosed and fixed the problem the same visit. The technician was knowledgeable and explained everything clearly.",
      name: "Mike Thompson",
      location: "Norfolk"
    },
    {
      rating: 5,
      text: "Great experience from start to finish. Called about our microwave, got a reasonable quote, and they fixed it quickly. Will definitely use them again!",
      name: "Linda Davis",
      location: "Chesapeake"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="testimonials-description">
            Don't just take our word for it - hear from satisfied customers who trust us with their appliance repairs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8" data-testid={`testimonial-card-${index}`}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400" data-testid={`testimonial-rating-${index}`}>
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <p className="font-semibold text-gray-900" data-testid={`testimonial-name-${index}`}>
                  {testimonial.name}
                </p>
                <p className="text-gray-500" data-testid={`testimonial-location-${index}`}>
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
