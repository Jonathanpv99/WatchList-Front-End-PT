"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ListasPage() {
  const [watchlists, setWatchlists] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addWatchlist = () => {
    if (input.trim() === "") return;
    setWatchlists([...watchlists, input]);
    setInput("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Mis Listas</h1>
      
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-2">Mis Watchlists</h2>
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
    </div>
  );
}