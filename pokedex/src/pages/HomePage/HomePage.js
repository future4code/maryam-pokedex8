import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { HomeContainer, HomeBox } from "./styles";

const HomePage = () => {
    return (
        <HomeBox>
            <PokemonCard />
        </HomeBox>
    );
};

export default HomePage;
