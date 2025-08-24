import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Put your Rossware links here (you can switch to env vars later if you want)
const SCHEDULE_URL = "https://booking.rossware.com/schedule/4474";
const TRACK_URL    = "https://booking.rossware.com/track-technician/4474";
const PARTS_URL    = "https://booking.rossware.com/check-status/4474";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "757-777-7034",
      href: "tel:757-777-7034",
    },
    {
      icon: Mail,
      title: "Email",
      content: "taylormadeappliancellc@gmail.com",
      href: "mailto:taylormadeappliancellc@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday\n9:00 AM - 4:00 PM",
    },
    {
      icon: MapPin,
      title: "Service Area",
      content:
        "Virginia Beach, Norfolk, Chesapeake, Hampton, Newport News, Suffolk, Portsmouth, Smithfield, Carrollton and surrounding areas",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            data-testid="contact-title"
          >
            Get Your Appliances Fixed Today
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-testid="contact-description"
          >
            Book online, track your technician, or check job/parts status with our secure customer portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3
                className="text-xl font-semibold text-gray-900 mb-6"
                data-testid="contact-info-title"
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start"
                      data-testid={`contact-info-${index}`}
                    >
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary hover:text-blue-700 font-medium break-all"
                            data-testid={`contact-link-${index}`}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Rossware actions (replaces the form) */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Online Service Tools
            </h3>
            <p className="text-gray-600 mb-6">
              Use the links below to schedule an appointment, track your technician in real time,
              or check the status of your job/parts. Each link opens in a new tab.
            </p>

            {/* Peninsula scheduling sub-section */}
		<div className="mb-6 text-red-700">
 		 <div className="flex items-center gap-2 text-sm font-semibold">
    		<Clock className="w-4 h-4" />
    		<span>Peninsula Scheduling Windows</span>
  		</div>
  		<p className="mt-2 font-medium">
   		 We are proud to now offer online scheduling options for our Peninsula customers.
  		</p>
  		<ul className="mt-3 space-y-1 list-disc list-inside">
    		<li>
      		<span className="font-semibold">Morning:</span>{" "}
      		<span className="font-semibold">9:00 AM – 2:00 PM</span>
    		</li>
    		<li>
      		<span className="font-semibold">Afternoon:</span>{" "}
      		<span className="font-semibold">2:00 PM – 6:00 PM</span>
    		</li>
  		</ul>
		</div>



            {/* Buttons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Button asChild className="w-full" data-testid="btn-schedule">
                <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer">
                  Schedule Appointment
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full" data-testid="btn-track">
                <a href={TRACK_URL} target="_blank" rel="noopener noreferrer">
                  Track Technician
                </a>
              </Button>

              <Button asChild variant="outline" className="w-full sm:col-span-2" data-testid="btn-parts">
                <a href={PARTS_URL} target="_blank" rel="noopener noreferrer">
                  Check Job / Parts Status
                </a>
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Powered by Rossware. Links open on booking.rossware.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
