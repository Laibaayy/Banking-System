import React from 'react'

const Withdraw = ({ dispatch, isActive }) => {
    return (
        <div>
            <button disabled={!isActive} className='btn' onClick={() => dispatch({ type: 'withdraw', payload: 50 })}>Withdraw 50 </button>
        </div>
    )
}

export default Withdraw
