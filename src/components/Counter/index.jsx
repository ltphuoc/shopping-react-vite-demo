import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CounterSlice';

const CounterFeature = () => {
  const [name, setName] = useState('phuoc');

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const handleIncrease = () => {
    const action = increase(10);
    console.log(action);
    dispatch(action);
  };
  const handleDecrease = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};

export default CounterFeature;
