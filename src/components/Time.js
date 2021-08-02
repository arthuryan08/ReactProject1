import React from 'react';
import BotaoGol from './BotaoGol'

export default function Time(props){
    return(
        <> 
            <h1>{props.nome}</h1>
            <h1>{props.gols}</h1>
            <BotaoGol marcarGol={props.marcarGol}/>
        </>
    )
}