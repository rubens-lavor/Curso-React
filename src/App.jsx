import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Card from './components/layout/Card'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default (props) => (

    <div className="App">

        <Card titulo="#06 Condicional com If">

            <CondicionalComIf numero={9} />

        </Card>

        <Card titulo="#05 Condicional v1">

            <Condicional numero={10} />

        </Card>

        <Card titulo="#04 Repetição">

            <Repeticao />

        </Card>

        <Card titulo="#03 Componente Com Filhos">

            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bea</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>

        </Card>

        <Card titulo="#02 Componente Com Parametro">

            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />

            <ComParametro titulo="Opa"
                subtitulo="Epa" />
        </Card>

        <Card titulo="#01 Primeiro Componente">

            <Primeiro />

        </Card>

    </div>
)