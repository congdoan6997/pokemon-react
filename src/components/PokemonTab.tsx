import React from "react";
type Props = {
  category?: PokemonInfoType;
};
const PokemonTab = ({ category }: Props) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {category &&
          Object.keys(category).map((cat: string) => (
            <li key={cat} className="mr-2">
              <div className=" cursor-pointer capitalize inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                {cat}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PokemonTab;
