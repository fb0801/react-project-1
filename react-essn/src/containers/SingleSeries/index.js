import React, {Component} from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";

class SingleSeries extends Component {
    state= {
        show: null
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        
        fetch('https://api.tvmaze.com/shows?')
        .then((Response)=> Response.json())
        .then(json => this.setState({ show:json }));
    }
    render() {
        const {show} = this.state;
        return{
            <div>
            {
            show === null && <Loader />
            }
            {
                show !== null 
                &&
                <div>
                <p>show loaded</p>
                <p>permier - {show.permier}</p>
                <p>Rating - {show.rating.average}</p>
                <p>Episodes - {show.embedded.episode.length} </p>
                <p>
                    <img alt="show" src="show.image.medium"></img>
                </p>
                </div>
            }
            </div>
        }
    }
}

export default SingleSeries;