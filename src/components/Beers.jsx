import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Beers extends Component {
	render() {
    console.log(this.props.location.beer);
    const beerList = this.props.location.beer;
    console.log(beerList.beers)
		return (
    <div>
      {beerList.beers.map((beer, i) => (
          <div className="single-beer" key={i}>
            <div className="beers-list-container">
              <img className="all-beers-img" src={beer.image_url} />
              <div id="items">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>Link here</Link>
              </div>
            </div>
          </div>
        ))}
    </div>
		);
	}
}


export default Beers;