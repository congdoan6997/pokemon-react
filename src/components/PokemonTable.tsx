import React, { useState } from "react";
type Props = {
  pokemonInfo?: PokemonInfoType;
};
const PokemonTable = ({ pokemonInfo }: Props) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-800 dark:text-gray-400">
        <tbody>
          {index === 0 && pokemonInfo?.about
            ? Object.keys(pokemonInfo.about).map((item) => (
                <tr
                  key={item}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="capitalize px-6 py-4">{item}</td>
                  <td className="font-bold px-6 py-4">
                    {pokemonInfo.about && (pokemonInfo.about as any)[item]}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
