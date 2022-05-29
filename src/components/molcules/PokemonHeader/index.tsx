import React from "react";
import Container from "@/components/atoms/Container";
import { Typography } from "@react-md/typography";

export const PokemonHeader = (props) => {
  const { pokemon } = props;
  const imageId = pokemon.id.toString().padStart(3, "0");
  return (
    <Container centered>
      <img
        src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${imageId}.png`}
        alt="pokemonImage"
        width={150}
        height={150}
      />
      <div>
        <Typography>No.{imageId}</Typography>
        <Typography>{pokemon.name}</Typography>
        {pokemon.types.map((item) => (
          <Typography>{item.type.name}</Typography>
        ))}
      </div>
    </Container>
  );
};
