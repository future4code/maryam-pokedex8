import React, { useContext }from "react";
import PokemonInfo from "./PokemonInfo";
import { HomeContainer } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

const PokemonCard = (props) => {
  const { pokeList } = useContext(GlobalContext);

  return (
      <HomeContainer>
        {pokeList.results && pokeList.results.map((pokemon) => (
      <PokemonInfo pokemon={pokemon} key={pokemon.name} />
    ))}
      </HomeContainer>
  );
};

export default PokemonCard;
