import React from "react";
import styled from "styled-components";

const DivDetails = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #E5E5E5;
`
const DivCardDetails = styled.div`
    background-color: #FFFF;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    height: 80vh;
    width: 50vw;
    margin: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const NumPoke = styled.p`
    color: #B7B7B7;
    font-size: 3.5vh;
    margin:0;
`
const NamePoke = styled.p`
    font-size: 5vh;
    margin: 4px 0;
`
const DivTypes = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 40%;

    p {
        border: 2px solid gray;
        border-radius: 8px;
        padding: 4px;
        margin: 2px 0;
    }
`
const DivHeightWeight = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
`
const DivValues = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    width: 60%;
    p {
        border: 2px solid gray;
        border-radius: 8px;
        padding: 4px;
        margin: 2px 0;
    }
`
const DivStats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 2.5vh;
    width: 95%;

    div {
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        padding: 4px;
        height: 36px;
        width: 36px;
        border-radius: 360px;
    
        display: grid;
        place-items: center;
    }
`
const DivHp = styled.div`
    background-color: #EA3434;
`
const DivAtk = styled.div`
    background-color: #FAA04D;
`
const DivDef = styled.div`
    background-color: #FADE4D;
`
const DivSpA = styled.div`
    background-color: #4DFAD0;
`
const DivSpD = styled.div`
    background-color: #A8EF95;
`
const DivSPD = styled.div`
    background-color: #FB94A8;
`
const DivTot = styled.div`
    background-color: #8798D5;
`
const DivValuesStats = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(7, 1fr);
    font-size: 2.5vh;
    width: 95%;

    p{
        background-color: #E5E5E5;
        margin: 8px 0;
        height: 30px;
        width: 40px;
        border-radius: 360px;
        display: grid;
        place-items: center;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
`
const DivMoves = styled.div`
    display: flex;
    justify-content: space-around;
    width: 95%;
    margin-top: 8px;
    
    div{
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin-left: 10px;
    }
`

const DetailsPage = () => {
    return (
        <DivDetails>
            <DivCardDetails>
                <NumPoke>#000</NumPoke>
                <NamePoke>Nome do Pokémon</NamePoke>
                <DivTypes>
                    <p>Tipo 1</p>
                    <p>Tipo 2</p>
                </DivTypes>
                <DivHeightWeight>
                    <p>Height</p>
                    <p>Weigth</p>
                </DivHeightWeight>
                <DivValues> 
                    <p>100cm</p>
                    <p>200g</p>
                </DivValues>
                <p>Stats</p>
                <DivStats>
                    <DivHp>HP</DivHp>
                    <DivAtk>ATK</DivAtk>
                    <DivDef>DEF</DivDef>
                    <DivSpA>SpA</DivSpA>
                    <DivSpD>SpD</DivSpD>
                    <DivSPD>SPD</DivSPD>
                    <DivTot>TOT</DivTot>
                </DivStats>
                <DivValuesStats>
                    <p>20</p>
                    <p>20</p>
                    <p>20</p>
                    <p>20</p>
                    <p>20</p>
                    <p>20</p>
                    <p>20</p>
                </DivValuesStats>
                <DivMoves>
                    <p>Moves:</p>
                    <div>
                        <p>Ataque 1</p>
                        <p>Ataque 2</p>
                        <p>Ataque 3</p>
                    </div>
                </DivMoves>
            </DivCardDetails>
        </DivDetails>
    )
}

export default DetailsPage;