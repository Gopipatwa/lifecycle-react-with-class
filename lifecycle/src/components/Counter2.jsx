import React from 'react'
import { useEffect } from 'react';

 function Counter2({number}) {
    // useEffect(()=>{
    //     console.log("Component is mounted");
    // },[]);
    useEffect(()=>{
        console.log("Component is updated");
        
        return ()=>{
            console.log("this is unmounted!");
        };
    },[number]);
    
    return (
    <div><h1>{number} times</h1></div>
  )
}
export default Counter2;