import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


class PageBox extends Component {
  
    render() {
        console.log(this.props.beers)
      return (
        <div className="">
        <img src={this.props.img} alt="img"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.header}</h5>
          <p className="card-text">{this.props.body}</p>
          <Link className="" to={{
              pathname: this.props.route,
              beer: {beers: this.props.beers}
              }}>Click
          </Link>
        </div>
      </div>
      )
    }
  }
  
  export default PageBox;