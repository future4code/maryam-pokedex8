import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PokePic, PokeInfoContainer, ButtonsCard } from "./styles";
import axios from "axios";

const PokemonInfo = (props) => {
    const [id, setId] = useState("");
    const [img, setImg] = useState([]);
    // const [type, setType] = useState([])
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        axios.get(props.pokemon.url).then((res) => {
        setId(res.data.id);
        setImg(res.data.sprites.front_default);
        // setType(res.data.types.type)
        // console.log(type)
        });
    }, []);

    const addToPokedex = (id) => {
        const capturePoke = {
        id: id,
        name: props.pokemon.name
        };
        const sendToPokedex = [...pokedex, capturePoke];
        setPokedex(sendToPokedex);
        alert(`${props.pokemon.name} foi capturado!`);
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
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {type && type.map((pokeType) => {
                return <p>{pokeType}</p>
                })}
            </Typography> */}
            </PokeInfoContainer>
            <ButtonsCard>
            <Button
                onClick={() => addToPokedex(id)}
                size="small"
                variant="outlined"
            >
                Capturar
            </Button>
            <Button size="small" variant="outlined" onClick={() => goToDetailsPage(props.pokemon.name)}>
                Detalhes
            </Button>
            </ButtonsCard>
        </Card>
        </div>
    );
};

export default PokemonInfo;
