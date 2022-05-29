import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Text } from "react-md";
import { PokemonList } from "@/components/organisms/PokemonList";

type Props = any;

const Pokemon: NextPage<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <Text type="headline-4">ポケモン一覧</Text>
      <PokemonList pokemonListApi={data.results} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Pokemon;
