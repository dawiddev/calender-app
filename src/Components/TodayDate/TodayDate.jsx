import React from 'react'

function TodayDate() {
    return (
        <div>
            <h1>{new Date().toLocaleString()}</h1>
        </div>
    )
}

export default TodayDate
