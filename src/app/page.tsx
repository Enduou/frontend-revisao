"use client";

import { api } from "@/services/api";
import { useState } from "react";

interface Player {
  id: number;
  name: string;
  age: number;
}

export default function Home() {
  const [Players, setPlayers] = useState<Player[]>([]);

  async function loadPlayers() {
    try {
      const response = await api.get("/players");
      console.log(response.data);

      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddPlayer() {
    try {
      const response = await api.post("/players", {
        name: "Mohammed Salah",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1>Lista de jogadores</h1>
      <button onClick={loadPlayers} className="border px-4 py-2">
        Carregar jogadores
      </button>

      <button onClick={handleAddPlayer} className="border px-4 py-2">
        Adicionar jogador
      </button>

      <ul>
        {Players.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
