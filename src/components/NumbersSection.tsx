import { StarburstIcon } from "./MysticalIcons";

const numbers = [
  { num: "1", meaning: "Le Leader", trait: "Indépendance & Création", description: "Volonté, confiance en soi, chemin de vie, ambition, prise d'initiative et nouveau départ." },
  { num: "2", meaning: "Le Diplomate", trait: "Harmonie & Sensibilité", description: "Intuition, coopération, empathie, équilibre émotionnel, partenariat et dualité." },
  { num: "3", meaning: "L'Artiste", trait: "Expression & Joie", description: "Communication, créativité, optimisme, expression de soi, talent artistique et inspiration." },
  { num: "4", meaning: "Le Bâtisseur", trait: "Stabilité & Travail", description: "Rigueur, organisation, persévérance, construction solide, ancrage et discipline." },
  { num: "5", meaning: "L'Aventurier", trait: "Liberté & Changement", description: "Mouvement, adaptation, curiosité, transformation personnelle, voyage et ouverture d'esprit." },
  { num: "6", meaning: "Le Protecteur", trait: "Amour & Responsabilité", description: "Famille, harmonie du foyer, guérison, engagement, générosité et sens du devoir." },
  { num: "7", meaning: "Le Sage", trait: "Spiritualité & Analyse", description: "Introspection, quête de sens, développement spirituel, méditation, connaissance intérieure et éveil." },
  { num: "8", meaning: "L'Ambitieux", trait: "Pouvoir & Abondance", description: "Réussite matérielle, prospérité, karma, leadership, énergie et manifestation." },
  { num: "9", meaning: "L'Humaniste", trait: "Compassion & Sagesse", description: "Altruisme, mission de vie, achèvement, élévation spirituelle, cycle universel et don de soi." },
];

const NumbersSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" 
           style={{ background: 'radial-gradient(circle, hsl(45 80% 55%) 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            Les Vibrations
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-foreground">Les </span>
            <span className="text-gradient-gold">9 Nombres</span>
            <span className="text-foreground"> Sacrés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque nombre porte une vibration unique qui influence notre personnalité, 
            nos talents et notre destinée.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
          {numbers.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2 transition-transform duration-300 group-hover:scale-110">
                {item.num}
              </span>
              <span className="text-xs text-primary font-medium tracking-wide">
                {item.meaning}
              </span>
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 z-20">
                <p className="text-xs text-foreground font-medium mb-1">{item.trait}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <StarburstIcon className="w-8 h-8 text-primary animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
