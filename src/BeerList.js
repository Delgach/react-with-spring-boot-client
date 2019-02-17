import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8080/good-beers')
      .then(responce => responce.json())
      .then(data => this.setState({beers: data, isLoading: false}))
      .catch(e => console.log(e));
  }

  render() {
    const {beers, isLoading} = this.state;
    
    if(isLoading) {
      return <p>Loading...</p>;
    }
    
    return (
      <div>  
        <h2>Beer list</h2>
        <Grid container>
        {beers.map(beer => 
          <Grid item xs={12 / beers.length} key={beer.id}>
            {beer.name}
          </Grid>
        )}
        </Grid>
      </div>
    );
  }
}

export default BeerList;
