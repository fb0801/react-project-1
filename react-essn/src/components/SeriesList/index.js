import React from "react";
import Series from "../../containers/Series";
import './index.css';
import { Link } from "react-router-dom";
const SeriesListItem = ({ series}) => {
<li >
    <Link to={'/series/s{series.show.id}'}>
    {series.show.name}
    </Link>
                       </li>
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