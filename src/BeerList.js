import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import BeerItem from './BeerItem';

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beerList: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/beers')
      .then(responce => responce.json())
      .then(data => this.setState({beerList: data, isLoading: false}))
      .catch(e => console.log(e));
  };

  render() {
    const {isLoading} = this.state;
    
    if(isLoading) {
      return <p>Loading...</p>;
    }
    
    return (
      <div>  
        <h2>Beer list</h2>
        <Grid container>
          {this.state.beerList.map(beer => 
              <BeerItem key={beer.id} name={beer.name}/>
          )}
        </Grid>
      </div>
    );
  }
}

export default (BeerList);
