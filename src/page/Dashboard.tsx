import { useEffect, useRef, useState } from "react";
import { getCharacters } from "../service/FuturamaService";

export const Dashboard = () => {
  const [characters, setCharacters] = useState([]);
  const effectRun = useRef(false);

  useEffect(() => {
    if (effectRun.current) return; // si ya corrió, no lo vuelve a hacer
    effectRun.current = true;

    const loadCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data.items);
        console.log(data.items);
      } catch (err) {
        console.log(err + "error al cargar");
      }
    };
    loadCharacters();
  }, []);

  return (
    <div>
      <h1>Futurama</h1>
      <h3>personajes</h3>
      <p>
        {characters.map((c) => (
          <li key={c.id}>
            {c.name}
            {c.image}
          </li>
        ))}
      </p>
    </div>
  );
};
