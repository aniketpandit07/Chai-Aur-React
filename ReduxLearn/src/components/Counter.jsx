import React from 'react'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <button>Increament</button>  <br />
      <div>{count}</div>
      <button>DecreMNET</button>
    </div>
  )
}

export default Counter
