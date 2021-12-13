import React from "react";
import Series from "../../containers/Series";
import './index.css';

const SeriesListItem = props => {
<li key={series.show.id}>
                        {series.show.name}</li>
}

const SeriesList = (props) =>{
    retrun (
        <div>
            <ul className="series-list">
                {props.list.map(series => {
                    
                })}
            </ul>

        </div>
    )
}

export default SeriesList;