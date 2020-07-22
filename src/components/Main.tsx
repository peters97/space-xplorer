import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Launches from "../pages/Launches";


const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/launches" component={Launches}/>
        </Switch>
    );
}

export default Main;