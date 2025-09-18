import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, CheckCircle, ArrowLeft, TrendingUp, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const LanceringGroeiPage = () => {
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
            <Rocket className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">LANCERING</span> &
            <br />
            <span className="text-foreground">GROEI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Van concept tot succesvolle groei - wij begeleiden je volledige digitale journey. 
            Strategische lancering, data-driven optimalisatie en sustainable growth.
          </p>
          <div className="mt-10">
            <Button variant="cyber" size="lg" className="mr-4">
              Plan Je Lancering
            </Button>
            <Button variant="outline" size="lg">
              Growth Strategie
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
                VAN <span className="gradient-text">IDEE</span> TOT SUCCESS
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Een geweldig product is niet genoeg - je hebt een strategische lancering en groeiplan nodig. 
                Wij zorgen voor alles: van technische setup tot marketing strategieën die écht werken.
              </p>
              <div className="space-y-4">
                {[
                  "Go-to-market strategie ontwikkeling",
                  "Technical launch preparatie & monitoring",
                  "Analytics setup & conversion tracking",
                  "A/B testing voor optimale performance",
                  "Growth hacking technieken & automation",
                  "Long-term partnership & ondersteuning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-card cyber-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Launch Package</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Launch strategie & timeline</li>
                  <li>• Technical setup & monitoring</li>
                  <li>• Analytics & tracking implementation</li>
                  <li>• 1 maand launch support</li>
                </ul>
                
              </Card>
              
              <Card className="p-8 bg-gradient-card cyber-border border-accent/50">
                <h3 className="text-2xl font-bold mb-4 text-accent">Growth Partnership</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Complete growth strategie</li>
                  <li>• Maandelijkse optimalisatie</li>
                  <li>• A/B testing & experiments</li>
                  <li>• Growth hacking techniques</li>
                  <li>• Dedicated growth manager</li>
                  <li>• Quarterly strategy reviews</li>
                </ul>
                
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
              GROWTH <span className="gradient-text">ROADMAP</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Een bewezen proces dat startups en bedrijven helpt om sustainable groei te realiseren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategie & Setup",
                description: "Market research, competitor analyse en complete launch strategie ontwikkeling."
              },
              {
                step: "02", 
                title: "Technical Launch",
                description: "Perfect getimede lancering met alle technische aspecten onder controle."
              },
              {
                step: "03",
                title: "Measure & Learn",
                description: "Data verzameling, user feedback analyse en eerste optimalisaties implementeren."
              },
              {
                step: "04",
                title: "Scale & Optimize",
                description: "Growth hacking, scaling strategieën en continue optimalisatie voor groei."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-gradient-card hover-lift cyber-border text-center">
                <div className="text-5xl font-black text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Services */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              GROWTH <span className="gradient-text">SERVICES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Launch Strategy",
                description: "Complete go-to-market strategie met timing, channels en success metrics.",
                services: ["Market research", "Competitor analysis", "Launch timeline", "Success metrics", "Risk assessment", "Rollback plans"]
              },
              {
                icon: TrendingUp,
                title: "Growth Hacking",
                description: "Data-driven experimenten en technieken om snelle, schaalbare groei te realiseren.",
                services: ["A/B testing setup", "Conversion optimization", "Viral mechanics", "Referral programs", "Growth loops", "Retention strategies"]
              },
              {
                icon: Users,
                title: "Community Building",
                description: "Opbouw van een loyale community rond je merk voor sustainable growth.",
                services: ["Social media strategy", "Content planning", "Community management", "Influencer partnerships", "User-generated content", "Brand advocacy"]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card hover-lift">
                  <Icon className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              GROWTH <span className="gradient-text">RESULTATEN</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Onze data-driven aanpak levert meetbare resultaten voor onze growth partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "340%",
                label: "Gemiddelde Groei",
                sublabel: "in eerste 6 maanden"
              },
              {
                metric: "23%",
                label: "Conversie Verbetering",
                sublabel: "door A/B testing"
              },
              {
                metric: "89%",
                label: "Client Retention",
                sublabel: "lange-termijn partnerships"
              },
              {
                metric: "2.8x",
                label: "ROI Verbetering",
                sublabel: "op marketing investeringen"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center bg-gradient-card hover-lift">
                <div className="text-4xl font-black text-accent mb-2">{item.metric}</div>
                <div className="text-lg font-bold mb-2">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.sublabel}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PARTNERSHIP <span className="gradient-text">MINDSET</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wij geloven in lange-termijn partnerships. Jouw succes is ons succes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Transparante Communicatie",
                description: "Wekelijkse updates, maandelijkse rapportages en directe toegang tot je dedicated growth manager."
              },
              {
                title: "Data-Driven Beslissingen", 
                description: "Alle strategieën zijn gebaseerd op data en experimenten. Geen gisswerk, alleen bewezen resultaten."
              },
              {
                title: "Flexible Samenwerking",
                description: "We passen onze aanpak aan jouw specifieke situatie, doelen en budget. One-size-fits-all bestaat niet."
              },
              {
                title: "Kennis Overdracht",
                description: "We leren jouw team onze technieken zodat je ook intern kunt doorgroeien en optimaliseren."
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-gradient-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            KLAAR VOOR <span className="gradient-text">EXPLOSIVE</span> GROEI?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop met gissen en start met groeien. Laat ons jouw growth partner worden en 
            samen sustainable success realiseren.
          </p>
          <Button variant="cyber" size="lg" className="mr-4">
            Start Growth Journey
          </Button>
          <Button variant="outline" size="lg">
            Gratis Growth Audit
          </Button>
        </div>
      </section>
    </main>
  );
};

export default LanceringGroeiPage;