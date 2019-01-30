import React, { Component } from "react";
import MemoryCard from "./MemoryCard";
import Rows from "./Rows";
import PlayerChoices from "../PlayerChoices.json"

class Container extends Component {

    state = {
        score: 0,
        highScore: 0,
        cards: PlayerChoices
    };

    componentDidMount() {
        this.setState({ cards: this.shuffleCards(this.state.cards) });
        console.log(this.state.cards);
    }

    shuffleCards = cardsArray => {
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * 12);
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
        return cardsArray;
    };

    handleGameClicks = event => {
        let id = event;

        for (let i = 0; i < this.state.cards.length; i++) {
            if (this.state.cards[i]["id"] === id) {
                if (this.state.cards[i]["clicked"] === true) {
                    console.log("Game over");
                    
                    this.restartGame();
                } else {
                    this.state.cards[i]["clicked"] = true; 
                    this.state.score++; 
                    console.log(`Score: ${this.state.score}`);

                    if (this.state.score > 7) {
                        console.log("Winner!");
                        this.restartGame();
                    }
                }
            }
        }

        this.setState({ cards: this.shuffleCards(this.state.cards) });
        console.log(this.state.cards);
    };

    showCards = () => {
        return (
            this.state.cards.map(card => (
                <MemoryCard
                    name={card.name}
                    image={card.image}
                    id={card.id}
                    handleClick={this.handleGameClicks}
                />
            ))
        )
    }

    restartGame = () => {
        if (this.state.score > this.state.highScore) {
            this.state.highScore = this.state.score; 
        };
        this.state.score = 0;
        this.state.cards.map(card => (
            card["clicked"] = false 
        ));
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Memory Click Game</h1>
                <h5 className="description">(Don't click the same one twice!)</h5>
                <h3 className="score">Current Score: {this.state.score}</h3>
                <h3 className="score">High Score: {this.state.highScore}</h3>
                <Rows >
                    {this.showCards()}
                </Rows>
            </div>
        )
    }
}

export default Container;




