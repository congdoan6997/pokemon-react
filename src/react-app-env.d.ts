/// <reference types="react-scripts" />

type Pokemon = {
  name: string;
  url: string;
};
type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
type PokemonAbilityType = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
type PokemonCardType = {
  name: string;
  id: number;
  url: string;
  img: string;
  types: PokemonType[];
  bgColor: string;
  info: PokemonInfoType;
};
type PokemonInfoType = {
  about: {
    height: number;
    weight: number;
    species: string;
    abilities: string;
  };
  base: {
    hp: number;
    attack: number;
    defense: number;
    speedAtk: number;
    speedDef: number;
    speed: number;
    total: number;
  };
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
