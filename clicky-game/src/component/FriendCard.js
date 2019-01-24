import React from 'react';

const FriendCard = (props) => {

    return (
        <div 
        onClick = {() => props.handleClick(props.friend.id)}
        className = "FriendCard">
        <img src = {props.friend.img}/>
        </div>
    )
}  

export default FriendCard 