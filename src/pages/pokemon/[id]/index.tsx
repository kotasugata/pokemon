import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { PokemonHeader } from "@/components/molcules/PokemonHeader";

type Props = any;

const Pokemon: NextPage = () => {
  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res.json();
  };
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useQuery("pokemon", fetchPokemon);
  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return (
    <>
      <PokemonHeader pokemon={data} />
    </>
  );
};

export default Pokemon;
