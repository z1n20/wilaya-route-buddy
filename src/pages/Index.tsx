import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/SearchForm";
import { MapPin, Shield, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-transportation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-primary-light/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary">Wilaygo</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => window.location.href = "/login"}>
              Connexion
            </Button>
            <Button variant="secondary" size="sm" onClick={() => window.location.href = "/signup"}>
              S'inscrire
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-fade-in">
              Voyagez entre wilayas en toute simplicité
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body mb-8 animate-fade-in">
              La plateforme de réservation de transport pour étudiants algériens. 
              Alger, Sétif, Oran - Réservez votre trajet en quelques clics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">
          Pourquoi choisir Wilaygo ?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-card border border-primary-light/20 text-center hover:shadow-elevated transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">
              Réseau étendu
            </h4>
            <p className="text-muted-foreground font-body text-sm">
              Voyagez entre Alger, Sétif et Oran avec de nombreuses options
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card border border-primary-light/20 text-center hover:shadow-elevated transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">
              Sécurisé
            </h4>
            <p className="text-muted-foreground font-body text-sm">
              Chauffeurs vérifiés et système de paiement sécurisé
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card border border-primary-light/20 text-center hover:shadow-elevated transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">
              Suivi en temps réel
            </h4>
            <p className="text-muted-foreground font-body text-sm">
              Suivez votre véhicule et connaissez l'heure d'arrivée exacte
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-card border border-primary-light/20 text-center hover:shadow-elevated transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-heading font-semibold text-lg mb-2 text-foreground">
              Évalué par les étudiants
            </h4>
            <p className="text-muted-foreground font-body text-sm">
              Notez vos trajets et aidez la communauté
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Prêt à partir ?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui voyagent en toute confiance avec Wilaygo
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => window.location.href = "/signup"}
            className="font-heading font-semibold"
          >
            Créer mon compte gratuitement
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-primary-light/20 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground font-body text-sm">
          <p>© 2025 Wilaygo. Transport étudiant inter-wilaya en Algérie.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
