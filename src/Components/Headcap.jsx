import React from 'react'

const Headcap = ({ img }) => {
    return (
        <div className="image-1">
            <img src={img} alt="" />
            <p>Header</p>
            <p>Caption</p>
        </div>
    )
}

export default Headcap