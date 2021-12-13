import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series:[]
      }
    
  
   onSeriesInputChange = e => {
    fetch('https://api.tvmaze.com/search/shows?q=${e.target.value}')
    .then((Response)=> Response.json())
    .then(json => this.setState({ series: json }));

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