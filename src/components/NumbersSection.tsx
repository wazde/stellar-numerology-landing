import { StarburstIcon } from "./MysticalIcons";

const numbers = [
  { num: "1", meaning: "Le Leader", description: "Tu es dans l'initiative, l'action, l'indépendance. Tu avances quand tu crées ton propre chemin." },
  { num: "2", meaning: "Le Diplomate", description: "Tu es dans le lien, l'écoute, la sensibilité. Tu avances quand tu es en harmonie avec les autres." },
  { num: "3", meaning: "L'Artiste", description: "Tu es dans l'expression, la créativité, la joie. Tu avances quand tu oses être pleinement toi." },
  { num: "4", meaning: "Le Bâtisseur", description: "Tu es dans la structure, la rigueur, l'ancrage. Tu avances quand tu construis du solide." },
  { num: "5", meaning: "L'Aventurier", description: "Tu es dans le mouvement, le changement, la liberté. Tu avances quand tu explores et expérimentes." },
  { num: "6", meaning: "Le Protecteur", description: "Tu es dans le cœur, la responsabilité, l'engagement. Tu avances quand tu prends soin des autres (… sans t'oublier)." },
  { num: "7", meaning: "Le Sage", description: "Tu es dans l'introspection, l'analyse, la quête de sens. Tu avances quand tu comprends en profondeur." },
  { num: "8", meaning: "L'Ambitieux", description: "Tu es dans la puissance, la réussite, la matière. Tu avances quand tu assumes ta valeur et ton impact." },
  { num: "9", meaning: "L'Humaniste", description: "Tu es dans le don, l'empathie, la vision globale. Tu avances quand tu mets du sens au service des autres." },
  { num: "11", meaning: "L'Intuitif", description: "Hyper sensible, inspiré, connecté. Tu avances quand tu fais confiance à ce que tu ressens." },
  { num: "22", meaning: "Le Bâtisseur Visionnaire", description: "Une grande capacité à concrétiser des projets ambitieux. Tu avances quand tu relies vision et action." },
];

const NumbersSection = () => {
  return (
    <section id="nombres" className="relative py-24 px-4 overflow-hidden">
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
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Chaque nombre porte une vibration unique qui influence notre personnalité, 
            nos talents et notre destin.
          </p>

          <div className="max-w-xl mx-auto text-left bg-card/50 border border-border/50 rounded-lg p-6 mb-8">
            <h3 className="text-foreground font-semibold mb-3 text-center">Et si tu découvrais déjà une première clé sur toi ?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Ton chemin de vie est l'un des nombres les plus importants en numérologie. Il donne une indication précieuse sur ta manière d'avancer, tes élans naturels… et ce qui te met en mouvement.
            </p>
            <p className="text-foreground/90 text-sm font-medium mb-2">Comment le calculer ?</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Additionne tous les chiffres de ta date de naissance, puis réduis jusqu'à obtenir un nombre entre 1 et 9.
            </p>
            <p className="text-muted-foreground text-xs italic mb-2">
              Exception : les maîtres nombres 11 et 22 ne se réduisent pas.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><span className="text-foreground/80">Exemple :</span> 28/04/2014 → 2+8+0+4+2+0+1+4 = 21 → 2+1 = <span className="text-primary font-semibold">3</span></p>
              <p><span className="text-foreground/80">Maître nombre :</span> 24/02/1956 → 2+4+0+2+1+9+5+6 = 29 → 2+9 = <span className="text-primary font-semibold">11</span></p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm italic">
            Et maintenant… regarde à quel nombre tu corresponds. Tu vas déjà reconnaître certaines choses.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-4">
          {numbers.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col items-center p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2 transition-transform duration-300 group-hover:scale-110">
                {item.num}
              </span>
              <span className="text-xs text-primary font-medium tracking-wide text-center">
                {item.meaning}
              </span>
              
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-52 z-20">
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
