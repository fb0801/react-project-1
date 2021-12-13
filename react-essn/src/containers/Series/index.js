import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series:[],
        SeriesName:'',
        isfeteching: false
      }
    
  
   onSeriesInputChange = e => {
     //grabs the input query from the api and sees if input has any results
     this.setState({SeriesName: e.target.value, isfeteching: true, });
    fetch('https://api.tvmaze.com/search/shows?q=${e.target.value}')
    .then((Response)=> Response.json())
    .then(json => this.setState({ series: json, isfeteching:false }));

   }

    render(){
      const {series,SeriesName,isfeteching} = this.state;
    return (
        <div> 
            <div>
              <input value={SeriesName}
              type="text" 
              onChange={this.onSeriesInputChange} />
            </div>
            {
            series.length ===0 && SeriesName.trim()=== ''
            &&
            <p>Please enter a tv show</p>
            }
            {
              series.length === 0 && SeriesName.trim() !== ''
              &&
              <p>Nothing found</p>
            }
            <SeriesList list={this.state.series.length} />
</div>
    )
}
}

export default Series;