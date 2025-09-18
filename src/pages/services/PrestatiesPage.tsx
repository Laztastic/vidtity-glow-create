import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle, ArrowLeft, Gauge, Shield, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const PrestatiesPage = () => {
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
            <Zap className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">PRESTATIES</span>
            <br />
            <span className="text-foreground">DIE TELLEN</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bliksemsnelle websites die je concurrentie achterlaten. Wij optimaliseren elke milliseconde 
            voor betere rankings, hogere conversies en tevreden gebruikers.
          </p>
          <div className="mt-10">
            <Button variant="cyber" size="lg" className="mr-4">
              Optimaliseer Nu
            </Button>
            <Button variant="outline" size="lg">
              Gratis Speed Test
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
                SNELHEID IS <span className="gradient-text">ALLES</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Een seconde sneller laden = 7% meer conversies. Google beloont snelle websites met betere rankings. 
                Wij maken jouw website razendsnel met bewezen optimalisatie technieken.
              </p>
              <div className="space-y-4">
                {[
                  "Core Web Vitals optimalisatie (Google's ranking factor)",
                  "Afbeelding compressie & WebP conversie",
                  "Critical CSS & JavaScript optimalisatie", 
                  "CDN implementatie voor globale snelheid",
                  "Database queries optimalisatie",
                  "Caching strategieën op meerdere niveaus"
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
                <h3 className="text-2xl font-bold mb-4 text-accent">Speed Audit</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Uitgebreide performance analyse</li>
                  <li>• Core Web Vitals rapport</li>
                  <li>• Prioritized improvement plan</li>
                  <li>• Competitor benchmarking</li>
                </ul>
                
              </Card>
              
              <Card className="p-8 bg-gradient-card cyber-border border-accent/50">
                <h3 className="text-2xl font-bold mb-4 text-accent">Performance Boost</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Complete website optimalisatie</li>
                  <li>• 90+ PageSpeed score garantie</li>
                  <li>• CDN setup & configuratie</li>
                  <li>• Monitoring & maintenance</li>
                  <li>• Performance rapportage</li>
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
              OPTIMALISATIE <span className="gradient-text">PROCES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Een systematische aanpak die zorgt voor meetbare prestatieverbetering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Performance Audit",
                description: "Diepgaande analyse van huidige prestaties en bottlenecks identificatie."
              },
              {
                step: "02", 
                title: "Optimization Plan",
                description: "Strategisch plan met prioriteiten gebaseerd op impact en implementatie."
              },
              {
                step: "03",
                title: "Implementation",
                description: "Technische optimalisaties met focus op Core Web Vitals en user experience."
              },
              {
                step: "04",
                title: "Monitor & Maintain",
                description: "Continue monitoring en fine-tuning voor optimale prestaties."
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

      {/* Core Web Vitals */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              CORE WEB <span className="gradient-text">VITALS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Google's officiële ranking factoren - wij zorgen dat je website perfect scoort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Largest Contentful Paint (LCP)",
                target: "< 2.5s",
                description: "Hoe snel de belangrijkste content laadt. Wij optimaliseren afbeeldingen, fonts en server response.",
                techniques: ["Image optimization", "Font loading", "Server response", "Critical CSS"]
              },
              {
                icon: Shield,
                title: "First Input Delay (FID)",
                target: "< 100ms", 
                description: "Hoe snel de pagina reageert op gebruikersinteractie. JavaScript optimalisatie is key.",
                techniques: ["Code splitting", "Lazy loading", "Service workers", "Main thread optimization"]
              },
              {
                icon: Rocket,
                title: "Cumulative Layout Shift (CLS)",
                target: "< 0.1",
                description: "Hoeveel de pagina verschuift tijdens laden. Stabiele layouts voorkomen frustratie.",
                techniques: ["Dimension reserving", "Font loading", "Ad slot sizing", "Dynamic content"]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card hover-lift">
                  <Icon className="w-16 h-16 text-accent mb-6" />
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-2xl font-black text-accent">{item.target}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.techniques.map((technique, techIndex) => (
                      <li key={techIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Impact */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              WAAROM <span className="gradient-text">PRESTATIES</span> BELANGRIJK ZIJN
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "53%",
                label: "van mobiele gebruikers",
                sublabel: "verlaat een site die langer dan 3 seconden laadt"
              },
              {
                stat: "7%",
                label: "conversie toename",
                sublabel: "per seconde sneller laden"
              },
              {
                stat: "32%",
                label: "hogere ranking",
                sublabel: "voor websites met perfecte Core Web Vitals"
              },
              {
                stat: "€2.1M",
                label: "extra omzet per jaar",
                sublabel: "door 0.1s sneller laden (grote webshops)"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center bg-gradient-card hover-lift">
                <div className="text-4xl font-black text-accent mb-2">{item.stat}</div>
                <div className="text-lg font-bold mb-2">{item.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{item.sublabel}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            KLAAR VOOR <span className="gradient-text">RAZENDSNELLE</span> PRESTATIES?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Stop met het verliezen van bezoekers en omzet door trage laadtijden. 
            Laat ons jouw website optimaliseren voor Google én gebruikers.
          </p>
          <Button variant="cyber" size="lg" className="mr-4">
            Start Optimalisatie
          </Button>
          <Button variant="outline" size="lg">
            Gratis Speed Check
          </Button>
        </div>
      </section>
    </main>
  );
};

export default PrestatiesPage;