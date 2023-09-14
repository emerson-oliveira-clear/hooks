import React, { useEffect, useRef, useState } from 'react'



const Ref = props => {

    const [value1, setValue1] = useState('')
    const count = useRef(0)

    useEffect(function(){

        count.current = count.current + 1

    },[value1])
   

    return (

        <div className='Effect'>
            <h1>useRef</h1>
            <p>Bora lá</p>

            <div className='center'>
                <div>
                    <span className='text'>Valor: </span>
                    <span className='text'>{value1} [</span>
                    <span className='text'>{count.current}</span>
                    <span className='text'>]</span>
                </div>

                <input type="text" className='input'
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>

        </div>

    )
}

export default Ref