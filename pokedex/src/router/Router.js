import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../pages/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/Pokedex/PokedexPage"
import DetailsPage from "../pages/DetailsPage/DetailsPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <hr/>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/pokedex"}>
                    <PokedexPage />
                </Route>
                <Route exact path={"/details/:nome"}>
                    <DetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}