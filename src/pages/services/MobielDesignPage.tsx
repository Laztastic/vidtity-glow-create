import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, CheckCircle, ArrowLeft, Monitor, Tablet, Watch } from "lucide-react";
import { Link } from "react-router-dom";

const MobielDesignPage = () => {
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
            <Smartphone className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="gradient-text">MOBIEL DESIGN</span>
            <br />
            <span className="text-foreground">PERFECTION</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Responsive designs die er fantastisch uitzien op elk apparaat. Van smartphone tot desktop, 
            wij zorgen voor een consistente, intuïtieve gebruikerservaring die converteert.
          </p>
          <div className="mt-10">
            <Button variant="cyber" size="lg" className="mr-4">
              Start Mobiel Project
            </Button>
            <Button variant="outline" size="lg">
              Bekijk Voorbeelden
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
                <span className="gradient-text">MOBILE-FIRST</span> DENKEN
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Meer dan 70% van je bezoekers komt via mobiel. Daarom ontwerpen wij altijd mobile-first. 
                Elk element wordt geoptimaliseerd voor touch-interactie, snelle laadtijden en intuïtieve navigatie.
              </p>
              <div className="space-y-4">
                {[
                  "Touch-geoptimaliseerde interface elementen",
                  "Progressive Web App (PWA) functionaliteit",
                  "Offline-first design waar mogelijk",
                  "Native app-achtige ervaring in browser",
                  "Optimale performance op alle devices",
                  "Cross-platform compatibility gegarandeerd"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-gradient-card cyber-border">
                <Smartphone className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">Smartphone</h3>
                <p className="text-sm text-muted-foreground">Perfect geoptimaliseerd voor iOS & Android</p>
              </Card>
              <Card className="p-6 bg-gradient-card cyber-border">
                <Tablet className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">Tablet</h3>
                <p className="text-sm text-muted-foreground">Ideale layout voor tablet gebruikers</p>
              </Card>
              <Card className="p-6 bg-gradient-card cyber-border">
                <Monitor className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">Desktop</h3>
                <p className="text-sm text-muted-foreground">Volledige functionaliteit op grote schermen</p>
              </Card>
              <Card className="p-6 bg-gradient-card cyber-border">
                <Watch className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-bold mb-2">Wearables</h3>
                <p className="text-sm text-muted-foreground">Toekomstbestendige design principes</p>
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
              DESIGN <span className="gradient-text">PROCES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Van mobile wireframes tot desktop perfectie - elk schermformaat krijgt de aandacht die het verdient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Mobile Wireframes",
                description: "We starten altijd met mobiele wireframes om de beste UX te garanderen."
              },
              {
                step: "02", 
                title: "Responsive Scaling",
                description: "Elk element wordt zorgvuldig geschaald naar tablet en desktop formaten."
              },
              {
                step: "03",
                title: "Touch Optimization",
                description: "Interface elementen worden geoptimaliseerd voor touch interactie."
              },
              {
                step: "04",
                title: "Cross-Device Testing",
                description: "Uitgebreide tests op echte devices voor perfecte compatibility."
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
              MOBIELE <span className="gradient-text">FEATURES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Progressive Web Apps",
                description: "Native app ervaring direct in de browser, zonder App Store downloads.",
                features: ["Offline functionaliteit", "Push notificaties", "Home screen installatie", "Native performance"]
              },
              {
                title: "Touch Interface Design",
                description: "Elke interactie is geoptimaliseerd voor vingers in plaats van muispointers.",
                features: ["Grote touch targets", "Swipe navigatie", "Haptic feedback", "Gesture controls"]
              },
              {
                title: "Performance Optimization",
                description: "Bliksemsnelle laadtijden, ook op langzamere mobiele verbindingen.",
                features: ["Lazy loading", "Image compression", "Critical CSS", "Service workers"]
              },
              {
                title: "Mobile SEO",
                description: "Volledig geoptimaliseerd voor Google's mobile-first indexering.",
                features: ["Mobile usability", "Core Web Vitals", "Schema markup", "Local SEO"]
              },
              {
                title: "Cross-Platform Unity",
                description: "Consistente ervaring tussen iOS, Android en alle andere platforms.",
                features: ["Universal design", "Platform guidelines", "Adaptive layouts", "Feature detection"]
              },
              {
                title: "Accessibility Focus",
                description: "Toegankelijk design dat voor iedereen werkt, op elk apparaat.",
                features: ["Screen reader support", "Voice navigation", "High contrast modes", "Text scaling"]
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 bg-gradient-card hover-lift">
                <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-t from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            KLAAR VOOR <span className="gradient-text">MOBIELE</span> PERFECTIE?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Laat je mobiele gebruikers de beste ervaring hebben. Responsive design dat converteert op elk apparaat.
          </p>
          <Button variant="cyber" size="lg" className="mr-4">
            Start Mobiel Project
          </Button>
          <Button variant="outline" size="lg">
            Bekijk Demo's
          </Button>
        </div>
      </section>
    </main>
  );
};

export default MobielDesignPage;