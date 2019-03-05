import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearch, apiRequest } from './actions/search-actions';
import { createSelector } from 'reselect';

import DisplaySlide from './components/dumb/display-result-slide'
import SearchResultsDisplay from "./components/dumb/display-results";

class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }

  componentDidMount(){
    this.props.onApiRequest()
    console.log(this.props)
  }

  onUpdateSearch(event){
    this.props.onUpdateSearch(event.target.value);
  }

  render() {
    console.log(this.props, "PROPS")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <br></br>
          <input onChange={this.onUpdateSearch} />
          <br></br>

          {this.props.search[0].title}
          <a href={this.props.search[0].url}>{this.props.search[0].url}</a>

        </header> 
      </div>
    );
  }
}

const productSelector = createSelector(
  state => state.products,
  products => products
)

const searchSelector = createSelector(
  state => state.search,
  search => search
)

const mapStateToProps = createSelector(
  productSelector,
  searchSelector,
  (products, search) => ({
    products,
    search
  })
) 

const mapActionsToProps= {
  onUpdateSearch: updateSearch,
  onApiRequest: apiRequest
};


export default connect(mapStateToProps, mapActionsToProps)(App);
