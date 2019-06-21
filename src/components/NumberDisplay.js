
import React , {Component} from 'react';
import utils from '../utils.js';
class NumberDisplay extends Component{
    
    render(){
        const colors = {
            used: 'lightgreen' , 
            available: 'lightgray' , 
            wrong: 'lightcoral',
            candidate: 'deepskyblue'
        };
        return (
           
                    <button 
                    style = {{backgroundColor: colors[this.props.status(this.props.number)]}}
                    onClick = { () => this.props.clickFunction(this.props.number , this.props.status)}  
                    
                    >{this.props.number}</button>
                
             )
    }
   
}
export default NumberDisplay;