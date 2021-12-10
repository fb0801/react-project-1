import React from "react";
import Series from "../../containers/Series";

const SeriesList = (props) =>{
    retrun (
        <div>
            <ul className="series-list">
                {props.list.map(series => {
                    <li>{Series.show.name}</li>
                })}
            </ul>

        </div>
    )
}

export default SeriesList;