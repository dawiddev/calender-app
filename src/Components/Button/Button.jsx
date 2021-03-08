import React from 'react'

export default function Button(props) {
    const {action, handleSubmit} = props
    return (
        <div>
             <button className="btn" onClick={handleSubmit} type="submit">
             {action}
            </button>
        </div>
    )
}
