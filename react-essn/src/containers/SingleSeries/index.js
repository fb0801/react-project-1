import React, {Component} from "react";
import SeriesList from "../../components/SeriesList";


class SingleSeries extends Component {
    render() {
        return{
            <div>
            <p>single  series - show ID will be {this.props.match.params.id}</p>
            </div>
        }
    }
}

export default SeriesList;