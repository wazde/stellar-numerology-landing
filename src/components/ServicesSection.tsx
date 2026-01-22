import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoonIcon, SunIcon, EyeIcon, CrystalIcon, HandIcon, ConstellationDivider } from "./MysticalIcons";

const services = [
  {
    icon: SunIcon,
    title: "Chemin de Vie",
    description: "Découvrez le nombre qui guide votre existence et révèle votre mission d'âme sur cette Terre."
  },
  {
    icon: MoonIcon,
    title: "Année Personnelle",
    description: "Comprenez les énergies qui influencent votre année et anticipez les cycles de votre vie."
  },
  {
    icon: EyeIcon,
    title: "Nombre d'Expression",
    description: "Révélez vos talents naturels et la façon dont vous vous présentez au monde."
  },
  {
    icon: CrystalIcon,
    title: "Nombre Intime",
    description: "Explorez les désirs profonds de votre âme et vos motivations secrètes."
  },
  {
    icon: HandIcon,
    title: "Compatibilité",
    description: "Analysez l'harmonie entre deux êtres à travers la sagesse des nombres."
  }
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">
            Nos Services
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            <span className="text-foreground">Explorez les </span>
            <span className="text-gradient-gold">Mystères</span>
          </h2>
          <ConstellationDivider className="w-full max-w-md mx-auto text-primary/60 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(45_80%_55%/0.1)]"
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 relative">
                  <service.icon className="w-16 h-16 text-primary transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'var(--gradient-glow)' }} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
