import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PokePic, PokeInfoContainer, ButtonsCard } from "./styles";


const PokemonInfo = (props) => {
    const [id, setId] = useState("");
    const [img, setImg] = useState([]);
    const { pokedex, setPokedex } = useContext(GlobalContext);
    const [ pokeCaptured, setPokeCaptured ] = useState(false);

    useEffect(() => {
        axios.get(props.pokemon.url).then((res) => {
            setId(res.data.id);
            setImg(res.data.sprites.front_default);
            });
    }, [pokedex]);


    const addToPokedex = (id) => {
        const capturePoke = {
        id: id,
        name: props.pokemon.name
        };
        const sendToPokedex = [...pokedex, capturePoke];
        setPokedex(sendToPokedex);
        setPokeCaptured(true);
        alert(`${props.pokemon.name} foi capturado!`);
        setPokeCaptured(true)
    };

    const handleRemovePokemon = (id) => {
        const filteredPokedex = pokedex.filter((poke) => poke.id !== id);
        setPokedex(filteredPokedex);
        setPokeCaptured(false);
    };

    const history = useHistory();
    const goToDetailsPage = (name) => {
        history.push(`/details/${name}`)
    };

    return (
        <div>
            <Card sx={{ width: 220 }}>
                <PokeInfoContainer>
                    <PokePic src={img} alt={props.pokemon.name} />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        #{id}
                    </Typography>
                    <Typography variant="h6">{props.pokemon.name}</Typography>
                </PokeInfoContainer>
                <ButtonsCard>
                    { !pokeCaptured ? <Button
                        onClick={() => addToPokedex(id)}
                        size="small"
                        variant="outlined"
                    >
                        Capturar
                    </Button> : <Button 
                                    size="small" 
                                    variant="contained" 
                                    color="error"
                                    onClick={() => handleRemovePokemon(id)}
                                    >
                                        Remover
                                </Button> }
                    
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

export default PokemonInfo;
