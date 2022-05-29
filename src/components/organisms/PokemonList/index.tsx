import React, { useCallback, useEffect, useState } from "react";
import { GridCell, Grid } from "react-md";
import { ContesntsCard } from "@/components/molcules/ContentsCard";

type Props = { pokemonListApi: { name: string; url: string }[] };

export const PokemonList: React.VFC<Props> = (props) => {
  const { pokemonListApi } = props;
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonJaList, setPokemonJaList] = useState([]);
  const fetchPokemon = useCallback(() => {
    const promises = [];
    const promises2 = [];
    for (let i = 1; i < pokemonListApi.length; i++) {
      const url = `https:pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
      const url2 = `https:pokeapi.co/api/v2/pokemon-species/${i}`;
      promises2.push(fetch(url2).then((res) => res.json()));
    }

    Promise.all(promises).then((results) => {
      setPokemonList(results);
    });
    Promise.all(promises2).then((results) => {
      setPokemonJaList(results);
    });
  }, []);
  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <Grid>
      {pokemonList.map((pokemon) => {
        return (
          <GridCell key={pokemon.id} colSpan={2}>
            <ContesntsCard
              pokemon={pokemon}
              // pokemonJaNameList={pokemonJaList}
            />
          </GridCell>
        );
      })}
    </Grid>
  );
};
