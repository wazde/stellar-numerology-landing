import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarburstIcon, ConstellationDivider } from "./MysticalIcons";
import { Check } from "lucide-react";

const offers = [
  {
    name: "Révélation",
    subtitle: "Découverte de son thème numérologique",
    tagline: "Découvrir, comprendre, mettre en lumière",
    price: 45,
    features: [
      "PDF 6 pages",
      "Message vocal personnalisé"
    ],
    popular: false
  },
  {
    name: "Acceptation",
    subtitle: "Thème numérologique en détail",
    tagline: "Accueillir, transformer, se repositionner",
    price: 120,
    features: [
      "Séance visio 1h30",
      "Enregistrement transmis",
      "Compte rendu PDF"
    ],
    popular: true
  },
  {
    name: "Élévation",
    subtitle: "Pack « Révélation – Acceptation – Élévation » 3 mois",
    tagline: "S'aligner, évoluer, incarner",
    price: 330,
    features: [
      "Accompagnement progressif – 1 séance / mois",
      "Présentiel* ou visio – enregistrement des séances",
      "Comptes rendus PDF",
      "Suivi, messages & vocaux",
      "Objectifs ciblés, accompagnement, planification et suivi"
    ],
    popular: false,
    footnote: "*présentiel, me contacter en amont pour le déplacement"
  }
];

const OffersSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            Mes Offres
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-foreground">Choisissez votre </span>
            <span className="text-gradient-gold">Chemin</span>
          </h2>
          <ConstellationDivider className="w-full max-w-md mx-auto text-primary/60 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col transition-all duration-500 hover:shadow-[0_0_40px_hsl(45_80%_55%/0.15)] ${
                offer.popular 
                  ? 'border-primary/50 shadow-[0_0_30px_hsl(45_80%_55%/0.1)]' 
                  : 'hover:border-primary/30'
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-gradient text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <StarburstIcon className="w-10 h-10 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-gradient-gold mb-1">
                  {offer.name}
                </CardTitle>
                <p className="text-foreground text-sm font-medium">
                  {offer.subtitle}
                </p>
                <p className="text-muted-foreground text-xs italic mt-2">
                  {offer.tagline}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-gradient-gold">
                    {offer.price}€
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {offer.footnote && (
                  <p className="text-muted-foreground text-xs italic mb-4">
                    {offer.footnote}
                  </p>
                )}

                <Button 
                  variant={offer.popular ? "mystical" : "outline"} 
                  className="w-full"
                >
                  Choisir cette offre
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
