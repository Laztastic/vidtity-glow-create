import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, CheckCircle, ArrowLeft, Users, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const MerkidentiteitPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="py-6 px-6 border-b border-border">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-accent hover:text-accent-glow transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Palette className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">MERKIDENTITEIT</span>
            <br />
            <span className="text-foreground">DIE IMPACT MAAKT</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creëer een visuele identiteit die jouw merk laat opvallen tussen de massa. 
            Wij ontwerpen gedurfde, memorabele merkidentiteiten die resoneren met de nieuwe generatie.
          </p>
          <div className="mt-10">
            <Button variant="cyber" size="lg" className="mr-4">
              Start Jouw Project
            </Button>
            <Button variant="outline" size="lg">
              Bekijk Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                WAT WIJ <span className="gradient-text">DOEN</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Een sterke merkidentiteit is meer dan een mooi logo. Het is de complete visuele taal 
                die jouw verhaal vertelt en emoties oproept bij je doelgroep. Wij creëren cohesieve 
                visuele systemen die jouw merk leven inblazen.
              </p>
              <div className="space-y-4">
                {[
                  "Logo ontwerp dat onmiddellijk herkenbaar is",
                  "Strategische kleurenpaletten die emoties triggeren", 
                  "Typografie die jouw merkpersoonlijkheid reflecteert",
                  "Uitgebreide merkrichtlijnen voor consistentie",
                  "Toepassing op alle touchpoints"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-card cyber-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Pakket: Complete Merkidentiteit</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Logo ontwerp (3 concepten)</li>
                  <li>• Kleurenpallet & typografie</li>
                  <li>• Merkrichtlijnen document</li>
                  <li>• Visitekaartje ontwerp</li>
                  <li>• Social media templates</li>
                  <li>• Briefhoofd & factuur templates</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-3xl font-black text-accent mb-2">€2.995</div>
                  <div className="text-sm text-muted-foreground">Eenmalige investering</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ONS <span className="gradient-text">PROCES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Een gestructureerde aanpak die zorgt voor resultaten die je verwachtingen overtreffen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategie & Research",
                description: "We duiken diep in jouw merk, doelgroep en concurrenten om de perfecte richting te bepalen.",
                icon: Target
              },
              {
                step: "02", 
                title: "Conceptontwikkeling",
                description: "Creatie van 3 unieke logoconcepten met uitgebreide uitwerking van visuele elementen.",
                icon: Palette
              },
              {
                step: "03",
                title: "Finalisatie & Guidelines",
                description: "Perfectie van het gekozen concept en creatie van complete merkrichtlijnen voor consistentie.",
                icon: CheckCircle
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card hover-lift cyber-border">
                  <div className="text-6xl font-black text-accent/20 mb-4">{item.step}</div>
                  <Icon className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              WAAROM <span className="gradient-text">VIDTIFY</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Gen-Z Expertise",
                description: "Wij begrijpen wat werkt voor de nieuwe generatie. Onze designs spreken hun taal en triggeren hun emoties."
              },
              {
                icon: Zap,
                title: "Snelle Levering",
                description: "Van concept tot finale levering in slechts 2-3 weken. Geen eindeloze revisieronden, wel resultaat."
              },
              {
                icon: Target,
                title: "Strategische Focus",
                description: "Elk ontwerp heeft een doel. Wij zorgen dat jouw merkidentiteit niet alleen mooi is, maar ook werkt."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 text-center bg-gradient-card hover-lift">
                  <Icon className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            KLAAR VOOR EEN <span className="gradient-text">NIEUWE</span> IDENTITEIT?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Laat ons jouw merk transformeren tot iets waar je trots op bent. 
            Start vandaag nog met jouw nieuwe visuele identiteit.
          </p>
          <Button variant="cyber" size="lg" className="mr-4">
            Start Jouw Project
          </Button>
          <Button variant="outline" size="lg">
            Plan Gratis Gesprek
          </Button>
        </div>
      </section>
    </main>
  );
};

export default MerkidentiteitPage;