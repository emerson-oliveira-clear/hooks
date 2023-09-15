import React, { useReducer } from 'react'

const initialState = {
    card: [],
    products: [],
    user: null,
    number: 0
}

function reducer(state, action) {

    switch (action.type) {

        case 'numberAdd2':
            return { ...state, number: state.number + 2 }

        case 'login':
            return { ...state, user: { name: action.payload } }

        default:
            return state
    }


}


const Reducer = props => {


    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <div className="useReducer">
            {state.user ?
                <span className='text'>{state.user.name}</span> : <span className='text'>sem usuario</span>
            }
            <br />
            <span className='text'>{state.number}</span>

            <div>
                <button className="btn" onClick={() => dispatch({ type: 'login', payload:'maria' })}>Login</button>

                <button className="btn" onClick={() => dispatch({ type: 'numberAdd2' })}> +2</button>

            </div>

        </div>


    )
}

export default Reducer