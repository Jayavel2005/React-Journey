import { useState } from "react";


const NameChanger = () => {
    const [name, setName] = useState("Guest");

    const [count, SetCount] = useState(0);


    const [isEmployed, setIsEmployed] = useState(false);


    const updateCount = () => {
        SetCount(count + 1);
    }

    const decrementCount = () => {

        if(count <= 0){
            alert("Count cannot be less than 0");
            SetCount(0);
        }else{
            SetCount(count - 1);
        }
    }

    const changeName = (user) => {
        setName(user);
    }

    return (
        <>
            <div>
                <h1>Name : {name}</h1>
                <button onClick={() => changeName("Sanjay")}>Sanjay</button>
                <button onClick={() => changeName("Jayavel")}>Jayavel</button>
                <button onClick={() => changeName("Infant Akash")}>Infant Akash</button>
                <button onClick={() => changeName("Abdhur Rahman")}>Abdhur Rahman</button>
                <button onClick={() => changeName("Tamil Selvan")}>Tamil Selvan</button>
                <button onClick={() => changeName("Selva Pranesh")}>Selva Pranesh</button>
            </div>
            <div>
                <h1>Count : {count}</h1>
                <button onClick={updateCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
            </div>
            <div>
                <h1>Is Employed : {isEmployed ? "True" : "False"}</h1>
                <button onClick={() => setIsEmployed(!isEmployed)}>Toogle</button>
            </div>
        </>
    )
}


export default NameChanger;