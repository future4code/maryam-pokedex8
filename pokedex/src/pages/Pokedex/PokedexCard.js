import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import PokedexInfo from "./PokedexInfo";
import { HomeContainer } from "./styles";

const PokedexCard = () => {
    const { pokedex } = useContext(GlobalContext)

    return (
        <HomeContainer>
        {pokedex ? pokedex.map((pokemon, index) => 
            <PokedexInfo pokemon={pokemon} key={pokemon.name} index={index} />) : <p>Pokedex vazia! Capture algum Pokémon</p>
        }
        </HomeContainer>
    );
};
export default PokedexCard;
