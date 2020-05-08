import React, { Component } from 'react';
import PageBox from './PageBox'
import axios from "axios";

class Main extends Component {
    state = {
      beers: [],
      apiURL: "https://ih-beers-api2.herokuapp.com/beers/" 
    };
  
    componentDidMount() {
        axios
          .get(this.state.apiURL)
          .then(apiResponse => 
            this.setState({ beers: apiResponse.data }))
          .catch(err => console.log(err));
      }
  
    render() {
        console.log(this.state.beers)
      return (
        <div className="">
          <PageBox
            beers={this.state.beers}
            route="/beers"
            header="All Beers"
            body="View all the Beers"
            img="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          />
        </div>
      )
    }
  }
  
  export default Main;