import React, {useState} from 'react'


export default props => {

    const [nome, setNome] = useState('Pedro')
    //useState retorna um array de dois elementos: o valor e a função que retorna o valor
    return (
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome}
                onChange={e => setNome(e.target.value)} />{/** readOnly ou onChange */}
        </>
    )
}