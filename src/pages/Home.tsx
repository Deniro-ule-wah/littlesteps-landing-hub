import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Bell, Shield, Lock, Eye, Users } from "lucide-react";
import heroImage from "@/assets/hero-school-bus.jpg";
import nairobiSkyline from "@/assets/nairobi-skyline.jpg";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Monitor your child's journey live with GPS tracking and route visualization.",
    },
    {
      icon: Bell,
      title: "Parent Notifications",
      description: "Instant alerts for pickup, drop-off, and any route changes or delays.",
    },
    {
      icon: Shield,
      title: "Panic Button",
      description: "Emergency alert system for immediate response in critical situations.",
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Industry-standard encryption ensures your family's information stays private.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Complete visibility into your child's transport journey, every step of the way.",
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Join thousands of parents who trust TrackMyKid for safe school transport.",
    },
  ];

  const testimonials = [
    {
      name: "Adaeze Okonkwo",
      role: "Parent",
      content: "TrackMyKid gives me peace of mind. I can see exactly when my daughter arrives at school safely.",
      school: "Green Valley Academy",
    },
    {
      name: "John Mensah",
      role: "School Administrator",
      content: "This platform has transformed our transport operations. Parents are happier, and we're more efficient.",
      school: "Bright Future School",
    },
    {
      name: "Fatima Bello",
      role: "Transport Coordinator",
      content: "Real-time tracking and notifications have eliminated confusion and improved our service quality.",
      school: "Unity International",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-background via-soft-bg to-primary/5">
        {/* Nairobi Skyline Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src={nairobiSkyline} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Every Journey. <span className="text-trust-blue">Seen.</span>{" "}
                <span className="text-mustard">Safe.</span> Secure.
              </h1>
              <p className="text-2xl font-heading text-muted-foreground italic">
                Karibu TrackMyKid
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Empowering parents with peace of mind. Kenya's leading parental trust and safety brand ensuring transparency in school transport.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/auth">Track My Child</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="xl" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <a href="#features-section">Learn More</a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="Happy children in school bus with GPS tracking" 
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm">Happy Families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Parents Trust <span className="text-gradient-mustard">TrackMyKid</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kenya's leading solution ensuring transparency, safety, and visibility in school transport
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 hover-lift">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Trusted by Schools & Parents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our community has to say about TrackMyKid
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-secondary font-medium mt-1">{testimonial.school}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-trust-blue text-secondary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Experience Peace of Mind?
          </h2>
          <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
            Join thousands of parents who trust TrackMyKid for safe, transparent school transport
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/auth">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
