import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import busFront from "@/assets/bus-front.jpg";
import busSchool from "@/assets/bus-school.jpg";
import busSunset from "@/assets/bus-sunset.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const carouselSlides = [
    { 
      image: busFront, 
      caption: "We're Here to Help", 
      description: "Reach our support team at Equity Plaza, Ngara, Nairobi.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busSchool, 
      caption: "Connect with TrackMyKid", 
      description: "Questions? Feedback? We're always ready to listen.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busSunset, 
      caption: "Your Partner in Child Safety", 
      description: "Contact us for support, inquiries, or to get started today.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! 📧",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section with Background Carousel */}
        <section className="relative pt-16 min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
          {/* Full-screen Background Carousel */}
          <div className="absolute inset-0 z-0">
            <ImageCarousel slides={carouselSlides} />
          </div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          
          <div className="container mx-auto px-4 relative z-10 py-8 md:py-16">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white drop-shadow-lg">
                Get in <span className="text-mustard drop-shadow-lg">Touch</span>
              </h1>
              <p className="text-base md:text-xl text-white/90 leading-relaxed drop-shadow-md px-2">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-2 rounded-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 712 345 678"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        rows={5}
                        className="rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange hover:bg-orange/90 text-white rounded-full"
                      size="lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2 hover:border-orange transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Office Location</h3>
                        <p className="text-muted-foreground">
                          Equity Plaza, Ngara<br />
                          Nairobi, Kenya
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          <a href="mailto:support@trackmykid.co.ke" className="hover:text-orange transition-colors">
                            support@trackmykid.co.ke
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          <a href="tel:0707152322" className="hover:text-orange transition-colors font-medium">
                            0707 152 322
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-orange transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-foreground mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM EAT<br />
                          Saturday: 9:00 AM - 2:00 PM EAT<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-trust-blue rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-foreground mb-4">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-trust-blue/10 hover:bg-trust-blue hover:text-white flex items-center justify-center text-trust-blue transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-trust-blue/10 hover:bg-trust-blue hover:text-white flex items-center justify-center text-trust-blue transition-all duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-trust-blue/10 hover:bg-trust-blue hover:text-white flex items-center justify-center text-trust-blue transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-trust-blue/10 hover:bg-trust-blue hover:text-white flex items-center justify-center text-trust-blue transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
};

export default Contact;
