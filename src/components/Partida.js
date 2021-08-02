import React from 'react';

export default function create(props){
    return(
        <>
            <h2>{props.estadio}</h2>
            <div>
                <span>{props.data}</span>
                <span> - </span>
                <span>{props.hora}</span>
            </div>
        </>
    )
}