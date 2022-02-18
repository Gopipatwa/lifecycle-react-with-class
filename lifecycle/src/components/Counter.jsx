import React from "react";

class Counter extends React.Component{
    componentDidMount(){
        console.log("ComponentDidMount Run?");
    }
    componentDidUpdate(prevProps,preState){
        if(prevProps.number!==this.props.number){
            console.log("componentDidUpdate runs");
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount",this.props.number);
    }
    render(){
        return <h1>{this.props.number} times</h1>
    }
}
export default Counter;