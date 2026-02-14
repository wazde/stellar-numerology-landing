import { Link } from "react-router-dom";
import { ConstellationDivider, MoonIcon } from "./MysticalIcons";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <ConstellationDivider className="w-full max-w-sm mx-auto text-primary/40 mb-8" />
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <MoonIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold text-gradient-gold tracking-wide">
              Numérologie
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center max-w-md">
            Révélez les secrets cachés dans les nombres et découvrez 
            le chemin lumineux de votre destinée.
          </p>
          
          <div className="flex gap-8 mt-4 text-sm text-muted-foreground">
            <a href="#a-propos" className="hover:text-primary transition-colors">À propos</a>
            <a href="#offres" className="hover:text-primary transition-colors">Services</a>
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
          </div>
          
          <p className="text-muted-foreground/50 text-xs mt-6">
            © 2025 Numérologie • Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
