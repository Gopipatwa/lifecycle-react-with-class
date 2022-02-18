import React from 'react'
import './input.css';

function Debounce() {
    const myDebounce = (cb, d) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                cb(...args);
                console.log(cb);
                console.log(...args);
            }, d);
        }
    }
    const handleChange = myDebounce((e)=>{
        console.log(e.target.value);
    },1000);
  return (
    <div><div className="app"><input onChange={handleChange}/></div></div>
  )
}

export default Debounce