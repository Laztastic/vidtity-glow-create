import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Zap, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-foreground">READY TO</span>
            <br />
            <span className="gradient-text">GET STARTED?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's create something extraordinary together. Drop us a message and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-primary/20 cyber-border">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Start Your Project</h3>
              <p className="text-muted-foreground">Tell us about your vision and we'll make it reality.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background/50 border-primary/30 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background/50 border-primary/30 focus:border-accent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Input 
                  placeholder="e.g., E-commerce, Portfolio, Web App" 
                  className="bg-background/50 border-primary/30 focus:border-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Input 
                  placeholder="$5k - $10k, $10k+, etc." 
                  className="bg-background/50 border-primary/30 focus:border-accent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project, goals, and vision..."
                  className="bg-background/50 border-primary/30 focus:border-accent min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card border-primary/20 hover-lift group cyber-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-purple transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-muted-foreground mb-2">Ready to start your project?</p>
                  <a href="mailto:hello@vidtitydesign.com" className="text-accent hover:text-accent-glow font-medium">
                    hello@vidtitydesign.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 hover-lift group cyber-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Quick Chat</h4>
                  <p className="text-muted-foreground mb-2">Need immediate assistance?</p>
                  <Button variant="neon" size="sm">
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-primary/20 hover-lift group cyber-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-purple transition-all duration-300">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Fast Track</h4>
                  <p className="text-muted-foreground mb-2">Urgent project? We've got you covered.</p>
                  <p className="text-accent font-medium">48-hour delivery available</p>
                </div>
              </div>
            </Card>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-bold text-lg mb-4 text-center">Follow Our Journey</h4>
              <div className="flex justify-center gap-4">
                {["Instagram", "Twitter", "Dribbble", "Behance"].map((platform) => (
                  <Button key={platform} variant="ghost" size="sm" className="hover:text-accent">
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;