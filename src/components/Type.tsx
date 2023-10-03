import React from "react";

type Props = {
  types?: PokemonType[];
};

const Type = ({ types }: Props) => {
  return (
    <div className="mt-4">
      {types?.map((type: PokemonType) => (
        <span
          key={type.slot}
          className="table capitalize bg-gray-300 rounded-2xl py-1 px-2 mb-2"
        >
          {type.type.name}
        </span>
      ))}
    </div>
  );
};

export default Type;
