import React from "react";
import Types from "./Type";
import useSWR from "swr";
import { getPokemonCard } from "../utils/helper";
type Props = {
  name: string;
  url: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonCard: PokemonCardType | undefined;
  setPokemonCard: React.Dispatch<
    React.SetStateAction<PokemonCardType | undefined>
  >;
};
const PokemonCard = ({
  name,
  url,
  openModal,
  setOpenModal,
  pokemonCard,
  setPokemonCard,
}: Props) => {
  const fetcher = (args: string) =>
    fetch(args).then(async (res): Promise<PokemonCardType> => {
      const data = await res.json();
      return getPokemonCard(data);
    });
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>Failed to fetch pokemon card.</div>;
  if (isLoading) return <h2>Loading...</h2>;
  console.log(data);

  return (
    <div
      className="p-4 h-full cursor-pointer"
      onClick={() => {
        setPokemonCard(data);
        setOpenModal(true);
      }}
    >
      <div
        className={`${data?.bgColor} transition-transform ease-in-out hover:-translate-y-1 pt-14 pr-3 pb-6 pl-12 relative flex justify-between h-full shadow-2xl rounded-[3rem] overflow-hidden`}
      >
        <span className="text-5xl text-gray-300 absolute top-8 right-4 z-0">
          #{data?.id.toString().padStart(3, "0")}
        </span>
        <div className="text-white">
          <h2 className="text-4xl font-extrabold m-0 capitalize">
            {data?.name}
          </h2>
          <Types types={data?.types} />
        </div>
        <div className="flex items-center justify-center max-w-[50%] z-10">
          <img src={data?.img} alt="pokemon" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
