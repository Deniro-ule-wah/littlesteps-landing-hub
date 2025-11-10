import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-soft-bg to-primary/10 p-4">
      <Card className="w-full max-w-md border-2 shadow-xl">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-heading font-bold text-foreground">TrackMyKid</h1>
            <p className="text-sm text-muted-foreground">Littlesteps in Motion</p>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-heading font-semibold text-center text-foreground">
              Welcome Back
            </h2>
            <p className="text-center text-muted-foreground">
              Authentication system will be integrated here
            </p>
          </div>

          <div className="pt-6">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Powered by Jendie Automobiles Ltd.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
