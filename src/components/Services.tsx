import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Zap, Smartphone, Globe, Rocket } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Bold visual identities that capture the energy and spirit of youthful brands.",
    features: ["Logo Design", "Color Palettes", "Typography", "Brand Guidelines"],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with cutting-edge tech for maximum impact and performance.",
    features: ["React & Next.js", "Mobile-First", "SEO Optimized", "Lightning Fast"],
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Responsive designs that look incredible on every device and screen size.",
    features: ["iOS & Android", "Touch Optimized", "App-like Feel", "Progressive Web Apps"],
  },
  {
    icon: Globe,
    title: "E-commerce",
    description: "Converting online stores that turn visitors into loyal customers.",
    features: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"],
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Blazing-fast websites optimized for speed and user experience.",
    features: ["Core Web Vitals", "Image Optimization", "CDN Integration", "Caching"],
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    description: "End-to-end support from concept to launch and beyond.",
    features: ["Strategy", "Analytics", "Maintenance", "Growth Hacking"],
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="gradient-text">SERVICES</span> THAT
            <br />
            <span className="text-foreground">ELEVATE BRANDS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating digital experiences that resonate with the next generation.
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
                
                <Button variant="ghost" className="w-full group-hover:text-accent transition-colors">
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cyber" size="lg">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;