import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Card from './components/layout/Card'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicação/direta/Pai'
import Super from './components/comunicação/indireta/Super'

export default (props) => (

    <div className="App">


        <Card titulo="#08 Cominucação Indireta" color="#000">

            <Super />

        </Card>

        <Card titulo="#07 Cominucação Direta" color="#4298b5">

            <Pai sobrenome="Freitas" />

        </Card>

        <Card titulo="#06 Condicional com If" color="#FA6900">

            <CondicionalComIf numero={9} />

        </Card>

        <Card titulo="#05 Condicional v1" color="#e94c6f">

            <Condicional numero={10} />

        </Card>

        <Card titulo="#04 Repetição" color="#008bba">

            <Repeticao />

        </Card>

        <Card titulo="#03 Componente Com Filhos" color="#d96459">

            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bea</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>

        </Card>

        <Card titulo="#02 Componente Com Parametro" color="#ff85cb">

            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtítulo" />

            <ComParametro titulo="Opa"
                subtitulo="Epa" />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#92b06a">

            <Primeiro />

        </Card>

    </div>
)