// Vidtity Design - Static Build
document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('root');
  
  // Render the complete application
  app.innerHTML = `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden" style="background-image: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url('/assets/hero-bg.jpg'); background-size: cover; background-position: center;">
      <div class="container mx-auto px-4 text-center">
        <div class="animate-fadeIn">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            VIDTITY DESIGN
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Gedurfde webdesign voor jonge merken. Wij creëren dynamische, energieke web-ervaringen die opvallen in de digitale wereld.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="btn btn-hero animate-glow">
              Start je project
            </a>
            <a href="#portfolio" class="btn btn-neon">
              Bekijk portfolio
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-card">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Onze Services</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Van concept tot lancering - wij zorgen voor een complete digitale ervaring
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="hover-lift bg-secondary rounded-xl p-6 cyber-border">
            <div class="mb-4">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-foreground">Web Design</h3>
            <p class="text-muted-foreground">
              Unieke, op maat gemaakte websites die jouw merk perfect weerspiegelen en gebruikers boeien.
            </p>
          </div>

          <div class="hover-lift bg-secondary rounded-xl p-6 cyber-border">
            <div class="mb-4">
              <div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-foreground">Mobile First</h3>
            <p class="text-muted-foreground">
              Responsive ontwerpen die perfect functioneren op alle apparaten, van smartphone tot desktop.
            </p>
          </div>

          <div class="hover-lift bg-secondary rounded-xl p-6 cyber-border">
            <div class="mb-4">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-foreground">Performance</h3>
            <p class="text-muted-foreground">
              Razendsnelle websites geoptimaliseerd voor de beste gebruikerservaring en SEO-prestaties.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Portfolio</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontdek onze nieuwste projecten en laat je inspireren door onze creatieve oplossingen
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="hover-lift bg-card rounded-xl overflow-hidden cyber-border">
            <div class="h-48 bg-gradient-hero"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-foreground">Streetwear Brand</h3>
              <p class="text-muted-foreground mb-4">Een dynamische e-commerce website voor een opkomend streetwear merk.</p>
              <a href="#" class="btn btn-primary">Bekijk project</a>
            </div>
          </div>

          <div class="hover-lift bg-card rounded-xl overflow-hidden cyber-border">
            <div class="h-48 bg-gradient-accent"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-foreground">Creative Agency</h3>
              <p class="text-muted-foreground mb-4">Een portfolio website die creativiteit en professionaliteit combineert.</p>
              <a href="#" class="btn btn-primary">Bekijk project</a>
            </div>
          </div>

          <div class="hover-lift bg-card rounded-xl overflow-hidden cyber-border">
            <div class="h-48 bg-gradient-primary"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-foreground">Tech Startup</h3>
              <p class="text-muted-foreground mb-4">Een moderne landing page voor een innovatieve tech startup.</p>
              <a href="#" class="btn btn-primary">Bekijk project</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-card">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Contact</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Klaar om jouw digitale aanwezigheid naar het volgende niveau te tillen?
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-semibold mb-4 text-foreground">Laten we praten</h3>
              <p class="text-muted-foreground mb-6">
                We horen graag over jouw project en helpen je graag om jouw visie werkelijkheid te maken.
              </p>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-foreground">Email</p>
                  <p class="text-muted-foreground">hello@vidtity.com</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-foreground">Telefoon</p>
                  <p class="text-muted-foreground">+31 6 12345678</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-secondary rounded-xl p-6 cyber-border">
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Naam</label>
                <input type="text" class="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" class="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              </div>
              <div>
                <label class="block text-sm font-medium text-foreground mb-2">Bericht</label>
                <textarea rows="4" class="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
              </div>
              <button type="submit" class="btn btn-hero w-full">
                Verstuur bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add form submission handling
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
      form.reset();
    });
  }

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});