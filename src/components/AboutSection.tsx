import elisePortrait from "@/assets/elise-portrait.jpg";
import { ConstellationDivider } from "./MysticalIcons";

const AboutSection = () => {
  return (
    <section id="a-propos" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            À Propos
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-foreground">Qui suis-je… </span>
            <span className="text-gradient-gold">vraiment ?</span>
          </h2>
          <ConstellationDivider className="w-full max-w-md mx-auto text-primary/60 mt-6" />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="shrink-0 md:mt-2">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_hsl(45_80%_55%/0.15)]">
              <img
                src={elisePortrait}
                alt="Élise Fanchon – Numérologue"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="text-foreground/90 leading-relaxed font-medium text-lg">
              Je m'appelle Élise.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Pendant longtemps, j'ai cherché à comprendre. À faire mieux, à être mieux, à rentrer dans des cases qui ne me correspondaient pas toujours.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Et puis j'ai commencé à faire des liens. À comprendre que certaines choses n'étaient pas à corriger, mais simplement à reconnaître.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              La numérologie a été un déclic. Un outil qui a agi comme une boussole, qui a éclairé mon fonctionnement et m'a permis de m'accepter autrement.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              J'ai compris quelque chose d'essentiel : cette capacité à ressentir, à percevoir… à comprendre les autres, parfois même avant qu'ils ne mettent des mots sur ce qu'ils vivent. Une part de moi qui a toujours été là.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              La numérologie n'a pas créé ça. Elle l'a mise en lumière. Devenir numérologue, c'était choisir de l'incarner pleinement.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Aujourd'hui, sans jugement et avec justesse, j'accompagne celles et ceux qui ressentent ce besoin de se retrouver, de comprendre ce qu'ils vivent… et d'avancer avec plus de clarté et de douceur.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Avec profondeur, et toujours avec le sourire.
            </p>
            <p className="text-muted-foreground text-sm italic mt-4">
              « Ce que tu ressens a du sens. Et parfois, il suffit juste de l'éclairer… pour retrouver ta direction. »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
