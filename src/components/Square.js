import React from 'react'

export default function Square (props){
    return(
        console.log(props),
        <button className= "square" >
            {props.insideValue}
        </button>
    )
}