import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Lightbulb, Users } from "lucide-react";

const About = () => {
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
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-soft-bg to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                About <span className="text-gradient-mustard">TrackMyKid</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-3xl font-heading font-bold text-foreground">Who We Are</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    TrackMyKid, powered by <span className="text-secondary font-semibold">Jendie Automobiles Ltd.</span>, 
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
              <Card className="border-2 border-secondary hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To ensure the safety of every child by providing complete visibility for school transport 
                    operations, becoming the trusted standard for educational institutions worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted digital companion in school transport globally, empowering schools, 
                    parents, and transport providers with real-time visibility, intuitive tools, and a care-centered culture.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Purpose Statement */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-secondary to-trust-blue text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Purpose</h2>
              <p className="text-xl leading-relaxed">
                We exist to empower schools, parents, and transport providers with real-time visibility, 
                intuitive tools, and a care-centered culture. We strive to eliminate uncertainty, build trust, 
                and make every school journey as safe as a parent's embrace.
              </p>
              <div className="pt-6">
                <p className="text-lg font-medium italic">
                  "Every child deserves to arrive safely. Every parent deserves peace of mind."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
