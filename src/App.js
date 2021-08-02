import React from 'react';
import PlacarContainer from './components/PlacarContainer';

const dados = {
    partida: {
        estadio: "Castelão/MA",
        data: "01/08/2021",
        hora: "15h"
    },
    casa: {
        nome: "Sampaio",
    },
    visitante:{
        nome: "MotoClube",
    },
}

export default function Welcome(props) {
    return (
        <>
            <PlacarContainer partida={dados.partida}
                             casa={dados.casa}
                             visitante={dados.visitante}/>
        </>
    )
}