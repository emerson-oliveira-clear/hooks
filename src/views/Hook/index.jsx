
import React, { useState } from 'react'




const Hook = props => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    return (

        <div className='State'>
            <h1> Exemplo 1</h1>

            <div className='center'>
                <input type="number" className='input'
                    value={n1} onChange={e => setN1(parseInt(e.target.value))} />

                <input type="number" className='input'
                    value={n2} onChange={e => setN2(parseInt(e.target.value))} />


                <input type="number" className='input'
                    value={n3} onChange={e => setN3(parseInt(e.target.value))} />

            </div>

        </div>

    )
}

export default Hook