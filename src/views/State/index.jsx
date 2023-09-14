
import React, { useState } from 'react'

const State = props => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('digite algo...')

    return (

        <div className='State'>
            <h1> Exemplo 1</h1>
            
            <div className='center'>
                <span>{count}</span>
                <button className="btn" onClick={()=>setCount(count - 1)}>+1</button>

                <button className="btn" onClick={()=>setCount(count + 1)} >-1</button>

                <button className="btn" onClick={()=>setCount(1000)} >1000</button>
            </div>

            <h1> Exemplo 2</h1>
            
            <div className='center'>
              <input type="text" className='input'
                value={name} onChange={e =>setName(e.target.value)}/>
                <span className='text'>{name}</span>
            </div>



        </div>

    )
}

export default State