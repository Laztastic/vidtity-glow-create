import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, CheckCircle, ArrowLeft, Zap, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopmentPage = () => {
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
            <Code className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">WEB DEVELOPMENT</span>
            <br />
            <span className="text-foreground">NEXT LEVEL</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Maatwerk websites gebouwd met cutting-edge technologie. Bliksemsnelle prestaties, 
            perfecte SEO, en een gebruikerservaring die conversies maximaliseert.
          </p>
          <div className="mt-10">
            <Button variant="cyber" size="lg" className="mr-4">
              Start Jouw Website
            </Button>
            <Button variant="outline" size="lg">
              Bekijk Live Sites
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
                TECHNOLOGIE DIE <span className="gradient-text">WERKT</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wij bouwen websites met de nieuwste technologieën zoals React, Next.js en TypeScript. 
                Onze focus ligt op prestaties, schaalbaarheid en een perfecte gebruikerservaring 
                die bezoekers omzet naar klanten.
              </p>
              <div className="space-y-4">
                {[
                  "React & Next.js voor optimale prestaties",
                  "TypeScript voor betrouwbare, schaalbare code",
                  "SEO-geoptimaliseerd vanaf dag één",
                  "Mobile-first responsive design",
                  "Core Web Vitals perfect gescoord",
                  "Headless CMS integratie mogelijk"
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
                <h3 className="text-2xl font-bold mb-4 text-accent">Basis Website</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Tot 5 pagina's</li>
                  <li>• Responsive design</li>
                  <li>• SEO geoptimaliseerd</li>
                  <li>• Contact formulier</li>
                  <li>• Google Analytics</li>
                </ul>
                <div className="text-3xl font-black text-accent">€1.995</div>
              </Card>
              
              <Card className="p-8 bg-gradient-card cyber-border border-accent/50">
                <h3 className="text-2xl font-bold mb-4 text-accent">Premium Website</h3>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li>• Onbeperkt aantal pagina's</li>
                  <li>• Custom functionaliteiten</li>
                  <li>• CMS integratie</li>
                  <li>• Geavanceerde SEO</li>
                  <li>• Performance monitoring</li>
                  <li>• 3 maanden ondersteuning</li>
                </ul>
                <div className="text-3xl font-black text-accent">€4.995</div>
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
              DEVELOPMENT <span className="gradient-text">PROCES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van concept tot lancering in een gestructureerd proces dat zorgt voor kwaliteit en snelheid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Planning & Design",
                description: "Wireframes, user flows en visueel ontwerp worden vastgelegd."
              },
              {
                step: "02", 
                title: "Development",
                description: "Clean, schaalbare code met focus op prestaties en SEO."
              },
              {
                step: "03",
                title: "Testing & QA",
                description: "Uitgebreide tests op alle devices en browsers."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Go-live met monitoring en doorlopende ondersteuning."
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

      {/* Tech Stack */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ONZE <span className="gradient-text">TECH STACK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Performance First",
                description: "React, Next.js, en TypeScript zorgen voor bliksemsnelle websites die perfect scoren op Core Web Vitals.",
                tech: ["React 18+", "Next.js 14", "TypeScript", "Tailwind CSS"]
              },
              {
                icon: Shield,
                title: "Veilig & Betrouwbaar", 
                description: "Moderne hosting met SSL, automatische backups, en continue monitoring voor 99.9% uptime.",
                tech: ["Vercel/Netlify", "SSL Certificates", "CDN", "Auto Backups"]
              },
              {
                icon: Smartphone,
                title: "Mobile Perfection",
                description: "Mobile-first ontwikkeling die zorgt voor perfecte ervaring op alle apparaten en schermformaten.",
                tech: ["Responsive Design", "Touch Optimized", "PWA Ready", "Fast Loading"]
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 bg-gradient-card hover-lift">
                  <Icon className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
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
            KLAAR VOOR EEN <span className="gradient-text">SNELLE</span> WEBSITE?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Laat ons jouw digitale aanwezigheid naar het volgende level tillen. 
            Websites die niet alleen mooi zijn, maar ook presteren.
          </p>
          <Button variant="cyber" size="lg" className="mr-4">
            Start Jouw Project
          </Button>
          <Button variant="outline" size="lg">
            Technisch Gesprek
          </Button>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopmentPage;