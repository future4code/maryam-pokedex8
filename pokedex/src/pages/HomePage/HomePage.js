import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { HomeContainer } from "./styles";

const HomePage = () => {
    
    return (
        <HomeContainer>
            <PokemonCard />
        </HomeContainer>
    )
}

export default HomePage;