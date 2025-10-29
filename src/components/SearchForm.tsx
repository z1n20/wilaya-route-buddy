import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const wilayas = ["Alger", "Sétif", "Oran"];
const transportTypes = [
  { value: "bus", label: "🚌 Bus", icon: "🚌" },
  { value: "taxi", label: "🚕 Taxi Collectif", icon: "🚕" },
  { value: "covoiturage", label: "🚗 Covoiturage", icon: "🚗" },
];

export const SearchForm = () => {
  const [date, setDate] = useState<Date>();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [transportType, setTransportType] = useState("");
  const [seats, setSeats] = useState("1");

  const handleSearch = () => {
    // Navigate to search results
    window.location.href = "/search";
  };

  return (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-elevated border border-primary-light/30 animate-fade-in">
      <h2 className="text-2xl font-heading font-semibold mb-6 text-foreground">
        Rechercher un trajet
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">De</label>
          <Select value={from} onValueChange={setFrom}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Wilaya de départ" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              {wilayas.map((wilaya) => (
                <SelectItem key={wilaya} value={wilaya}>
                  {wilaya}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">À</label>
          <Select value={to} onValueChange={setTo}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Wilaya d'arrivée" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              {wilayas.map((wilaya) => (
                <SelectItem key={wilaya} value={wilaya}>
                  {wilaya}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-background",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2" />
                {date ? format(date, "PPP") : "Sélectionner une date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-background" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Type de transport</label>
          <Select value={transportType} onValueChange={setTransportType}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Choisir" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              {transportTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium text-foreground">Nombre de places</label>
          <Select value={seats} onValueChange={setSeats}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              {[1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} place{num > 1 ? "s" : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        className="w-full" 
        size="lg" 
        variant="hero"
        onClick={handleSearch}
      >
        <Search className="mr-2" />
        Rechercher
      </Button>
    </div>
  );
};
