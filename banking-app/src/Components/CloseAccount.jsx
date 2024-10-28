import React from 'react'

const CloseAccount = ({ dispatch, isActive }) => {
    return (
        <div>
            <button disabled={!isActive} className='btn' onClick={() => dispatch({ type: "CloseAccount" })}>Close Account</button>
        </div>
    )
}

export default CloseAccount
