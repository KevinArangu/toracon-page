import { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState(0)

    const handleDecrement = () => setState(oldValue => oldValue - 1)
    const handleIncrement = () => setState(oldValue => oldValue + 1)
  
    return (
    <div className='inline-flex items-center'>
        <button  onClick={handleDecrement}>-1</button>
        <h1 className='border px-3 py-1'>{state}</h1>
        <button onClick={handleIncrement}>+1</button>
    </div>
  )
}

export default Counter