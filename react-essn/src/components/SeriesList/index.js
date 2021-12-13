import React from "react";
import Series from "../../containers/Series";
import './index.css';

const SeriesList = (props) =>{
    retrun (
        <div>
            <ul className="series-list">
                {props.list.map(series => {
                    <li key={series.show.id}>
                        {series.show.name}</li>
                })}
            </ul>

        </div>
    )
}

export default SeriesList;