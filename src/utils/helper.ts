const getBgColor = (type: string): string => {
  let bgColor = "bg-[#C2C2A1]";
  switch (type) {
    case "normal":
      bgColor = "bg-[#C2C2A1]";
      break;
    case "flying":
      bgColor = "bg-[#BAB0D5]";
      break;
    case "ghost":
      bgColor = "bg-[#735797]";
      break;
    case "dark":
      bgColor = "bg-[#333]";
      break;
    case "steel":
      bgColor = "bg-[#CCCCDE]";
      break;
    case "ground":
      bgColor = "bg-[#B1736C]";
      break;
    case "poison":
      bgColor = "bg-[#7C538C]";
      break;
    case "grass":
      bgColor = "bg-[#48D0B0]";
      break;
    case "electric":
      bgColor = "bg-[#FFD86F]";
      break;
    case "fairy":
      bgColor = "bg-[#f469a9]";
      break;
    case "bug":
      bgColor = "bg-[#C3CE75]";
      break;
    case "fighting":
      bgColor = "bg-[#d6b591]";
      break;
    case "water":
      bgColor = "bg-[#609FB5]";
      break;
    case "psychic":
      bgColor = "bg-[#9B7FA6]";
      break;
    case "ice":
      bgColor = "bg-[#7FCCEC]";
      break;
    case "rock":
      bgColor = "bg-[#a6aab6]";
      break;
    case "dragon":
      bgColor = "bg-[#F9BE00]";
      break;
  }
  return bgColor;
};

export const getPokemonInfo = (data: any): PokemonInfoType => {
  return {
    about: {
      height: data.height,
      weight: data.weight / 10,
      species: data.types.map((type: PokemonType) => type.type.name).join(", "),
      abilities: data.abilities
        .map((ability: PokemonAbilityType) => ability.ability.name)
        .join(", "),
    },
    base: {
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speedAtk: data.stats[3].base_stat,
      speedDef: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      total: data.stats.reduce(
        (a: number, b: PokemonStat) => a + b.base_stat,
        0
      ),
    },
  };
};

export const getPokemonCard = (data: any): PokemonCardType => {
  return {
    id: data.id,
    name: data.name,
    types: data.types,
    url: data.url,
    img: data.sprites.other.dream_world.front_default,
    bgColor: getBgColor(data.types[0].type.name),
    info: getPokemonInfo(data),
  };
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
