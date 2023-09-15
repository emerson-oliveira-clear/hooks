import React from 'react'
import './Menu.css'


const Menu = props => (

    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/About">Sobre</a>
                </li>
                <li>
                    <a href="/Effect">Effect</a>
                </li>
                <li>
                    <a href="/State">State</a>
                </li>
                <li>
                    <a href="/Callback">Callback</a>
                </li>
                
                <li>
                    <a href="/Context">Context</a>
                </li>
                
                <li>
                    <a href="/Hook">Hook</a>
                </li>
                
                <li>
                    <a href="/Memo">Memo</a>
                </li>
                
                <li>
                    <a href="/Reducer">Reducer</a>
                </li>
                
                <li>
                    <a href="/Ref">Ref</a>
                </li>
                
                
            </ul>
        </nav>
    </aside>

)

export default Menu