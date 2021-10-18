import React from "react";
import { useHistory } from "react-router";

const HomePage = () => {
    const history = useHistory();
    
    const goToPokedex = () => {
        history.push("/pokedex");
    };

    const goToDetailsPage = (name) => {
        history.push(`/details/${name}`)
    }
    return (
        <div>
            Home
            <button onClick={goToPokedex}>pokedex</button>
            <button onClick={() => goToDetailsPage()}>detalhes</button>
        </div>
    )
}

export default HomePage;