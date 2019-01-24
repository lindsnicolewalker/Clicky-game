import React from 'react';

const Navbar = (props) => {
    return (
        <div className = "Navbar">
        <p>Current Score: {props.currentScore} </p>
        <p>Top Score: {props.highScore}</p>
        </div>
    )
}  

export default Navbar 