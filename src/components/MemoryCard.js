import React from 'react';

const styles = {
    image: {
        margin:20, 
        height: "250px",
        width: "250px"
    }
}

const MemoryCard = (props) => {

    return (
        <div 
        id={props.id}
        onClick = {() => props.handleClick(props.id)}
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