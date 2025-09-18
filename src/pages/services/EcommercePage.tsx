import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, CheckCircle, ArrowLeft, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const EcommercePage = () => {
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
            <Globe className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">E-COMMERCE</span>
            <br />
            <span className="text-foreground">DAT VERKOOPT</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Krachtige online winkels die bezoekers omzetten in klanten. Van product showcase tot checkout, 
            wij optimaliseren elke stap van de customer journey voor maximale conversie.
          </p>
          <div className="mt-10">
            <Button variant="cyber" size="lg" className="mr-4">
              Start Je Webshop
            </Button>
            <Button variant="outline" size="lg">
              Bekijk Success Cases
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
                VERKOPEN IS <span className="gradient-text">ONZE EXPERTISE</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Een mooie webshop is niet genoeg. Wij focussen op conversie-optimalisatie, gebruikerservaring 
                en technische prestaties die ervoor zorgen dat bezoekers daadwerkelijk kopen bij jou.
              </p>
              <div className="space-y-4">
                {[
                  "Conversie-geoptimaliseerde product pagina's",
                  "Frictionless checkout proces (1-click kopen)",
                  "Geavanceerde betalingsmogelijkheden (iDEAL, PayPal,...)",
                  "Realtime voorraad- en orderbeheer",
                  "Geavanceerde analytics en conversion tracking",
                  "SEO-geoptimaliseerd voor product zoekresultaten"
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
                <h3 className="text-2xl font-bold mb-4 text-accent">Starter Webshop</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Tot 50 producten</li>
                  <li>• Shopify/WooCommerce setup</li>
                  <li>• Basis betalingsintegratie</li>
                  <li>• Responsive design</li>
                  <li>• SSL & hosting</li>
                </ul>
                
              </Card>
              
              <Card className="p-8 bg-gradient-card cyber-border border-accent/50">
                <h3 className="text-2xl font-bold mb-4 text-accent">Professional Webshop</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Onbeperkt aantal producten</li>
                  <li>• Custom functionaliteiten</li>
                  <li>• Geavanceerde analytics</li>
                  <li>• Multi-channel integratie</li>
                  <li>• Advanced SEO & marketing tools</li>
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
              WEBSHOP <span className="gradient-text">PROCES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van strategie tot succesvolle verkoop - elk aspect wordt zorgvuldig gepland en uitgevoerd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "E-commerce Strategie",
                description: "Analyse van je markt, concurrentie en doelgroep voor de perfecte aanpak."
              },
              {
                step: "02", 
                title: "Platform & Design",
                description: "Keuze van het beste platform en ontwerp van een converterende user experience."
              },
              {
                step: "03",
                title: "Development & Setup",
                description: "Technische implementatie met focus op prestaties en conversie-optimalisatie."
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "Live gang met continue monitoring en optimalisatie voor betere resultaten."
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

      {/* Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              E-COMMERCE <span className="gradient-text">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "Smart Product Management",
                description: "Geavanceerd productbeheer met varianten, categorieën, en automatische SEO-optimalisatie.",
                features: ["Product varianten", "Bulk upload", "SEO templates", "Rich snippets"]
              },
              {
                icon: CreditCard,
                title: "Payment & Checkout",
                description: "Frictionless betaalproces dat vertrouwen opbouwt en cart abandonment vermindert.",
                features: ["iDEAL integratie", "PayPal", "1-click checkout", "Guest checkout"]
              },
              {
                icon: BarChart3,
                title: "Analytics & Growth",
                description: "Diepgaande inzichten in klantgedrag en verkoopreportages voor groei.",
                features: ["Conversion tracking", "Customer insights", "Sales reports", "A/B testing"]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card hover-lift">
                  <Icon className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
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
              PROVEN <span className="gradient-text">RESULTATEN</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Webshops presteren boven industriegemiddelden door focus op conversie-optimalisatie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "3.2%", label: "Gemiddelde Conversie Rate", sublabel: "(2x industrie gemiddelde)" },
              { metric: "€47", label: "Gemiddelde Order Value", sublabel: "hogere AOV door UX" },
              { metric: "1.8s", label: "Laadtijd", sublabel: "bliksemsnelle performance" },
              { metric: "94%", label: "Mobile Experience Score", sublabel: "perfect voor mobiel" }
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

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            KLAAR OM MEER TE <span className="gradient-text">VERKOPEN</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Start vandaag nog met een webshop die daadwerkelijk verkoopt. 
            Geen mooie plaatjes, maar resultaat waar je bank rekening blij van wordt.
          </p>
          <Button variant="cyber" size="lg" className="mr-4">
            Start Je Webshop
          </Button>
          <Button variant="outline" size="lg">
            Conversie Audit
          </Button>
        </div>
      </section>
    </main>
  );
};

export default EcommercePage;