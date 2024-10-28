import React from 'react'

const OpenAccount = ({ dispatch, isActive }) => {
    return (
        <div>
            <button className='btn' onClick={() => dispatch({ type: 'OpenAccount', payload: 500 })} disabled={isActive}>Open Account</button>
        </div>
    )
}

export default OpenAccount
