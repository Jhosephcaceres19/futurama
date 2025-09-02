// src/components/CardFuturama.tsx
import { Card } from "flowbite-react";
import type { Character } from "../interface/Characters";
import { withFallback } from "../utils/Image";

interface CardFuturamaProps {
  character: Character;
}

export const CardFuturama: React.FC<CardFuturamaProps> = ({ character }) => {
  //imagen por defecto
  const defaultAvatar =
    "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg";

  const img = withFallback(character.image, defaultAvatar);
  return (
    <Card
      className="min-w-sm]"
      imgAlt={`Imagen de ${character.name}`}
      imgSrc={img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {character.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Especie: {character.species}
      </p>
    </Card>
  );
};
