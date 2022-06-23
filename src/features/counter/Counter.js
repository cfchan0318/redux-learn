import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmt, setIncrementAmt] = useState(0);
  const addValue = Number(incrementAmt) || 0;

  const resetAll = () => {
    setIncrementAmt(0);
    dispatch(reset());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => { dispatch(increment()) }}>+</button>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
      </div>

      <input type="text" value={incrementAmt} onChange={(e) => { setIncrementAmt(e.target.value) }}></input>
      
      <div>
        <button onClick={() => { dispatch(incrementByAmount(addValue)) }}>add amount</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
      </div>
    </section>
  )
}

export default Counter;