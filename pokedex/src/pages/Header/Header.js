// import * as React from "react";
import React from "react";
import { useHistory } from "react-router";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import HomePage from "../HomePage/HomePage";
// import { HeaderContainer, HeaderBox, TabBox } from "./styles";
// import PokedexPage from "../Pokedex/PokedexPage";

const Header = () => {
    // const [value, setValue] = React.useState("1");

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const history = useHistory();
    
    const goToHome = () => {
        history.push("/");
    };

    const goToPokedex = () => {
        history.push("/pokedex");
    };

    return (
    // <HeaderContainer>
    //     <HeaderBox>
    //         <TabContext value={value}>
    //         <TabBox sx={{ borderColor: "divider" }}>
    //             <TabList onChange={handleChange} aria-label="lab API tabs example">
    //             <Tab label="Home" value="1" />
    //             <Tab label="Pokedex" value="2" />
    //             {/* <Tab label="Item Three" value="3" /> */}
    //             </TabList>
    //         </TabBox>

    //         <TabPanel value="1">
    //             <HomePage />
    //         </TabPanel>

    //         <TabPanel value="2">
    //             <PokedexPage />
    //         </TabPanel>

    //         <TabPanel value="3">Item Three</TabPanel>
    //         </TabContext>
    //     </HeaderBox>
    // </HeaderContainer>
    <div>
        Header
        <button onClick={goToPokedex}>pokedex</button>
        <button onClick={goToHome}>Home</button>
    </div>
    );
};

export default Header;
