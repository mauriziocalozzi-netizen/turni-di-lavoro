"use client";

import { useState } from "react";

interface Turno {
  id: number;
  nome: string;
  giorno: string;
}

export default function Home() {
  const [turni, setTurni] = useState<Turno[]>([]);
  const [nome, setNome] = useState("");
  const [giorno, setGiorno] = useState("");

  const aggiungiTurno = () => {
    if (nome && giorno) {
      setTurni([...turni, { id: Date.now(), nome, giorno }]);
      setNome("");
      setGiorno("");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 dark:bg-black p-10 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">
        Gestione Turni di Lavoro
      </h1>

      {/* Form per aggiungere un turno */}
      <div class
