import { Link } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Button>
        </Link>

        <h1 className="text-3xl font-semibold mb-8">
          <span className="text-gradient-gold">Mentions Légales</span>
        </h1>

        <div className="space-y-8 text-foreground/90 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">1. Éditeur du site</h2>
            <p>
              Le présent site est édité par :<br />
              <strong>Élise Fanchon</strong><br />
              Activité : Numérologie – conseil et accompagnement personnel<br />
              Statut : Micro-entrepreneur<br />
              Email : contact@elisefanchon-numerologie.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">2. Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              <strong>Lovable</strong><br />
              Site web : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">lovable.dev</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) sont protégés par le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans l'accord préalable écrit de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">4. Données personnelles</h2>
            <p>
              Les informations personnelles collectées via ce site (formulaire de contact, réservation de séance) sont destinées exclusivement à Élise Fanchon dans le cadre de son activité de numérologie. Elles ne sont en aucun cas cédées à des tiers.
            </p>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données personnelles. Pour exercer ces droits, contactez : contact@elisefanchon-numerologie.fr
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">5. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies à des fins de mesure d'audience et de bon fonctionnement. Vous pouvez configurer votre navigateur pour refuser les cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">6. Responsabilité</h2>
            <p>
              La numérologie est un outil de développement personnel et ne se substitue en aucun cas à un avis médical, psychologique ou juridique. L'éditeur ne saurait être tenu responsable de l'usage fait des informations délivrées lors des consultations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">7. Paiement</h2>
            <p>
              Les paiements en ligne sont sécurisés via la plateforme <strong>Stripe</strong>. Aucune donnée bancaire n'est stockée sur ce site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
