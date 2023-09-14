import React, { useEffect, useState } from 'react'

function calcFatorial(num){
    const n = parseInt(num)

    if( n < 0) return -1
    if( n===0) return 1
    return calcFatorial(n-1)*n

}

const Effect = props => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState (1)

   useEffect(function(){

    setFatorial(calcFatorial(number));

   },[number])

    return  (

        <div className='Effect'>
            <h1>Effect</h1>
            <p>Bem vindo</p>

            <div className='center'>

                <div>
                    <span className='text'> fatorial </span>
                    <span className="text">{fatorial  === -1 ?'não existe':fatorial}</span>
                </div>

                <input type="number" className="input"
                    value={number} onChange={e => setNumber(e.target.value)}
                />

            </div>

           

        </div>

    )
}

export default Effect