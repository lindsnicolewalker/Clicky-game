import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import characters from './FriendsArray';
import FriendCard from './component/FriendCard';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {currentScore: 0, highScore:0, characters:characters };
    // this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
       <Navbar currentScore={this.state.currentScore} highScore={this.state.highScore}/>
       <div className="GameContainer">
       {this.state.characters.map(character => (
       <FriendCard 
       friend = {character} 
       key = {character.id}
       handleClick = {this.handleItemClick}
       />
       ))}
       </div>
      </div>
    );
  }


}

export default App;
