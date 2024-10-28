import React from 'react'

const ReqLoan = ({ dispatch, isActive }) => {
    return (
        <div>
            <button disabled={!isActive} className='btn' onClick={() => dispatch({ type: "ReqLoan", payload: 5000 })}>Request Loan of 5000</button>
        </div>
    )
}

export default ReqLoan
