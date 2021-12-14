import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

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
            !isfeteching && series.length ===0 && SeriesName.trim()=== ''
            &&
            <p>Please enter a tv show</p>
            }
            {
              !isfeteching && series.length === 0 && SeriesName.trim() !== ''
              &&
              <p>Nothing found</p>
            }
            {
              isfeteching && <Loader /> //true statement
            }
            {
              isfeteching && <SeriesList list={this.state.series.length} /> //false statement
            }
</div>
    )
}
}

export default Series;