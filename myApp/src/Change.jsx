import { useState } from 'react';
import image from './assets/react.svg';





const Change = () => {


    const [name, setName] = useState("Jayavel");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");

    const [selectedValue, setSelectedValue] = useState("Option1");



    return (
        <div>
            <h1>Change</h1>
            <input type="text" onChange={(event) => { setName(event.target.value) }} />
            <h2>Name: {name}</h2>
            <input type="number" onChange={(event) => {
                const value = event.target.value;
                if (value <= 0) {
                    alert("Age cannot be Negative");
                } else {
                    setAge(value);
                }
            }} />
            <p>Age: {age}</p>
            <textarea name="" id="" onChange={(event) => {
                setComment(event.target.value);
            }}></textarea>
            <p>Comment: {comment}</p>

            <div>
                <h1>Items List</h1>

                <select name="" id="" value={selectedValue} onChange={(event) => {
                    setSelectedValue(event.target.value);
                }}>
                    <option value="">Select an option</option>
                    <option value="Sanjay">Sanjay</option>
                    <option value="Infant">Infant</option>
                    <option value="Abdhur">Abdhur</option>
                </select>
                <p>Option: {selectedValue}</p>
            </div>
            <div>
                <h1>Radio Buttons</h1>
                <label>
                    <input type="radio" value="Option1" checked={selectedValue === "Option1"} onChange={(event) => {
                        setSelectedValue(event.target.value);
                    }} />
                    Option 1
                </label>
                <label>
                    <input type="radio" value="Option2" checked={selectedValue === "Option2"} onChange={(event) => {
                        setSelectedValue(event.target.value);
                    }} />
                    Option 2
                </label>
                <label>
                    <input type="radio" value="Option3" checked={selectedValue === "Option3"} onChange={(event) => {
                        setSelectedValue(event.target.value);
                    }} />
                    Option 3
                </label>
                <p>Selected Radio Option: {selectedValue}</p>
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default Change;