import { useState } from 'react';


const Counter = () => {

    const [counter, setCount] = useState(0);

    return (
        <>

        <h1>{counter}</h1>
        <button onClick={()=>setCount(counter+1)}on>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>counter<=0 ? alert("You can decrement less then 0") : setCount(counter-1)}>Decrement</button>
        </>
    );
}


export default Counter;