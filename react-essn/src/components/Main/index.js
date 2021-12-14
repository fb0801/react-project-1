import React from 'react';
import {Swith, Route} from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';

const Main = props =>{
    <switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
    </switch>
};

export default Main;
