import React from 'react'

const Cinputs = ({ label }) => {
    return (
        <div className="input1">
            <label htmlFor={label}>
                {label}
            </label>
            <input type="text" placeholder={label} />
        </div>
    )
}

export default Cinputs