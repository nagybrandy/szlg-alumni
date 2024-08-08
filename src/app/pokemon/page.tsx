"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Chip, CardFooter, Typography, Avatar, Tooltip, Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PokeCard } from "./components/PokeCard";

export type Pokemon = {
  name: string;
  url: string;
  sprite: string;
  id: number;
  types: any[];
};

export function PokemonPage() {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function fetchPokemon(
            offset: number = 100,
        ) {
            try {
                const limit = 20;
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
                const data = await response.json();
                const results = data.results;

                const pokemonDataPromises = results.map(async (pokemon: any) => {
                    const pokemonResponse = await fetch(pokemon.url);
                    const pokemonData = await pokemonResponse.json();
                    const sprite = pokemonData.sprites.other.dream_world.front_default;
                    const id = pokemonData.id;
                    const types = pokemonData.types.map(
                        (type: any) => type.type.name
                    );

                    return {
                        name: pokemon.name,
                        url: pokemon.url,
                        sprite: sprite,
                        id: id,
                        types: types,
                    };
                });

                const pokemonData = await Promise.all(pokemonDataPromises);
                setPokemonList(pokemonData);
            } catch (error) {
                console.error("Error fetching Pokemon:", error);
            }
        }

        fetchPokemon();
    }, []);

    return (
        <main
            className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 bg-light-green-300"
        >
            <Typography variant="h1" color="blue-gray">
                Pokemon
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-8">
                REST API Fetch
            </Typography>
            <div className="flex flex-wrap flex-grow justify-around w-full sm:w-3/5 gap-y-4">
                {pokemonList.map((pokemon) => (
                    <PokeCard pokemon={pokemon} />
                ))}
            </div>
        </main>
    );
};


export function DefaultPagination() {
    const [active, setActive] = React.useState(1);
   
    const getItemProps = (index) =>
      ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
      } as any);
   
    const next = () => {
      if (active === 5) return;
   
      setActive(active + 1);
    };
   
    const prev = () => {
      if (active === 1) return;
   
      setActive(active - 1);
    };
   
    return (
      <div className="flex items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    );
}

export default PokemonPage;