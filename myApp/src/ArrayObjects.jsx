import { useState } from "react";


const ArrayObjcts = () => {
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("Jay");
    const [carModel, setModel] = useState("Vel");

    const addCar = () => {
        const newCar = {
            carYear,
            carMake,
            carModel
        }

        setCars(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    const removeCar = (index) =>{
        setCars(cars.filter((_, i)=> i !== index));
    }

    return (
        <div>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={()=>removeCar(index)}>
                        {car.carYear} {car.carMake} {car.carModel}
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" placeholder="Enter car Make" onChange={(event) => {
                    setMake(event.target.value);
                } } value={carMake} />
                <input type="text" placeholder="Enter car Model" onChange={(event) => {
                    setModel(event.target.value);
                }} value={carModel}/>
                <input type="number" placeholder="Enter car Year" onChange={(event) => {
                    setYear(event.target.value);
                }} value={carYear} />

                <button onClick={addCar}>Add Car</button>
            </div>
            <div className="carDetials">
                <h1>Car Details</h1>
                <hr />
                <p>{carMake}</p>
                <p>{carModel}</p>
                <p>{carYear}</p>
            </div>
        </div>
    );
}

export default ArrayObjcts;