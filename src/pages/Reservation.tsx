import { useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const calLinks: Record<string, { url: string; title: string }> = {
  acceptation: {
    url: "https://cal.eu/elisefanchon-numerologie/offre-acceptation",
    title: "Réserver – Offre Acceptation",
  },
  elevation: {
    url: "https://cal.eu/elisefanchon-numerologie/offre-elevation",
    title: "Réserver – Offre Élévation",
  },
};

const Reservation = () => {
  const [searchParams] = useSearchParams();
  const offre = searchParams.get("offre") || "acceptation";
  const config = calLinks[offre] || calLinks.acceptation;

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/#offres">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux offres
          </Button>
        </Link>

        <h1 className="text-3xl font-semibold text-center mb-8">
          <span className="text-gradient-gold">{config.title}</span>
        </h1>

        <div className="rounded-lg border border-border/50 overflow-hidden bg-card/50 min-h-[600px]">
          <iframe
            src={`${config.url}?embed=true&theme=dark`}
            className="w-full min-h-[600px] border-0"
            title={config.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
