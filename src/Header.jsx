import React from 'react'


function Head(props) {
    return (
        <>
            <div className='pageheader'>
                <h2>{props.head}</h2>
            </div>
            
        </>
    )
}

export default Head;