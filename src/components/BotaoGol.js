import React from 'react';

export default function BotaoGol(props){

    return (
        <button onClick={()=>props.marcarGol()}>Gol!</button>
    )
}