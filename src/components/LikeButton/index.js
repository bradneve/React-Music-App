import React, { useState } from 'react'

export function LikeButton() {
    const [ faved, setFaved ] = useState('LIKE');
    
    const handleFave = e => {
        e.stopPropagation()
        if (faved === 'LIKE'){
        setFaved('UNLIKE')
        e.target.style.backgroundColor = 'green'
    } else {
        setFaved('LIKE')
        e.target.style.backgroundColor = 'grey'
        
    }
}

  return (
    <button style={{margin: '30px'}}
    onClick={handleFave}
    role="switch"
    aria-checked="true"
    className="btn btn-secondary"
    >{faved}</button>
  )
}
