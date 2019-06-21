import React from 'react';
import '../App.css';
import utils from '../utils.js';

const StarDisplay = (props) => {
    
   // const [stars , setStars] = useState(utils.random(1 , 9));
    //List of number for star match
    //candidatenums
    //wrngnums
    //usewdnums
    //avaliablenums
    //const [candidtaeNums , setCandidateNums] = useState([2 , 3])
    //const [avalableNums , setAvailableNums] = useState([1, 2, 3, 4, ,5 ]);
    return(
        utils.range(1 , props.stars).map(starId => 
                <div className="star" key = {starId}  />
            )
        )
}
export default StarDisplay;