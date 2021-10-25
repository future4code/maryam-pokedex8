import React from "react";
import { useHistory } from "react-router";
import { HeaderContainer, HeaderBox } from "./styles";
import Button from "@mui/material/Button";

const Header = () => {
    const history = useHistory();

    const goToHome = () => {
        history.push("/");
    };

    const goToPokedex = () => {
        history.push("/pokedex");
    };

    return (
        <HeaderContainer>
            <HeaderBox>
            <Button onClick={goToHome}>Home</Button>
            <Button onClick={goToPokedex}>pokedex</Button>
            </HeaderBox>
        </HeaderContainer>
    );
};

export default Header;
