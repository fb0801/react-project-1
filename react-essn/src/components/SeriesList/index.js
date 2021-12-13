import React from "react";
import Series from "../../containers/Series";
import './index.css';

const SeriesListItem = ({ series}) => {
<li >
                        {series.show.name}</li>
}

const SeriesList = (props) =>{
    retrun (
        <div>
            <ul className="series-list">
                {props.list.map(series => {
                    <SeriesListItem series={series} key={series.show.id}/>
                })}
            </ul>

        </div>
    )
}

export default SeriesList;