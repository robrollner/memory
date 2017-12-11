import ScoreCard from './components/ScoreCard/ScoreCard';
import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import simpsons from "./simpsons.json";



class App extends Component { 
  state = {
    score: 0,
    hiScore: 0,
    simpsons: simpsons   
  };

  randomRender = id => {  
    this.state.simpsons.forEach((pic) => {
      if(pic.id === id) {
        if(pic.clicked) {
          console.log(`Player loses previously clicked`)
          this.setState({})
          this.reset();
          return false;
        } 
        else {
          this.updateScore();
          pic.clicked = true;
        }
        if (this.state.score >= this.state.hiScore) {
          this.newHiScore();
        }
      } 
    });  
  }

  changePage = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);

      if ( i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({simpsons: copy});
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.winning())
  }
  
  newHiScore = () => {
    this.setState((newState) => ({
      hiScore: newState.score
    }))
  }

  winning = () => {
    if(this.state.score === this.state.simpsons.length) {
      this.setState({})
      this.reset();
    }
    else {
      setTimeout(() => {
        this.changePage(this.state.simpsons)
      }, 500);
    }
  }
  
  reset = () => {
    this.state.simpsons.forEach((pic) => {
      pic.clicked = false;
    })
    this.setState({score: 0})
  }
    

  render() {
    return (
      <Wrapper>
        <Title>The Simpsons
        <ScoreCard score={this.state.score} hiScore={this.state.hiScore} />
        </Title>        
          {this.state.simpsons.map(simpson => {
            return <FriendCard 
            {...simpson} 
            key={simpson.id}
            randomRender={this.randomRender}
            changePage={() => this.changePage(this.state.simpsons)}
            />;
        })}
  
      </Wrapper>
    );

  }
}
export default App;
