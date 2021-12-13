import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series:[]
      }
    
   componentDidMount() {
     fetch('https://api.tvmaze.com/search/shows?q=the-simpsons')
     .then((Response)=> Response.json())
     .then(json => this.setState({ series: json }))
   }

   onSeriesInputChange = e => {

   }

    render(){
    return (
        <div> 
            the length of the series array - {this.state.series.length}
            <div>
              <input type="text" onChange={this.onSeriesInputChange} />
            </div>

            <SeriesList list={this.state.series.length} />
</div>
    )
}
}

export default Series;