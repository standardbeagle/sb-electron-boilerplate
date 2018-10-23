import React from 'react';
import {Route} from 'react-router-dom';
import Home from "../pages/home";
import Sites from "../pages/sites";

export default () => (<div>
    <Route path="/sites" component={Sites} />
    <Route exact path="/" component={Home} />
</div>)