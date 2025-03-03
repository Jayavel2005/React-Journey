import { useState } from "react";

const ColorPicker = () => {
    const [color, setColor] = useState("#060606");

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <p className="color-box" style={{ backgroundColor: color }}>{color}</p>
            <label htmlFor="colorInput">Choose a color:</label>
            <input 
                type="color" 
                id="colorInput" 
                onChange={(e) => setColor(e.target.value)} 
            />
        </div>
    );
}

export default ColorPicker;
