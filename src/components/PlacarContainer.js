import React, { useState } from 'react';
import Time from './Time';
import Partida from './Partida'
import './PartidaContainer.css'


function PlacarContainer(props){

    const [golCasa, setGolCasa] = useState(0);
    const [golVisit, setGolVisit] = useState(0);
        function marcarGolCasa(){
            setGolCasa(golCasa+1)
        }

        function marcarGolVisit(){
            setGolVisit(golVisit+1)
        }
    return(
        <>
        <div className='container'>
            <div className="time">
                <h3>Casa</h3>
                <Time nome={props.casa.nome} 
                    gols={golCasa}
                    marcarGol={marcarGolCasa}/>
            </div>
            <div className="time">
                <Partida estadio={props.partida.estadio} 
                        data={props.partida.data}
                        hora={props.partida.hora}/>
            </div>
            <div className="time">
                <h3>Visitante</h3>
                <Time nome={props.visitante.nome} 
                    gols={golVisit}
                    marcarGol={marcarGolVisit}/>
            </div>
        </div>
        </>
    )
}
export default PlacarContainer