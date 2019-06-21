import React from 'react';

const PlayAgain = (props) => (
    <div style = {{color: props.gameStatus === 'lost' ? 'red' : 'green'}}>
    
        {props.gameStatus === 'lost' ? "You Lost" : "Nice"}
        <button onClick = {props.clickReset}>PlayAgain</button>
    </div>
)
export default PlayAgain;