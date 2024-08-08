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
  types: string[];
};

export default function PokemonPage() {
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

                const pokemonDataPromises = results.map(async (pokemon: { name: string; url: string; }) => {
                    const pokemonResponse = await fetch(pokemon.url);
                    const pokemonData = await pokemonResponse.json();
                    return {
                        name: pokemon.name,
                        url: pokemon.url,
                        sprite: pokemonData.sprites.other.dream_world.front_default,
                        id: pokemonData.id,
                        types: pokemonData.types.map((type: any) => type.type.name),
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
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 py-10 bg-light-green-300">
          <Typography variant="h1" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Pokemon
          </Typography>
          <Typography variant="h3" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            REST API Fetch
          </Typography>
          <div className="flex flex-wrap flex-grow justify-around w-full sm:w-3/5 gap-y-4">
              {pokemonList.map((pokemon) => (
                  <PokeCard key={pokemon.id} pokemon={pokemon} />
              ))}
          </div>
      </main>
  );
};