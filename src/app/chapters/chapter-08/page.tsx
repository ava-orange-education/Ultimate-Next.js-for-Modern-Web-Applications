
'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './features/counterSlice';
import { AppDispatch, RootState } from './store';

export default function CounterPage() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const [amount, setAmount] = useState<number>(0);

  // Client-side hydration (SSR is not supported in app/ directory)
  useEffect(() => {
    dispatch(incrementByAmount(5));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Counter: {count}</h1>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decrement
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-2"
            placeholder="Enter amount"
          />
          <button
            onClick={() => dispatch(incrementByAmount(amount))}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Increment by Amount
          </button>
        </div>
      </div>
    </div>
  );
}