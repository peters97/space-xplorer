import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Launches from "../pages/Launches";


const Main = () => {
    return (
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route exact path={process.env.PUBLIC_URL + '/launches'} component={Launches}/>
        </Switch>
    );
}

export default Main;