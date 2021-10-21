import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";

export default function GlobalState(props) {
    const [pokedex, setPokedex] = useState([]);

    const pokeList = useRequestData(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
        {}
    );

    console.log("pokedex", pokedex)

    return (
        <div>
            <GlobalContext.Provider value={{ pokeList, pokedex, setPokedex }}>
                {props.children}
            </GlobalContext.Provider>
        </div>
    );
}
