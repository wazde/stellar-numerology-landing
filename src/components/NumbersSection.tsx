import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
{ num: "22", meaning: "Le Bâtisseur Visionnaire", description: "Une grande capacité à concrétiser des projets ambitieux. Tu avances quand tu relies vision et action." }];


function computeLifePath(dateStr: string): {result: number;steps: string;} | null {
  const match = dateStr.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;

  const digits = dateStr.replace(/\D/g, "").split("").map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  const stepsArr = [`${digits.join("+")} = ${sum}`];

  while (sum > 9 && sum !== 11 && sum !== 22) {
    const d = sum.toString().split("").map(Number);
    sum = d.reduce((a, b) => a + b, 0);
    stepsArr.push(`${d.join("+")} = ${sum}`);
  }

  return { result: sum, steps: stepsArr.join(" → ") };
}

const NumbersSection = () => {
  const [birthDate, setBirthDate] = useState("");
  const [lifePathResult, setLifePathResult] = useState<{result: number;steps: string;} | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setLifePathResult(null);

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
      setError("Format attendu : JJ/MM/AAAA");
      return;
    }

    const [dd, mm, yyyy] = birthDate.split("/").map(Number);
    if (mm < 1 || mm > 12 || dd < 1 || dd > 31 || yyyy < 1900 || yyyy > 2100) {
      setError("Date invalide");
      return;
    }

    const res = computeLifePath(birthDate);
    if (res) setLifePathResult(res);
  };

  const matchedNumber = lifePathResult ?
  numbers.find((n) => n.num === String(lifePathResult.result)) :
  null;

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
            <span className="text-foreground">​Les 
 </span>
            <span className="text-gradient-gold">​</span>
            <span className="text-foreground"> Sacrés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Chaque nombre porte une vibration unique qui influence notre personnalité, 
            nos talents et notre destin.
          </p>

          {/* Calculator */}
          <div className="max-w-md mx-auto bg-card/50 border border-border/50 rounded-lg p-6 mb-8">
            <h3 className="text-foreground font-semibold mb-2">Et si tu découvrais déjà une première clé sur toi ?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Entre ta date de naissance pour calculer ton chemin de vie.
            </p>

            <div className="flex gap-3 mb-3">
              <Input type="text"
              placeholder="JJ/MM/AAAA"
              value={birthDate}
              maxLength={10}
              onChange={(e) => {
                let v = e.target.value.replace(/[^\d/]/g, "");
                // Auto-insert slashes
                if (v.length === 2 && birthDate.length === 1) v += "/";
                if (v.length === 5 && birthDate.length === 4) v += "/";
                if (v.length <= 10) setBirthDate(v);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
              className="text-center text-lg tracking-wider" />

              <Button variant="mystical" onClick={handleCalculate}>
                Calculer
              </Button>
            </div>

            {error &&
            <p className="text-destructive text-sm">{error}</p>
            }

            {lifePathResult &&
            <div className="mt-5 pt-5 border-t border-border/50 animate-fade-in">
                <p className="text-muted-foreground text-xs mb-2">{lifePathResult.steps}</p>
                <p className="text-5xl font-bold text-gradient-gold mb-2">{lifePathResult.result}</p>
                {matchedNumber &&
              <>
                    <p className="text-primary font-semibold text-lg">{matchedNumber.meaning}</p>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{matchedNumber.description}</p>
                  </>
              }
              </div>
            }

            <p className="text-muted-foreground text-xs italic mt-4">
              Les maîtres nombres 11 et 22 ne se réduisent pas.
            </p>
          </div>

          <p className="text-muted-foreground text-sm italic">
            Et maintenant… regarde à quel nombre tu corresponds. Tu vas déjà reconnaître certaines choses.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-11 gap-4">
          {numbers.map((item, index) =>
          <div
            key={index}
            className={`group relative flex flex-col items-center p-4 rounded-lg border backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer ${
            matchedNumber?.num === item.num ?
            "border-primary/60 bg-card shadow-[0_0_20px_hsl(45_80%_55%/0.15)]" :
            "border-border/50 bg-card/50"}`
            }>

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
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <StarburstIcon className="w-8 h-8 text-primary animate-pulse-glow" />
        </div>
      </div>
    </section>);

};

export default NumbersSection;