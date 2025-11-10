import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lock, Scale, Users, Shield, Baby } from "lucide-react";

const Philosophy = () => {
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-soft-bg to-secondary/5">
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

        {/* Vision & Mission Recap */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-2 border-secondary">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-secondary">Vision</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To ensure the safety of every child by providing complete visibility for school transport, 
                    becoming the most trusted digital companion for educational institutions globally.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-heading font-bold text-secondary">Mission</h2>
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
              <Card className="border-2 border-primary shadow-xl bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-10 space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-center text-foreground">Our Creed</h2>
                  <div className="text-center space-y-4">
                    <p className="text-2xl font-heading font-semibold text-secondary italic">
                      "We move with purpose,<br />
                      protect with pride,<br />
                      serve with heart."
                    </p>
                  </div>
                  <div className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-lg">
                      Every journey we track represents a promise to a parent, a commitment to a child, 
                      and a responsibility to our community.
                    </p>
                    <p className="text-lg">
                      We believe that technology should serve humanity with empathy, that safety should never 
                      be compromised, and that trust is earned through consistent, transparent action.
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
            <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Ethical Guidelines
              </h2>
              <p className="text-lg text-muted-foreground">
                The moral compass that guides our operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ethicalGuidelines.map((guideline, index) => (
                <Card key={index} className="border-2 hover:border-secondary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <guideline.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {guideline.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {guideline.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Aspects */}
        <section className="py-16 md:py-20 bg-soft-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground">
                How we work together to achieve our mission
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {culturalAspects.map((aspect, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-secondary">
                      {aspect.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {aspect.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stakeholder Engagement */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-secondary to-trust-blue text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
                Stakeholder Engagement
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card text-card-foreground border-0">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-secondary">Parents</h3>
                    <p className="text-sm text-muted-foreground">
                      We prioritize parent feedback and provide complete visibility into their child's journey 
                      for ultimate peace of mind.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground border-0">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-secondary">Schools</h3>
                    <p className="text-sm text-muted-foreground">
                      We support educational institutions with transparent communication tools and efficient 
                      transport management systems.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card text-card-foreground border-0">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-secondary">Transport Providers</h3>
                    <p className="text-sm text-muted-foreground">
                      We empower drivers and coordinators with real-time tracking and communication tools for 
                      seamless operations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Philosophy;
