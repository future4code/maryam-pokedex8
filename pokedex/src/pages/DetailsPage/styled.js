import styled from "styled-components";

export const DivDetails = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #E5E5E5;
`
export const DivImage = styled.div`
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    border: 2px solid #CECECE;
    border-radius: 360px;
    height: 22vh;
    max-height: 22vh;
    max-width: 10vw;
    width: 10vw;
    position: absolute;
    img {
        object-fit: fill;
        max-height: 100%;
        width: 100%;
        max-width: 100%;
        border-radius: 360px;
    }
`
export const DivCardDetails = styled.div`
    background-color: #FFFF;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    height: 80vh;
    width: 50vw;
    margin: 90px 10px 8px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const NumPoke = styled.p`
    color: #B7B7B7;
    font-size: 3.5vh;
    margin:0;
    margin-top: 22px;
`
export const NamePoke = styled.p`
    font-size: 5vh;
    margin: 4px 0;
`
export const DivTypes = styled.div`
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
export const DivHeightWeight = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
`
export const DivValues = styled.div`
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
export const DivStats = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(6,1fr);
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
export const DivHp = styled.div`
    background-color: #EA3434;
`
export const DivAtk = styled.div`
    background-color: #FAA04D;
`
export const DivDef = styled.div`
    background-color: #FADE4D;
`
export const DivSpA = styled.div`
    background-color: #4DFAD0;
`
export const DivSpD = styled.div`
    background-color: #A8EF95;
`
export const DivSPD = styled.div`
    background-color: #FB94A8;
`
export const DivTot = styled.div`
    background-color: #8798D5;
`
export const DivValuesStats = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(6,1fr);
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
export const DivMoves = styled.div`
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