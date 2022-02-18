import React from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";
class LifeCycleClass extends React.Component{
    state = {
        num:0
    };
    handleClick(){
        this.setState((state)=>({num:state.num+1}));
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick.bind(this)}>Increment</button>
            <Counter2 number = {this.state.num}/>
            </>
        )
    }
}export default LifeCycleClass;