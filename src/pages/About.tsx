import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Lightbulb, Users } from "lucide-react";
import busFleet from "@/assets/bus-fleet.jpg";
import busFront from "@/assets/bus-front.jpg";
import busDetail from "@/assets/bus-detail.jpg";
import busLineup from "@/assets/bus-lineup.jpg";
import busStreet from "@/assets/bus-street.jpg";
import busSunset from "@/assets/bus-sunset.jpg";
import busSchool from "@/assets/bus-school.jpg";

const About = () => {
  const carouselSlides = [
    { 
      image: busFleet, 
      caption: "Our Commitment to Child Safety", 
      description: "Serving schools and families across Kenya with advanced tracking technology.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busFront, 
      caption: "Innovation in School Transport", 
      description: "Combining GPS technology with intuitive design for complete visibility.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busSchool, 
      caption: "Powered by Jendie Automobiles Ltd.", 
      description: "Leading the way in school transport safety across Africa.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
  ];

  const values = [
    { icon: Shield, title: "Integrity", description: "We operate with honesty and transparency in every interaction." },
    { icon: Lightbulb, title: "Innovation", description: "We continuously improve our technology to serve families better." },
    { icon: Eye, title: "Transparency", description: "Clear communication and visibility at every step of the journey." },
    { icon: Heart, title: "Simplicity", description: "User-friendly design that anyone can navigate with ease." },
    { icon: Target, title: "Reliability", description: "Consistent, dependable service you can count on every day." },
    { icon: Users, title: "Community", description: "Building trust through strong relationships with families and schools." },
  ];

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
                About <span className="text-mustard drop-shadow-lg">TrackMyKid</span>
              </h1>
              <p className="text-base md:text-xl text-white/90 leading-relaxed drop-shadow-md px-2">
                We are on a mission to revolutionize school transport safety through technology, 
                transparency, and unwavering commitment to child welfare.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-2 rounded-2xl">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-foreground">Who We Are</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TrackMyKid, powered by <span className="text-trust-blue font-semibold">Jendie Automobiles Ltd.</span>, 
                    is a cutting-edge school transport tracking platform designed to bring peace of mind to parents, 
                    schools, and transport providers across Africa and beyond.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We combine advanced GPS technology with intuitive design to create a seamless experience that 
                    prioritizes child safety, operational efficiency, and transparent communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-20 bg-soft-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-trust-blue hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-trust-blue/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-trust-blue" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To ensure the safety of every child by providing complete visibility for school transport 
                    operations, becoming the trusted standard for educational institutions worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-mustard hover:shadow-xl transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-mustard/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-mustard" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower schools, parents, and transport providers with real-time visibility, intuitive tools, 
                    and a care-centered culture that eliminates uncertainty and builds lasting trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground">
                  Principles that guide everything we do
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-orange hover:shadow-lg transition-all duration-300 hover-lift rounded-2xl">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-orange" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-foreground">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 md:py-20 bg-soft-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-trust-blue rounded-2xl">
                <CardContent className="p-10 space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-center text-foreground">
                    Our Commitment
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    We are committed to continuous improvement, listening to our users, and 
                    adapting our services to meet the evolving needs of families and educational 
                    institutions across Kenya and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
};

export default About;
