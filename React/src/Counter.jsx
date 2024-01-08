// class comp

import React, {Component} from "react";

export default class Counter extends Component{
    // get the state
    constructor(){
        super()
        this.state = {count : 0}
    }
    handleClick=(val)=>{
        this.setState({count:this.state.count+val})
    }

    render(){
        
        let styleMydiv = {
            border:"1px solid black"
        }

        return(
            <>
            <h1>Counter App</h1>
            <p>{this.state.count}</p>
            <button onClick={()=>{this.handleClick(1)}} style={styleMydiv}>+</button>
            <button onClick={()=>{this.handleClick(-1)}} style={styleMydiv}>-</button>
            <button onClick={()=>{this.handleClick(-this.state.count)}} style={styleMydiv}>Reset</button>
            </>
        )
    }
}