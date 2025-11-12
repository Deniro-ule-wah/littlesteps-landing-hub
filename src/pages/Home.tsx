import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Bell, Shield, Lock, Eye, Users, CheckCircle, UserPlus, LogIn, Smartphone, BusFront } from "lucide-react";
import heroImage from "@/assets/hero-school-bus.jpg";
import nairobiSkyline from "@/assets/nairobi-skyline.jpg";
import schoolBusRoad from "@/assets/school-bus-road.jpg";
import kenyanChildren from "@/assets/kenyan-school-children.jpg";
import childrenBoarding from "@/assets/children-boarding-bus.jpg";

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
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => window.location.href = 'https://trackmykid-webapp.vercel.app/'}
                  aria-label="Login to Portal"
                  className="transition-all hover:scale-105"
                >
                  Track My Child
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
                src={schoolBusRoad} 
                alt="School bus on Kenyan road with safety tracking" 
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

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How It <span className="text-gradient-blue">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your child's journey in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-trust-blue text-white flex items-center justify-center font-bold">
                  1
                </div>
                <UserPlus className="h-12 w-12 text-trust-blue mt-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Sign Up & Enroll
                </h3>
                <p className="text-muted-foreground">
                  Create your parent account and register your child with their school transport details. Pay the affordable enrollment fee to get started.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-trust-blue text-white flex items-center justify-center font-bold">
                  2
                </div>
                <LogIn className="h-12 w-12 text-trust-blue mt-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Login & Connect
                </h3>
                <p className="text-muted-foreground">
                  Access your personalized dashboard through our secure web portal. Connect with your child's assigned school bus and driver.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-6 space-y-4">
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-trust-blue text-white flex items-center justify-center font-bold">
                  3
                </div>
                <Smartphone className="h-12 w-12 text-trust-blue mt-4" />
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Track in Real-Time
                </h3>
                <p className="text-muted-foreground">
                  View live GPS tracking when your child boards (onboarding) or leaves (offboarding) the bus. Receive instant notifications at every step.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 space-y-4">
            <div className="flex items-start gap-4">
              <BusFront className="h-8 w-8 text-trust-blue flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                  Onboarding & Offboarding Tracking
                </h4>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Onboarding:</strong> Get notified the moment your child boards the school bus in the morning. See the exact pickup time and location.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong className="text-foreground">Offboarding:</strong> Receive alerts when your child is dropped off at school or home. Track the entire journey with real-time GPS updates and estimated arrival times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Simple, <span className="text-gradient-mustard">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable safety for every family in Kenya
            </p>
          </div>

          {/* Brand Philosophy */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="bg-gradient-to-r from-secondary/10 via-trust-blue/10 to-mustard/10 rounded-2xl p-8 border-2 border-primary/10">
              <p className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                We Move with <span className="text-secondary">PURPOSE</span>. We Protect with <span className="text-trust-blue">PRIDE</span>. We Serve with <span className="text-mustard">HEART</span>.
              </p>
              <p className="text-muted-foreground mt-4">
                Every child's journey should be seen, safe, and celebrated
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Installation Fee */}
            <Card className="border-2 border-trust-blue hover:shadow-xl transition-all duration-300 hover-lift">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Installation
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">One-time setup</p>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-trust-blue">16,000</p>
                    <p className="text-xs text-muted-foreground">KES per vehicle</p>
                  </div>
                </div>
                <div className="space-y-2 pt-3 border-t">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">GPS tracker installation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">System configuration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Driver training</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Device warranty</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Renewal Fee */}
            <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300 hover-lift">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Renewal
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">Annual device fee</p>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-primary">4,000</p>
                    <p className="text-xs text-muted-foreground">KES per year</p>
                  </div>
                </div>
                <div className="space-y-2 pt-3 border-t">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Device maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Platform updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Technical support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">System reliability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Per Term */}
            <Card className="border-2 border-mustard hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-mustard text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                MOST POPULAR
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Per Term
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">Per school term</p>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-mustard">3,000</p>
                    <p className="text-xs text-muted-foreground">KES per child</p>
                  </div>
                </div>
                <div className="space-y-2 pt-3 border-t">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Live GPS tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Instant alerts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Panic button</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">24/7 support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Flexible payments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="border-2 border-secondary hover:shadow-xl transition-all duration-300 hover-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                SAVE 25%
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Annual
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">Full year value</p>
                  <div className="space-y-1">
                    <p className="text-4xl font-bold text-secondary">9,000</p>
                    <p className="text-xs text-muted-foreground">KES per child</p>
                  </div>
                  <p className="text-xs text-secondary font-semibold mt-2">
                    Save 3,000 KES!
                  </p>
                </div>
                <div className="space-y-2 pt-3 border-t">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">All term features</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Priority support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Advanced analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">Free upgrades</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">25% savings</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include full access to our tracking platform with no hidden fees
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.location.href = 'https://trackmykid-webapp.vercel.app/'}
              aria-label="Get Started"
              className="transition-all hover:scale-105"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Trusted by Schools & Parents Across Kenya
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our community has to say about TrackMyKid
            </p>
          </div>

          {/* Images Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift">
              <img 
                src={kenyanChildren} 
                alt="Happy Kenyan school children in uniforms" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-heading font-semibold text-xl">
                  Serving Students from Leading Kenyan Schools
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift">
              <img 
                src={childrenBoarding} 
                alt="Children boarding school bus safely" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-heading font-semibold text-xl">
                  Safe Onboarding & Offboarding Every Day
                </p>
              </div>
            </div>
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
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.location.href = 'https://trackmykid-webapp.vercel.app/'}
            aria-label="Login to Portal"
            className="transition-all hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
