import React from 'react';
import ListCafe from '../components/ListCafe';
import { getAllCafes } from '../utils';
import CafeAppJumbotron from '../components/CafeAppJumbotron';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cafes: getAllCafes(),
    };
  }
  render() {
    return (
      <section>
        <CafeAppJumbotron />
        <h2>Recomendation Cafe</h2>
        <ListCafe cafes={this.state.cafes} />
      </section>
    );
  }
}

export default HomePage;
