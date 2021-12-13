import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series:[],
        SeriesName:'',
        isfeteching: false
      }
    
  
   onSeriesInputChange = e => {
    fetch('https://api.tvmaze.com/search/shows?q=${e.target.value}')
    .then((Response)=> Response.json())
    .then(json => this.setState({ series: json }));

   }

    render(){
      const {series,SeriesName,isfeteching} = this.state;
    return (
        <div> 
            the length of the series array - {this.state.series.length}
            <div>
              <input value={SeriesName}
              type="text" onChange={this.onSeriesInputChange} />
            </div>

            <SeriesList list={this.state.series.length} />
</div>
    )
}
}

export default Series;