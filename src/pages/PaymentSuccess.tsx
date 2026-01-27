import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { StarburstIcon } from "@/components/MysticalIcons";
import StarryBackground from "@/components/StarryBackground";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      <StarryBackground />
      
      <div className="relative z-10 max-w-md mx-auto px-4 text-center">
        <div className="border border-primary/30 rounded-2xl p-8 md:p-12 bg-card/50 backdrop-blur-sm">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-primary" />
          </div>
          
          <StarburstIcon className="w-10 h-10 text-primary mx-auto mb-4" />
          
          <h1 className="text-3xl font-semibold mb-4">
            <span className="text-gradient-gold">Merci</span>
            <span className="text-foreground"> pour votre confiance !</span>
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Votre paiement a été effectué avec succès. Vous recevrez bientôt un email 
            avec les détails de votre consultation numérologique.
          </p>
          
          <Button asChild variant="mystical">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
