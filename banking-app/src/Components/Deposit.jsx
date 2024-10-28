import React from 'react'

const Deposit = ({ dispatch, isActive }) => {
    return (
        <div>
            <button disabled={!isActive} className='btn' onClick={() => dispatch({ type: 'Deposit', payload: 150 })}>Deposit 150</button>
        </div>
    )
}

export default Deposit
