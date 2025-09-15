"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [watchlists, setWatchlists] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<string[]>([]);

  const addWatchlist = () => {
    if (input.trim() === "") return;
    setWatchlists([...watchlists, input]);
    setInput("");
  };

  const simulateEvent = async () => {
    setLoading(true);
    try {
      // Aquí puedes llamar a un Server Action o API que simule/enriquezca el evento
      await new Promise((res) => setTimeout(res, 1000)); // delay simulado
      setEvents([...events, "Nuevo evento simulado 🚨"]);
    } catch (error) {
      console.error("Error simulando evento:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto p-6 space-y-6">
      <Card className="p-4">
        <h1 className="text-xl font-bold mb-2">Mis Watchlists</h1>
        <div className="flex gap-2 mb-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nueva lista..."
          />
          <Button onClick={addWatchlist}>Agregar</Button>
        </div>
        <ul className="list-disc pl-6 space-y-1">
          {watchlists.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-2">Simulación de eventos</h2>
        <Button onClick={simulateEvent} disabled={loading}>
          {loading ? "Simulando..." : "Simular evento"}
        </Button>
        <CardContent className="mt-4 space-y-2">
          {events.map((e, i) => (
            <p key={i} className="text-sm">
              {e}
            </p>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
