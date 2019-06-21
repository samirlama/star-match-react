import React  from 'react';

import NumberDisplay from './NumberDisplay.js';
import StarDisplay from './StarDisplay.js';
import utils from '../utils.js';
import '../bootstrap.min.css';
import '../font-awesome.min.css';
import { useState , useEffect } from 'react';
import PlayAgain from './PlayAgain.js';
const Game = () => {
    const [stars , setStars ] = useState(utils.random(1 , 9));
    const [candidateNums , setCandidateNums] = useState([]);
    const [availableNums , setAvailableNums] = useState(utils.range(1 , 9));
    const [secondsLeft  , setSecondsLeft ] = useState(10);
    useEffect(() => {
        if(secondsLeft > 0){
       const TimerId = setTimeout(() => {
           setSecondsLeft(secondsLeft - 1)
       } , 1000)
    
       return () => clearTimeout(TimerId);
    }
    })
     const  numbersAreWrong = utils.sum(candidateNums) > stars;
    const gameStatus = availableNums.length == 0 ? 'won' : secondsLeft == 0 ? 'lost' : 'active'
    
    //here status of number is checked. all the numbers are available at the beginig so available is returned for
    //every number. In onNUmbeClick function below if number is clicked and is candidate i.e on candidateNUms array
    //then is turned to blue until their sum is smaller than  stars or not equals to it. if more than stars is clicked than it is wrong and numbers turns to red.
    const numberStatus = (number) => {
        if(!availableNums.includes(number))
            return 'used';
        if(candidateNums.includes(number))
            return numbersAreWrong ? 'wrong' : 'candidate';
        return 'available';        
    }
    const onNumberClick = (number , status) => {
      if (status == 'used')
      return;
      const newCandidateNums = candidateNums.concat(number);
      if(utils.sum(newCandidateNums) != stars)
        setCandidateNums(newCandidateNums);
      else {
          const newAvailableNums = availableNums.filter(
              n => !newCandidateNums.includes(n)
          )
          setStars(utils.randomSumIn(newAvailableNums , 9));
          setCandidateNums([]);
          setAvailableNums(newAvailableNums);
      }  
    }
    const resetGame = () => {
        setStars(utils.random(1 , 9));
        setAvailableNums(utils.range(1 , 9));
        setCandidateNums([]);
        setSecondsLeft(10);
    }
    
        return(
            <div>
                GAME COMPONENT
                 {utils.range(1 , 9).map( number => <NumberDisplay 
                status = {numberStatus}
                clickFunction = {onNumberClick}
                number = {number}
                
                 /> )}
                 { gameStatus!== 'active' ? <PlayAgain clickReset = {resetGame} gameStatus = {gameStatus}/> : <StarDisplay stars = {stars} /> } 
                 <div>Time: {secondsLeft}</div>
            </div>
    )

}
   


export default Game;