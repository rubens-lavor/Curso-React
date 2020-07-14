import './Card.css'
import React from 'react'

export default props =>
    <div className="Card" style={{
        borderColor: props.color || '#000'
    }}>

        <div className="Conteudo">
            {props.children} {/* recebe o que ta dentro da tag Card */}
        </div>
        <div className="Footer" style={{
            background: props.color || '#000'
        }}>
            {props.titulo}
        </div>
    </div>