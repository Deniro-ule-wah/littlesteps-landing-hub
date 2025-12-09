import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ChatbotWidget from "@/components/ChatbotWidget";
import { 
  MapPin, Bell, Shield, AlertTriangle, Star, Users, 
  Smartphone, Bus, Clock, CheckCircle, Navigation2, 
  UserCheck, AlertCircle, BarChart3
} from "lucide-react";
import busFleet from "@/assets/bus-fleet.jpg";
import busFront from "@/assets/bus-front.jpg";
import busDetail from "@/assets/bus-detail.jpg";
import busLineup from "@/assets/bus-lineup.jpg";
import busStreet from "@/assets/bus-street.jpg";
import busSunset from "@/assets/bus-sunset.jpg";
import busSchool from "@/assets/bus-school.jpg";

const HowItWorks = () => {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const carouselSlides = [
    { image: busFleet, caption: "How TrackMyKid Works", description: "Simple steps to keep your child safe", location: "Nairobi • Kenya" },
    { image: busFront, caption: "Real-Time Tracking", description: "GPS visibility for every journey", location: "Nairobi • Kenya" },
    { image: busDetail, caption: "Instant Notifications", description: "Stay connected at every step", location: "Nairobi • Kenya" },
  ];

  const simulationData = {
    parent: {
      title: "Parent Dashboard",
      description: "Track your child's journey in real-time",
      features: [
        { icon: MapPin, label: "Live GPS Map", status: "active" },
        { icon: Bell, label: "Instant Alerts", status: "3 new" },
        { icon: Clock, label: "ETA: 12 mins", status: "on time" },
        { icon: UserCheck, label: "Child Status", status: "On Bus" },
      ]
    },
    school: {
      title: "School Admin Panel",
      description: "Manage all students and buses efficiently",
      features: [
        { icon: Bus, label: "Active Buses", status: "8/10" },
        { icon: Users, label: "Students Today", status: "245" },
        { icon: CheckCircle, label: "On Time Rate", status: "97%" },
        { icon: BarChart3, label: "Weekly Report", status: "View" },
      ]
    },
    driver: {
      title: "Driver Interface",
      description: "Simple navigation and student tracking",
      features: [
        { icon: Navigation2, label: "Route Active", status: "Route 5" },
        { icon: Users, label: "Passengers", status: "18/25" },
        { icon: Clock, label: "Next Stop", status: "3 mins" },
        { icon: AlertCircle, label: "Alerts", status: "None" },
      ]
    },
    assistant: {
      title: "Bus Assistant View",
      description: "Check-in students safely",
      features: [
        { icon: UserCheck, label: "Boarded", status: "15" },
        { icon: Users, label: "Pending", status: "3" },
        { icon: CheckCircle, label: "Verified", status: "100%" },
        { icon: Bell, label: "Notifications", status: "Sent" },
      ]
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageCarousel slides={carouselSlides} />
        </div>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        
        <div className="container mx-auto px-4 relative z-10 py-8 md:py-16">
          <div className="max-w-3xl space-y-4 md:space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight drop-shadow-lg">
              How <span className="text-mustard">TrackMyKid</span> Works
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-xl drop-shadow-md">
              Explore our interactive simulations and see how we keep every child safe on their school journey
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Simulations */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Interactive <span className="text-gradient-blue">Dashboard</span> Preview
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how different users experience TrackMyKid
            </p>
          </div>

          <Tabs defaultValue="parent" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              <TabsTrigger value="parent" className="data-[state=active]:bg-trust-blue data-[state=active]:text-white">
                Parent
              </TabsTrigger>
              <TabsTrigger value="school" className="data-[state=active]:bg-trust-blue data-[state=active]:text-white">
                School Admin
              </TabsTrigger>
              <TabsTrigger value="driver" className="data-[state=active]:bg-trust-blue data-[state=active]:text-white">
                Driver
              </TabsTrigger>
              <TabsTrigger value="assistant" className="data-[state=active]:bg-trust-blue data-[state=active]:text-white">
                Bus Assistant
              </TabsTrigger>
            </TabsList>

            {Object.entries(simulationData).map(([key, data]) => (
              <TabsContent key={key} value={key}>
                <Card className="border-2 border-trust-blue/20 overflow-hidden">
                  {/* Simulated App Header */}
                  <div className="bg-trust-blue text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <Bus className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold">{data.title}</h3>
                        <p className="text-sm text-white/80">{data.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm">Live</span>
                    </div>
                  </div>

                  {/* Simulated Map Area */}
                  <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-trust-blue rounded-full animate-ping" />
                      <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-orange rounded-full animate-ping animation-delay-500" />
                    </div>
                    <div className="relative z-10 text-center">
                      <MapPin className="h-16 w-16 text-trust-blue mx-auto animate-bounce" />
                      <p className="text-muted-foreground mt-2 font-medium">Live GPS Tracking Active</p>
                      <p className="text-sm text-muted-foreground">Nairobi • Ngara Route</p>
                    </div>
                    
                    {/* Animated Bus Icon */}
                    <div className="absolute bottom-8 left-0 right-0">
                      <div className="animate-[slideRight_8s_ease-in-out_infinite]">
                        <Bus className="h-8 w-8 text-orange" />
                      </div>
                    </div>
                  </div>

                  {/* Feature Cards */}
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {data.features.map((feature, index) => (
                        <div 
                          key={index}
                          className="bg-muted rounded-xl p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          <feature.icon className="h-8 w-8 text-trust-blue mx-auto mb-2" />
                          <p className="text-sm font-medium text-foreground">{feature.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{feature.status}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Feature Simulations */}
      <section className="py-16 md:py-24 bg-soft-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Key <span className="text-gradient-mustard">Features</span> in Action
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GPS Tracking */}
            <Card className="border-2 hover:border-trust-blue transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-trust-blue/20 to-trust-blue/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-trust-blue rounded-full animate-ping" />
                </div>
                <Navigation2 className="h-20 w-20 text-trust-blue group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Real-Time GPS Tracking</h3>
                <p className="text-muted-foreground">Monitor your child's exact location on the bus with live updates every 10 seconds.</p>
              </CardContent>
            </Card>

            {/* Geofencing */}
            <Card className="border-2 hover:border-orange transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-orange/20 to-orange/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-dashed border-orange rounded-full animate-spin-slow" />
                </div>
                <MapPin className="h-20 w-20 text-orange group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Geofencing Alerts</h3>
                <p className="text-muted-foreground">Get notified when the bus enters or exits designated zones like school or home.</p>
              </CardContent>
            </Card>

            {/* Boarding Logs */}
            <Card className="border-2 hover:border-mustard transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-mustard/20 to-mustard/5 flex items-center justify-center relative">
                <div className="absolute top-4 right-4 left-4 space-y-2">
                  <div className="h-3 bg-green-400/50 rounded animate-pulse" />
                  <div className="h-3 bg-green-400/30 rounded animate-pulse animation-delay-200" />
                  <div className="h-3 bg-green-400/20 rounded animate-pulse animation-delay-400" />
                </div>
                <UserCheck className="h-20 w-20 text-mustard group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Boarding & Alighting Logs</h3>
                <p className="text-muted-foreground">Automatic check-in and check-out records for complete accountability.</p>
              </CardContent>
            </Card>

            {/* Panic Button */}
            <Card className="border-2 hover:border-destructive transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-destructive/20 to-destructive/5 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-destructive/20 rounded-full animate-pulse" />
                </div>
                <AlertTriangle className="h-20 w-20 text-destructive group-hover:scale-110 transition-transform animate-pulse" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Panic Alert System</h3>
                <p className="text-muted-foreground">Emergency button for immediate response in critical situations.</p>
              </CardContent>
            </Card>

            {/* Driver Rating */}
            <Card className="border-2 hover:border-secondary transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center relative">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className={`h-10 w-10 ${star <= 4 ? 'text-mustard fill-mustard' : 'text-muted'} transition-all delay-${star * 100}`} />
                  ))}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Driver Performance Rating</h3>
                <p className="text-muted-foreground">Rate your experience and help maintain high safety standards.</p>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-2 hover:border-green-500 transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 animate-bounce">
                  <div className="w-6 h-6 bg-orange rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                </div>
                <Bell className="h-20 w-20 text-green-600 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">Instant Notifications</h3>
                <p className="text-muted-foreground">Receive alerts for pickup, drop-off, delays, and route changes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-trust-blue text-secondary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
            Join thousands of Kenyan families who trust TrackMyKid
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="xl"
              onClick={() => window.location.href = 'https://trackmykid-webapp.vercel.app/'}
              className="bg-mustard hover:bg-mustard/90 text-foreground transition-all hover:scale-105 rounded-full"
            >
              Sign Up Now
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="xl"
              className="border-2 border-white text-white hover:bg-white hover:text-trust-blue rounded-full"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ChatbotWidget />
      <Footer />
    </div>
  );
};

export default HowItWorks;
