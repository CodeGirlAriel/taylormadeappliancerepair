import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  appliance: string;
  problem: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    appliance: "",
    problem: ""
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Service Request Submitted",
        description: "Thank you for your service request! We will contact you soon.",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        appliance: "",
        problem: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "An error occurred while submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.appliance || !formData.problem) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "757-777-7034",
      href: "tel:757-777-7034"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "taylormadeappliancellc@gmail.com",
      href: "mailto:taylormadeappliancellc@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday\n9:00 AM - 4:00 PM"
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Virginia Beach, Norfolk, Chesapeake, and surrounding areas"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-testid="contact-title">
            Get Your Appliances Fixed Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="contact-description">
            Contact us for a free estimate or to schedule your repair service. We're here to help get your appliances working like new again.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6" data-testid="contact-info-title">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start" data-testid={`contact-info-${index}`}>
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="text-white w-6 h-6" />
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
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6" data-testid="contact-form-title">
              Request Service
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full"
                    required
                    data-testid="input-firstname"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full"
                    required
                    data-testid="input-lastname"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full"
                  required
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="appliance" className="text-sm font-medium text-gray-700 mb-2">
                  Appliance Type
                </Label>
                <Select value={formData.appliance} onValueChange={(value) => handleInputChange('appliance', value)}>
                  <SelectTrigger className="w-full" data-testid="select-appliance">
                    <SelectValue placeholder="Select appliance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="refrigerator">Refrigerator</SelectItem>
                    <SelectItem value="microwave">Microwave</SelectItem>
                    <SelectItem value="oven">Oven</SelectItem>
                    <SelectItem value="stove">Stove</SelectItem>
                    <SelectItem value="range">Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="problem" className="text-sm font-medium text-gray-700 mb-2">
                  Describe the Problem
                </Label>
                <Textarea
                  id="problem"
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => handleInputChange('problem', e.target.value)}
                  placeholder="Please describe what's wrong with your appliance..."
                  className="w-full"
                  required
                  data-testid="textarea-problem"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary text-white hover:bg-blue-700"
                disabled={submitContactForm.isPending}
                data-testid="button-submit-form"
              >
                {submitContactForm.isPending ? "Submitting..." : "Submit Service Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
