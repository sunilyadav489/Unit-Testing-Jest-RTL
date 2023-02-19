import React, {useState} from 'react';

const Counter = () => {
    let [counter, setCounter] = useState(1);

    const increamentCounter = () => {
        setCounter(counter+1);
    }

    const decreamentCounter = () => {
        setCounter(counter-1);
    }

  return (
    <>
        <h4>Counter Component (Testing Events and Snapshot)</h4>
        <div className='counterWrapper'>
            <button data-testid="increment" onClick={increamentCounter}>+</button>
            <p data-testid="counter">{counter}</p>
            <button data-testid="decrement" onClick={decreamentCounter}>-</button>
        </div>
    </>
    
  )
}

export default Counter