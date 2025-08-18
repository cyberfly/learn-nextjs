"use client";

import { use, useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(1);

    console.log('count', count);

    return (
        <>
            <h1 className="text-5xl font-bold">Counter {count}</h1>

            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        </>
    );
}
 
export default Counter;