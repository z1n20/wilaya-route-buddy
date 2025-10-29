import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SearchForm } from "@/components/SearchForm";
import { Clock, MapPin, Star, Users } from "lucide-react";

const mockTrips = [
  {
    id: 1,
    from: "Alger",
    to: "Sétif",
    type: "bus",
    icon: "🚌",
    departureTime: "08:00",
    arrivalTime: "12:30",
    duration: "4h 30min",
    price: "800",
    availableSeats: 8,
    driverRating: 4.8,
    driverName: "Mohammed K.",
  },
  {
    id: 2,
    from: "Alger",
    to: "Sétif",
    type: "taxi",
    icon: "🚕",
    departureTime: "10:00",
    arrivalTime: "13:45",
    duration: "3h 45min",
    price: "1500",
    availableSeats: 3,
    driverRating: 4.9,
    driverName: "Karim B.",
  },
  {
    id: 3,
    from: "Alger",
    to: "Jijel",
    type: "bus",
    icon: "🚌",
    departureTime: "14:00",
    arrivalTime: "18:30",
    duration: "4h 30min",
    price: "900",
    availableSeats: 12,
    driverRating: 4.7,
    driverName: "Rachid M.",
  },
];

const Search = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-primary-light/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 
            className="text-2xl font-heading font-bold text-primary cursor-pointer"
            onClick={() => window.location.href = "/"}
          >
            Wilaygo
          </h1>
      <div className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <div className="mb-8">
          <SearchForm />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Trajets disponibles ({mockTrips.length})
          </h2>

          {mockTrips.map((trip) => (
            <Card 
              key={trip.id} 
              className="hover:shadow-elevated transition-all border-primary-light/30 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{trip.icon}</div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-heading font-semibold text-lg">
                          {trip.from} → {trip.to}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{trip.departureTime} - {trip.arrivalTime}</span>
                        </div>
                        <span>•</span>
                        <span>{trip.duration}</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-medium">{trip.driverRating}</span>
                          <span className="text-muted-foreground">({trip.driverName})</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span className="text-muted-foreground">
                            {trip.availableSeats} places disponibles
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-end gap-4 md:gap-2">
                    <div className="text-right">
                      <div className="text-3xl font-heading font-bold text-secondary">
                        {trip.price} DA
                      </div>
                      <div className="text-xs text-muted-foreground">par place</div>
                    </div>
                    <Button 
                      variant="hero" 
                      size="lg"
                      className="whitespace-nowrap"
                    >
                      Réserver
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
