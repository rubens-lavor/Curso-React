import React from 'react'

function Primeiro() {
    return (
        <div>
            <h1>Primeiro</h1>
            <h2>Exemplo de um componente React</h2>
        </div>
    )
}

export default Primeiro

/*
    Componente com o mínimo de sintax possível:

    Transformando numa Arrow function:

    export default () =>
        <React.Fragment>
            <h1>Primeiro</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>


*/ 