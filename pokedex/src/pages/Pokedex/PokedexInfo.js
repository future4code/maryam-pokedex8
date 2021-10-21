import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PokePic, PokeInfoContainer, ButtonsCard } from "./styles";



const PokedexInfo = (props) => {
    const [id, setId] = useState("");
    const [img, setImg] = useState([]);
    const {pokedex, setPokedex} = useContext(GlobalContext);

    // const pokemon = useRequestData(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`, {})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`).then((res) => {
        setId(res.data.id);
        setImg(res.data.sprites.front_default);
        // setType(res.data.types.type)
        // console.log(type)
        });
    }, [pokedex]);

    const removePokemon = (index) => {
        let newPokedex = [...pokedex];
        newPokedex.splice(index, 1)
        setPokedex([newPokedex])
        }

    const history = useHistory();

    const goToDetailsPage = (name) => {
        history.push(`/details/${name}`)
    };

    return (
        <div>
            <Card sx={{ width: 220 }}>
                <PokeInfoContainer>
                    {img && <PokePic src={img} alt={props.pokemon.name} />}
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        #{id}
                    </Typography>
                    <Typography variant="h6">{props.pokemon.name}</Typography>
                </PokeInfoContainer>
                <ButtonsCard>
                    <Button size="small" variant="outlined" onClick={() => removePokemon(props.index)}>
                        Remover
                    </Button>
                    <Button 
                    size="small" 
                    variant="outlined"
                    onClick={() => goToDetailsPage(props.pokemon.name)}
                    >
                        Detalhes
                    </Button>
                </ButtonsCard>
            </Card>
        </div>
    );
};

export default PokedexInfo;
