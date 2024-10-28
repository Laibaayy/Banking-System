import React from 'react'

const Content = ({ balance, loan }) => {
    return (
        <div>
            <p><strong>Balance:</strong> {balance}</p>
            <p><strong>Loan:</strong>  {loan}</p>
        </div>
    )
}

export default Content
