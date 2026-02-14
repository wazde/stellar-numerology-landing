import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarburstIcon, ConstellationDivider } from "./MysticalIcons";
import { Check, Loader2, Calendar, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const offers = [
  {
    id: "revelation",
    name: "Révélation",
    subtitle: "Découverte de son thème numérologique",
    tagline: "Découvrir, comprendre, mettre en lumière",
    price: 60,
    features: ["PDF 6 pages", "Message vocal personnalisé"],
    popular: false,
    externalLink: "https://buy.stripe.com/3cIcN5dBIdml7756PBenS05",
  },
  {
    id: "acceptation",
    name: "Acceptation",
    subtitle: "Thème numérologique en détail",
    tagline: "Accueillir, transformer, se repositionner",
    price: 110,
    features: ["Séance visio 1h30", "Enregistrement transmis", "Compte rendu PDF"],
    popular: true,
    calLink: "https://cal.eu/elisefanchon-numerologie/offre-acceptation",
  },
  {
    id: "elevation",
    name: "Élévation",
    subtitle: "Pack « Révélation – Acceptation – Élévation » 3 mois",
    tagline: "S'aligner, évoluer, incarner",
    price: 270,
    features: [
      "Accompagnement progressif – 1 séance / mois",
      "Présentiel* ou visio – enregistrement des séances",
      "Comptes rendus PDF",
      "Suivi, messages & vocaux",
      "Objectifs ciblés, accompagnement, planification et suivi",
    ],
    popular: false,
    footnote: "*présentiel, me contacter en amont pour le déplacement",
    calLink: "https://cal.eu/elisefanchon-numerologie/offre-elevation",
  },
];

const OffersSection = () => {
  const [loadingOffer, setLoadingOffer] = useState<string | null>(null);
  const [activeCalEmbed, setActiveCalEmbed] = useState<string | null>(null);
  const [iframeHeight, setIframeHeight] = useState(700);
  const embedRef = useRef<HTMLDivElement>(null);

  const activeOffer = offers.find((o) => o.id === activeCalEmbed);

  const handleOpenCal = useCallback((offerId: string) => {
    setActiveCalEmbed(offerId);
    setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "CAL:resize" && typeof event.data.height === "number") {
        setIframeHeight(Math.max(event.data.height, 700));
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handlePayment = async (offerId: string, externalLink?: string) => {
    if (externalLink) {
      window.open(externalLink, "_blank");
      return;
    }

    setLoadingOffer(offerId);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { offerId },
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
    <section id="offres" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Mes Offres</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-foreground">Choisissez votre </span>
            <span className="text-gradient-gold">Chemin</span>
          </h2>
          <ConstellationDivider className="w-full max-w-md mx-auto text-primary/60 mt-6" />
        </div>

        <div className="flex-col gap-4 lg:gap-6 flex md:flex-row">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`relative flex flex-col flex-1 transition-all duration-500 hover:shadow-[0_0_40px_hsl(45_80%_55%/0.15)] ${
                offer.popular
                  ? "border-primary/50 shadow-[0_0_30px_hsl(45_80%_55%/0.1)]"
                  : "hover:border-primary/30"
              }`}
            >
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-gradient text-primary-foreground text-xs font-semibold px-3 py-0.5 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-2 pt-6">
                <StarburstIcon className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-xl text-gradient-gold mb-1">{offer.name}</CardTitle>
                <p className="text-foreground font-medium text-sm">{offer.subtitle}</p>
                <p className="text-muted-foreground italic mt-1 text-sm">{offer.tagline}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-4 pt-0">
                <div className="text-center mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gradient-gold">
                    {offer.price}€
                  </span>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {offer.footnote && (
                  <p className="text-muted-foreground italic mb-4 text-sm">{offer.footnote}</p>
                )}

                {offer.calLink ? (
                  <Button
                    variant={offer.popular ? "mystical" : "outline"}
                    className="w-full"
                    onClick={() => handleOpenCal(offer.id)}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Réserver un créneau
                  </Button>
                ) : (
                  <Button
                    variant={offer.popular ? "mystical" : "outline"}
                    className="w-full"
                    onClick={() => handlePayment(offer.id, offer.externalLink)}
                    disabled={loadingOffer !== null && !offer.externalLink}
                  >
                    {loadingOffer === offer.id ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Chargement...
                      </>
                    ) : (
                      "Choisir cette offre"
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {activeCalEmbed && activeOffer?.calLink && (
          <div ref={embedRef} className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gradient-gold">
                Réserver – Offre {activeOffer.name}
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveCalEmbed(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="rounded-lg border border-border/50 overflow-hidden bg-card/50">
              <iframe
                src={`${activeOffer.calLink}?embed=true&theme=dark`}
                className="w-full border-0"
                style={{ height: `${iframeHeight}px` }}
                title={`Réserver – Offre ${activeOffer.name}`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OffersSection;
