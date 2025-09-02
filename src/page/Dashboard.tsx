// src/pages/Dashboard.tsx
import { useEffect, useRef, useState } from "react";
import { getCharacters } from "../service/FuturamaService";
import { CardFuturama } from "../components/CardFuturama";
import type { Character } from "../interface/Characters";

export const Dashboard: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const effectRun = useRef(false);

  useEffect(() => {
    if (effectRun.current) return;
    effectRun.current = true;

    const loadCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.items);
      } catch (err) {
        console.error("Error al cargar personajes:", err);
      }
    };

    loadCharacters();
  }, []);

  return (
    <div>
      <h1>Futurama</h1>
      <h3>Personajes</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {characters.map((char) => (
          <CardFuturama key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};
