import elisePortrait from "@/assets/elise-portrait.jpg";
import { ConstellationDivider } from "./MysticalIcons";

const AboutSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            À Propos
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-foreground">Qui est </span>
            <span className="text-gradient-gold">Élise Fanchon</span>
          </h2>
          <ConstellationDivider className="w-full max-w-md mx-auto text-primary/60 mt-6" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_hsl(45_80%_55%/0.15)]">
              <img
                src={elisePortrait}
                alt="Élise Fanchon – Numérologue"
                className="w-[150px] h-[150px] object-cover" />

            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              Passionnée par la numérologie et les sciences ésotériques, Élise Fanchon accompagne celles et ceux qui souhaitent mieux se connaître et révéler leur plein potentiel grâce à la puissance des nombres.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Son approche allie intuition, bienveillance et rigueur pour offrir des consultations personnalisées qui éclairent votre chemin de vie.
            </p>
            <p className="text-muted-foreground text-sm italic">
              « Les nombres ne mentent jamais – ils racontent votre histoire. »
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;