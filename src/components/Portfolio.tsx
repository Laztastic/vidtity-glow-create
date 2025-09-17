import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Palette } from "lucide-react";

const projects = [
  {
    title: "VONQUE.BE",
    category: "Interieur",
    description: "Elegante website voor interieurdesign en inspirerende galerijen om bij weg te dromen.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Interieur", "Projecten", "Design"],
    color: "accent",
  },
  {
    title: "LAMBRECS.BE",
    category: "Fotografie",
    description: "Professionele portfolio website voor foto- en videograaf met dynamische galerij en booking systeem.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    tags: ["Fotografie", "Portfolio", "Galerij", "Booking"],
    color: "primary",
  },
  {
    title: "VANEYCKTYRECENTER.BE",
    category: "Automotive",
    description: "Subtiele website voor bandenhandelaar.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Automotive", "Banden", "Logo ontwerp", "Service"],
    color: "accent",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-foreground">UITGELICHTE</span>
            <br />
            <span className="gradient-text">PROJECTEN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontdek hoe we merken hebben geholpen onvergetelijke digitale ervaringen te creëren.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-gradient-card border-primary/20 hover-lift cyber-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    project.color === 'accent' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="neon" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    Bekijk Live
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Code className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Palette className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Bekijk Alle Projecten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;