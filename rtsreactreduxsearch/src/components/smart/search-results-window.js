import React, { Component } from "react";
import SearchResultsDisplay from '../dumb/display-results';
import DisplaySlide from '../dumb/display-result-slide';

class ResultsList extends Component {

    render() {
      console.log(this.props);
      return (
        <div className='container'>
        <SearchResultsDisplay>
          {this.props.beerList.map(prop => {
            return (
              <DisplaySlide
                key={prop.id}
                title={prop.title}
              />
            );
          })}
        </SearchResultsDisplay></div>
      )
    }
  }
  
  export default ResultsList;