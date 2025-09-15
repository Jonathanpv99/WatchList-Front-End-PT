"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRandomEvents } from "@/utils/auxfunctions";

export default function EventosPage() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<string[]>([]);

  const simulateEvent = async () => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000)); // delay simulado
      const newEvents = getRandomEvents();
      setEvents([...events, ...newEvents]);
    } catch (error) {
      console.error("Error simulando evento:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Eventos</h1>
      
      <Card className="p-4">
        <h2 className="text-lg font-semibold mb-2">Simulación de eventos</h2>
        <Button onClick={simulateEvent} disabled={loading}>
          {loading ? "Simulando..." : "Simular evento"}
        </Button>
        <CardContent className="mt-4 space-y-2">
          {events.length === 0 ? (
            <p className="text-gray-500">No hay eventos registrados</p>
          ) : (
            events.map((e, i) => (
              <div key={i} className="p-2 bg-red-50 border border-red-200 rounded-md text-sm">
                {e}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}