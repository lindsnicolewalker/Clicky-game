import React from 'react';

const styles = {
    image: {
        margin:50, 
        height: "300px",
        width: "300px"
    }
}

const MemoryCard = (props) => {

    return (
        <div 
        id={props.id}
        onClick = {() => props.handleClick(props.friend.id)}
        className = "col-lg-3">
        <div className="image-container">
        <img 
            src = {props.image}
            style={styles.image}/>
        </div>
        </div>
    )
}  

export default MemoryCard; 