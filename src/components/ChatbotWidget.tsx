import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, BusFront, CreditCard, AlertCircle, Mail } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    { icon: BusFront, label: "Track child", action: "track" },
    { icon: CreditCard, label: "Renew subscription", action: "renew" },
    { icon: AlertCircle, label: "Report an issue", action: "report" },
    { icon: Mail, label: "Contact support", action: "contact" },
  ];

  const handleOptionClick = (action: string) => {
    switch (action) {
      case "track":
        window.location.href = "https://trackmykid-webapp.vercel.app/";
        break;
      case "renew":
        window.location.href = "https://trackmykid-webapp.vercel.app/";
        break;
      case "report":
        window.location.href = "/contact";
        break;
      case "contact":
        window.location.href = "/contact";
        break;
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-orange hover:bg-orange/90 shadow-2xl z-50 group transition-all duration-300 hover:scale-110"
          size="icon"
          aria-label="Open chat"
        >
          <MessageCircle className="h-7 w-7 text-white" />
          <span className="absolute -top-12 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Need Help? Ask TrackMyKid!
          </span>
        </Button>
      )}

      {/* Chatbot Modal */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] shadow-2xl z-50 border-2 border-orange rounded-2xl animate-fade-in">
          <CardHeader className="bg-orange text-white rounded-t-2xl pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                TrackMyKid Help
              </CardTitle>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full h-8 w-8"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="bg-soft-bg rounded-xl p-4 mb-4">
              <p className="text-foreground font-medium">
                Tukwaniriza! 👋 How can we assist you today?
              </p>
            </div>

            <div className="space-y-2">
              {quickOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <Button
                    key={option.action}
                    onClick={() => handleOptionClick(option.action)}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3 px-4 rounded-xl hover:bg-orange/10 hover:border-orange transition-all duration-300"
                  >
                    <Icon className="h-5 w-5 mr-3 text-orange" />
                    <span className="font-medium">{option.label}</span>
                  </Button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Available Monday-Friday, 8AM-6PM EAT
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatbotWidget;
