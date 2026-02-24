import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, StarburstIcon } from "./MysticalIcons";

const CTASection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative elements */}
        <MoonIcon className="absolute -top-8 -left-8 w-24 h-24 text-primary opacity-20" />
        <SunIcon className="absolute -bottom-8 -right-8 w-20 h-20 text-primary opacity-15" />

        <div className="relative border border-primary/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient-glow)' }} />
          
          <div className="relative z-10">
            <StarburstIcon className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="text-foreground">Tout commence par une </span>
              <span className="text-gradient-gold">première prise de conscience</span>
            </h2>
            
            <p className="text-muted-foreground max-w-xl mx-auto mb-3 leading-relaxed">
              Tu sens que c'est le moment ?
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              De te comprendre autrement. De faire des liens, et d'avancer avec plus de justesse.
            </p>
            
            <a href="#offres">
              <Button variant="mystical" size="lg" className="text-lg px-10 py-6">
                Je découvre mon thème
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
