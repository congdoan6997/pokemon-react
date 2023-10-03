import React, { useState } from "react";
import Pagination from "./components/Pogination";
import PokemonCard from "./components/PokemonCard";
import useSWR from "swr";
import PokemonInfo from "./components/PokemonInfo";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [pokemonCard, setPokemonCard] = useState<PokemonCardType | undefined>(
    undefined
  );
  const fetcher = (args: string) =>
    fetch(args).then(async (res): Promise<Pokemon[]> => {
      const data = await res.json();
      return data.results;
    });
  const { data, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15",
    fetcher
  );

  if (error) return <div>Failed to fetch users.</div>;
  if (isLoading) return <h2>Loading...</h2>;
  // console.log(data);
  return (
    <>
      <div className="p-4">
        <h1 className="text-center text-5xl font-bold mt-4 mb-10">Pokemon</h1>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-blue-600 drop-shadow-lg mb-4">
            Generation:
          </h3>
          <Pagination />
        </div>
        <div className="grid gap-4 md:grid-cols-3 grid-cols-1 items-center justify-center">
          {data?.map((pokemon: Pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              openModal={openModal}
              setOpenModal={setOpenModal}
              pokemonCard={pokemonCard}
              setPokemonCard={setPokemonCard}
            />
          ))}
        </div>
      </div>
      <PokemonInfo
        open={openModal}
        setOpen={setOpenModal}
        pokemonCard={pokemonCard}
      />
    </>
  );
};

export default App;
