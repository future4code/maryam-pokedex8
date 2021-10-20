import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useRequestData from "../hooks/useRequestData";

export default function GlobalState(props) {
    const pokeList = useRequestData(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
        {}
    );

  // const pokemons = pokeList.results &&
  //   pokeList.results.map((poke) => {
  //   <{poke.name}> <{poke.id}>
  // })

    return (
        <div>
            <GlobalContext.Provider value={{ pokeList }}>
                {props.children}
            </GlobalContext.Provider>
        </div>
    );
}
