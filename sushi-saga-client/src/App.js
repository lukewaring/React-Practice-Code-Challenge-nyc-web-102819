import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import sushis from './db'

// Endpoint!
// const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushi: []
  }

  // componentDidMount() {
  //   fetch(API)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         sushis: data
  //       })
  //     })
  // }

  componentDidMount() {
    this.setState({
      sushis: sushis
    })
  }

  eatSushi = sushi => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} />
        <Table eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
