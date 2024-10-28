import React from 'react'

const PayLoan = ({ dispatch, isActive }) => {
    return (
        <div>
            <button disabled={!isActive} className='btn' onClick={() => dispatch({ type: "PayLoan" })}>Pay Loan</button>
        </div>
    )
}

export default PayLoan
