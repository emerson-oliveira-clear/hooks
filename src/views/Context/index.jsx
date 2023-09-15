
import React, { useContext, useState } from 'react'

import DataContext from '../../data/DataContext'

const Context = props => {


    const {state, setState }= useContext(DataContext)


    function addNumber (delta){

        setState({
            ...state, 
            number: state.number + delta
        })
    }
    return (

        <div className='State'>
            <h1> Exemplo 1</h1>


            <div className='center'>
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => addNumber (+1)}>+1</button>

                    <button className="btn"  onClick={() => addNumber (-1)}>-1</button>
                </div>
            </div>

        </div>
    )

}

export default Context