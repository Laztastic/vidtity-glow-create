import { Sparkles, Clock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const ComingSoon = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
        style={{ backgroundImage: `url(${heroImage})` }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-neon" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card/50 border border-primary/30 rounded-full backdrop-blur-sm">
            <Clock className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-base font-medium">Wordt Gelanceerd</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-black leading-none">
            <span className="gradient-text">Coming</span>
            <br />
            <span className="gradient-text">Soon</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Iets <span className="text-accent font-bold neon-glow">revolutionairs</span> komt eraan.
            <br />
            Bereid je voor op de toekomst van webdesign.
          </p>
          
          {/* Teaser Elements */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <div className="flex items-center gap-3 px-6 py-4 bg-card/30 border border-accent/20 rounded-lg backdrop-blur-sm hover-lift">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-lg font-medium">Gedurfd Design</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-card/30 border border-primary/20 rounded-lg backdrop-blur-sm hover-lift">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">Next-Gen Tech</span>
            </div>
          </div>
          
          {/* Mystery Element */}
          <div className="mt-16 opacity-70">
            <p className="text-lg text-muted-foreground font-mono">
              [ INITIALISEREN... ]
            </p>
            <div className="w-64 h-2 mx-auto mt-4 bg-muted/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent animate-pulse rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-accent/70 animate-bounce">
          <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
          <span className="text-sm font-mono">LOADING_EXPERIENCE...</span>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;