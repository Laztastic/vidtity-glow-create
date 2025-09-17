import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Zap, Smartphone, Globe, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "Merkidentiteit",
    description: "Gedurfde visuele identiteiten die de energie en geest van jonge merken vastleggen.",
    features: ["Logo Ontwerp", "Kleurenpaletten", "Typografie", "Merkrichtlijnen"],
    link: "/diensten/merkidentiteit",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Maatwerk websites gebouwd met geavanceerde technologie voor maximale impact.",
    features: ["React & Next.js", "Mobile-First", "SEO Geoptimaliseerd", "Bliksemsnelle"],
    link: "/diensten/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobiel Design",
    description: "Responsive designs die er ongelooflijk uitzien op elk apparaat en schermformaat.",
    features: ["iOS & Android", "Touch Geoptimaliseerd", "App-achtig Gevoel", "Progressive Web Apps"],
    link: "/diensten/mobiel-design",
  },
  {
    icon: Globe,
    title: "E-commerce",
    description: "Converterende online winkels die bezoekers omzetten in trouwe klanten.",
    features: ["Shopify", "WooCommerce", "Betaalintegratie", "Voorraadbeheer"],
    link: "/diensten/ecommerce",
  },
  {
    icon: Zap,
    title: "Prestaties",
    description: "Bliksemsnelle websites geoptimaliseerd voor snelheid en gebruikerservaring.",
    features: ["Core Web Vitals", "Afbeelding Optimalisatie", "CDN Integratie", "Caching"],
    link: "/diensten/prestaties",
  },
  {
    icon: Rocket,
    title: "Lancering & Groei",
    description: "End-to-end ondersteuning van concept tot lancering en daarbuiten.",
    features: ["Strategie", "Analytics", "Onderhoud", "Growth Hacking"],
    link: "/diensten/lancering-groei",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">DIENSTEN</span> DIE
            <br />
            <span className="text-foreground">MERKEN VERHEFFEN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wij specialiseren ons in het creëren van digitale ervaringen die resoneren met de nieuwe generatie.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-gradient-card border-primary/20 hover-lift group cursor-pointer cyber-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-purple transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="w-full group-hover:text-accent transition-colors" asChild>
                  <Link to={service.link}>
                    Meer Informatie
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cyber" size="lg">
            Krijg Offerte op Maat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;