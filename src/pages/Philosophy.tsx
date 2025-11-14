import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lock, Scale, Users, Shield, Baby } from "lucide-react";
import busDetail from "@/assets/bus-detail.jpg";
import busLineup from "@/assets/bus-lineup.jpg";
import busStreet from "@/assets/bus-street.jpg";
import busSunset from "@/assets/bus-sunset.jpg";

const Philosophy = () => {
  const carouselSlides = [
    { 
      image: busDetail, 
      caption: "We Move with PURPOSE", 
      description: "Every feature we build prioritizes child safety and parental peace of mind.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busLineup, 
      caption: "We Protect with PRIDE", 
      description: "Bank-grade security protecting your family's data and your child's journey.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busStreet, 
      caption: "We Serve with HEART", 
      description: "Understanding the emotional weight of child safety for every parent.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
    { 
      image: busSunset, 
      caption: "A Philosophy in Action", 
      description: "Trust earned one journey at a time across Kenya's communities.",
      location: "Nairobi • Ngara • Equity Plaza"
    },
  ];

  const ethicalGuidelines = [
    { icon: Heart, title: "Trustworthiness", description: "We honor commitments and build lasting relationships with integrity." },
    { icon: Lock, title: "Data Privacy", description: "Your family's information is protected with bank-grade security." },
    { icon: Scale, title: "Legal Compliance", description: "We operate within all regulatory frameworks and industry standards." },
    { icon: Users, title: "Empathy", description: "We understand the emotional weight of child safety for every parent." },
    { icon: Shield, title: "Integrity", description: "Honest communication and transparent operations in all we do." },
    { icon: Baby, title: "Child-Centered", description: "Every decision prioritizes the safety and well-being of children." },
  ];

  const culturalAspects = [
    { title: "Time-Conscious", description: "We value punctuality and respect everyone's schedule." },
    { title: "Collaborative", description: "Teamwork and open communication drive our success." },
    { title: "Feedback-Driven", description: "We actively listen and continuously improve based on user input." },
    { title: "Celebrating Progress", description: "We recognize achievements and learn from challenges together." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-soft-bg to-trust-blue/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Our <span className="text-gradient-blue">Philosophy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The values, principles, and beliefs that guide our mission to protect every child
              </p>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-16 md:py-20 bg-soft-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ImageCarousel slides={carouselSlides} />
            </div>
          </div>
        </section>

        {/* Vision & Mission Recap */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-2 border-trust-blue rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-trust-blue">Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To ensure the safety of every child by providing complete visibility for school transport, 
                    becoming the most trusted digital companion for educational institutions globally.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-mustard rounded-2xl">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-mustard">Mission</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower schools, parents, and transport providers with real-time visibility, intuitive tools, 
                    and a care-centered culture that eliminates uncertainty and builds lasting trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Creed */}
        <section className="py-16 md:py-20 bg-soft-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-orange shadow-xl bg-gradient-to-br from-card to-orange/5 rounded-2xl">
                <CardContent className="p-10 space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-center text-foreground">Our Creed</h2>
                  <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                    <p className="text-center font-semibold text-xl text-foreground">
                      We Move with <span className="text-trust-blue">PURPOSE</span>. 
                      We Protect with <span className="text-orange">PRIDE</span>. 
                      We Serve with <span className="text-mustard">HEART</span>.
                    </p>
                    <p>
                      <strong className="text-foreground">We believe</strong> every child deserves a safe journey. 
                      Every parent deserves peace of mind. Every school deserves a transparent, efficient transport solution.
                    </p>
                    <p>
                      <strong className="text-foreground">We promise</strong> to be the digital guardian for children on the move—
                      providing visibility without intrusion, technology without complexity, and safety without compromise.
                    </p>
                    <p>
                      <strong className="text-foreground">We commit</strong> to listening, learning, and evolving alongside the 
                      communities we serve. Because trust isn't given—it's earned, one journey at a time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ethical Guidelines */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Ethical Guidelines
                </h2>
                <p className="text-lg text-muted-foreground">
                  The moral compass guiding our daily operations
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {ethicalGuidelines.map((guideline, index) => {
                  const Icon = guideline.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-orange hover:shadow-lg transition-all duration-300 hover-lift rounded-2xl">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-orange" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-foreground">{guideline.title}</h3>
                        <p className="text-muted-foreground">{guideline.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Aspects */}
        <section className="py-16 md:py-20 bg-soft-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Our Culture
                </h2>
                <p className="text-lg text-muted-foreground">
                  How we work together to achieve our mission
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {culturalAspects.map((aspect, index) => (
                  <Card key={index} className="border-2 hover:border-trust-blue hover:shadow-lg transition-all duration-300 rounded-2xl">
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-lg font-heading font-bold text-foreground">{aspect.title}</h3>
                      <p className="text-muted-foreground">{aspect.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                A Philosophy in Action
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our philosophy isn't just words on a page—it's the foundation of every feature we build, 
                every conversation we have, and every decision we make. It's what makes TrackMyKid more than 
                a tracking platform. It's what makes us a trusted partner in child safety.
              </p>
            </div>
          </div>
        </section>
      </main>

      <ChatbotWidget />
      <Footer />
    </div>
  );
};

export default Philosophy;
