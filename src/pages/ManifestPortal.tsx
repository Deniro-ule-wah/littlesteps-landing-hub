import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

const ManifestPortal = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-soft-bg to-primary/5">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Welcome Section */}
          <Card className="border-2 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-heading text-foreground">
                    Manifest Portal
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Welcome, {user?.email}
                  </p>
                </div>
                <Button onClick={handleLogout} variant="outline">
                  Logout
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Dashboard Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span className="text-2xl">🚌</span>
                  My Children
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View and manage your children's profiles and tracking information.
                </p>
                <Button variant="trustButton" className="w-full">
                  View Children
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  Live Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Track school buses in real-time on the interactive map.
                </p>
                <Button variant="trustButton" className="w-full">
                  Open Map
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Trip History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Review past trips and journey logs for your children.
                </p>
                <Button variant="trustButton" className="w-full">
                  View History
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span className="text-2xl">🔔</span>
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Manage alerts for pickup, drop-off, and important updates.
                </p>
                <Button variant="trustButton" className="w-full">
                  Settings
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span className="text-2xl">👤</span>
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Update your account information and preferences.
                </p>
                <Button variant="trustButton" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our support team for assistance.
                </p>
                <Button variant="trustButton" className="w-full">
                  Get Help
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info Card */}
          <Card className="border-2 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">
                Welcome to Your Manifest Portal
              </h3>
              <p className="text-sm text-muted-foreground">
                This is your central hub for managing all aspects of your children's school transport. 
                Track buses in real-time, view trip history, and stay connected with instant notifications. 
                Your child's safety is our priority.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManifestPortal;
