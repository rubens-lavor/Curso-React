import React from 'react'

export default (props) => {
    return (
        <div>
            <label>Passo: </label>
            <input
                htmlFor="passoInput"
                type="number" value={props.passo}
                onChange={e => props.onPassoChange(+e.target.value)}
            />
        </div>
    )
}