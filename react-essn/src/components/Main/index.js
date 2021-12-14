import React from 'react';
import {Swith, Route} from 'react-router-dom';
import Series from '../../containers/Series';


const Main = props =>{
    <switch>
        <Route exact path="/" component={Series} />
    </switch>
};

export default Main;
