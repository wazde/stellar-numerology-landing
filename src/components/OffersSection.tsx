import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarburstIcon, ConstellationDivider } from "./MysticalIcons";
import { Check, Loader2, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const offers = [
{
  id: "revelation",
  name: "Révélation",
  subtitle: "Découverte de son thème numérologique",
  tagline: "Découvrir, comprendre, mettre en lumière",
  price: 45,
  features: [
  "PDF 6 pages",
  "Message vocal personnalisé"],

  popular: false,
  externalLink: "https://buy.stripe.com/test_28EcN5apw5TT2QP6PBenS01"
},
{
  id: "acceptation",
  name: "Acceptation",
  subtitle: "Thème numérologique en détail",
  tagline: "Accueillir, transformer, se repositionner",
  price: 120,
  features: [
  "Séance visio 1h30",
  "Enregistrement transmis",
  "Compte rendu PDF"],

  popular: true,
  calLink: "https://cal.eu/elisefanchon-numerologie/offre-acceptation"
},
{
  id: "elevation",
  name: "Élévation",
  subtitle: "Pack « Révélation – Acceptation – Élévation » 3 mois",
  tagline: "S'aligner, évoluer, incarner",
  price: 330,
  features: [
  "Accompagnement progressif – 1 séance / mois",
  "Présentiel* ou visio – enregistrement des séances",
  "Comptes rendus PDF",
  "Suivi, messages & vocaux",
  "Objectifs ciblés, accompagnement, planification et suivi"],

  popular: false,
  footnote: "*présentiel, me contacter en amont pour le déplacement",
  calLink: "https://cal.eu/elisefanchon-numerologie/offre-elevation"
}];


const OffersSection = () => {
  const [loadingOffer, setLoadingOffer] = useState<string | null>(null);
  const [expandedCal, setExpandedCal] = useState<string | null>(null);

  const handlePayment = async (offerId: string, externalLink?: string) => {
    if (externalLink) {
      window.open(externalLink, "_blank");
      return;
    }

    setLoadingOffer(offerId);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { offerId }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoadingOffer(null);
    }
  };

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

        <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
          {offers.map((offer, index) =>
          <Card
            key={index}
            className={`relative flex flex-col flex-1 transition-all duration-500 hover:shadow-[0_0_40px_hsl(45_80%_55%/0.15)] ${
            offer.popular ?
            'border-primary/50 shadow-[0_0_30px_hsl(45_80%_55%/0.1)]' :
            'hover:border-primary/30'}`
            }>

              {offer.popular &&
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-gradient text-primary-foreground text-xs font-semibold px-3 py-0.5 rounded-full">
                    Populaire
                  </span>
                </div>
            }

              <CardHeader className="text-center pb-2 pt-6">
                <StarburstIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-xl text-gradient-gold mb-1">
                  {offer.name}
                </CardTitle>
                <p className="text-foreground text-xs font-medium">
                  {offer.subtitle}
                </p>
                <p className="text-muted-foreground text-xs italic mt-1">
                  {offer.tagline}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-4 pt-0">
                <div className="text-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gradient-gold">
                    {offer.price}€
                  </span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {offer.features.map((feature, idx) =>
                <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                )}
                </ul>

                {offer.footnote &&
              <p className="text-muted-foreground text-xs italic mb-4">
                    {offer.footnote}
                  </p>
              }

                {offer.calLink ?
              <>
                    <Button
                  variant={offer.popular ? "mystical" : "outline"}
                  className="w-full"
                  onClick={() => setExpandedCal(expandedCal === offer.id ? null : offer.id)}>

                      <Calendar className="mr-2 h-4 w-4" />
                      {expandedCal === offer.id ? "Masquer le calendrier" : "Réserver un créneau"}
                    </Button>
                    {expandedCal === offer.id &&
                <div className="mt-4 rounded-lg overflow-hidden border border-border">
                        <iframe
                    src={offer.calLink}
                    className="w-full border-0"
                    style={{ height: "600px" }}
                    title={`Réserver – ${offer.name}`} />

                      </div>
                }
                  </> :

              <Button
                variant={offer.popular ? "mystical" : "outline"}
                className="w-full"
                onClick={() => handlePayment(offer.id, offer.externalLink)}
                disabled={loadingOffer !== null && !offer.externalLink}>

                    {loadingOffer === offer.id ?
                <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Chargement...
                      </> :

                "Choisir cette offre"
                }
                  </Button>
              }
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export default OffersSection;