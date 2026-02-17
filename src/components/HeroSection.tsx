import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, StarburstIcon } from "./MysticalIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-[20px]">
      {/* Decorative elements */}
      <MoonIcon className="absolute top-20 left-10 w-16 h-16 text-primary opacity-30 animate-float" />
      <SunIcon className="absolute top-32 right-16 w-20 h-20 text-primary opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <StarburstIcon className="absolute bottom-32 left-20 w-12 h-12 text-primary opacity-25 animate-pulse-glow" />
      <StarburstIcon className="absolute bottom-40 right-24 w-8 h-8 text-primary opacity-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Glow effect behind title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full opacity-20" style={{ background: 'var(--gradient-glow)' }} />
        </div>

        <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Découvrez votre destinée
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight">
          <span className="text-foreground">L'Art Sacré de la</span>
          <br />
          <span className="text-gradient-gold">Numérologie</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Les nombres sont le langage secret de l'univers. Découvrez les mystères 
          cachés dans votre date de naissance et révélez votre chemin de vie.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="mystical" size="lg" className="text-lg px-8 py-6">
            Calculer mon Chemin de Vie
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            En savoir plus
          </Button>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <StarburstIcon className="w-6 h-6 text-primary" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>
    </section>);

};

export default HeroSection;