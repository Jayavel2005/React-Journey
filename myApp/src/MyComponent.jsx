import { useState } from "react";


const MyComponent = () => {


    const [foods, setFood] = useState(["Apple", "Orange", "Grapes","Banana"]);

    const textInput = document.querySelector(".text-input");


    const handleAddFood = () => {
        const food = textInput.value;
        if (food) {
            setFood(f=>[...foods, food]);
        }
        return alert("Please enter a food");
    }

    const removeFood = (food) => {
        const updatedFoods = foods.filter(f => f !== food);
        setFood(updatedFoods);
    }
    return (

        <div>
            <h1>Food List</h1>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => removeFood(food)}>{food}</li>
                )}
            </ul>
            <input type="text" className="text-input" placeholder="Add a new food" onKeyDown={(e) => {
                if (e.key === "Enter") {
                    const food = e.target.value
                    if (food) {
                        setFood([...foods, food]);
                        e.target.value = "";
                    } else {
                        return alert("Please enter a food");
                    }
                }
            }} />
            <button className="add-button" onClick={() => {
                const food = textInput.value;
                if (food) {
                    setFood([...foods, food]);
                    textInput.value = "";
                }
                else {
                    return alert("Please enter a food");
                }
            }}>Add</button>
        </div>
    );
}

export default MyComponent;