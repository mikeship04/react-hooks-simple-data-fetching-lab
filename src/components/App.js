import React from 'react'
import { useEffect, useState } from 'react'

function App() {
    const [dogState, setDogState] = useState(null)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => {
            setDogState(data.message)
        })
    }, [])

    if (!dogState) return <p>Loading...</p>

  return <img src={dogState} alt="A Random Dog"/>
}

export default App