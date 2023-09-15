
import React, { useState } from 'react'

const Callback = props => {

    const[count,setCount] = useState(0)

    function inc (delta){

        setCount(count + delta)

    }

    return (

        <div className='State'>
            <h1> Exemplo 1</h1>

           <div className='center'>
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc(6) }>+6</button>
                    
                    <button className="btn" onClick={() => inc(12) }>12</button>

                    <button className="btn" onClick={() => inc(18) }>18</button>
                </div>
           </div>
        </div>

    )
    
}

export default Callback