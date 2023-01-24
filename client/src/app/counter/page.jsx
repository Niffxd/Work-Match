'use client'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from "../../features/slices/counterSlice";
import { RootState } from "../store/store";
import { useState } from "react";

function page() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("10");

  return (
    <>
      <div className="flex justify-center pt-[20%] pb-10">
        <button 
          className="w-40 bg-red-500 rounded-full mr-5 border-2 border-black"
          onClick={() => dispatch(decrement())}>
          [-1] DECREMENT
        </button>
        <button 
          className="w-40 bg-green-500 rounded-full border-2 border-black" 
          onClick={() => dispatch(increment())}>
          [+1] INCREMENT
        </button>
      </div>
      <p className="text-center text-5xl font-bold">Count = {count}</p>
      <div className="flex justify-center space-x-5 pt-12">
        <button
          className="w-40 bg-blue-500 rounded-full border-2 border-black"
          onClick={() => dispatch(decrementByAmount(+amount))}>
          [-] AMOUNT
        </button>
        <input
          title="amount"
          className="w-30 bg-[darkseagreen] rounded-full text-center border-2 border-black"
          type="text"
          defaultValue={amount}
          onChange={(e) => {setAmount(e.target.value);}}
        />
        <button
          className="w-40 bg-[saddlebrown] rounded-full border-2 border-black"
          onClick={() => dispatch(incrementByAmount(+amount))}>
          [+] AMOUNT
        </button>
      </div>
    </> 
  )
}

export default page;