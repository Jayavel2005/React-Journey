const List = ({ fruits, isCalories = false, category="Fruits" }) => {



    // Fruit List styling
    const fruitStyle = {
        backgroundColor: "rgb(93, 223, 255)",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "50px",
        margin: "10px",
        cursor: "pointer",
        display: "inline-block",
        textAlign: "center",
        padding: "50px"
    };


    const fruitListHeading = {
        backgroundColor: "rgb(255, 223, 55)",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "50px",
        margin: "10px",
        cursor: "pointer",
        textAlign: "center",
        padding: "50px"
    };

    const box = {
        padding: "50px",
        backgroundColor: "pink",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    }

    const list = fruits; {/* TotalList of fruits */ }


    const totalListItems = list.map((fruit) => (
        <div key={fruit.id} style={fruitStyle}>
            Fruit Name : {fruit.name.toUpperCase()}
            <br />
            Calories : {fruit.calories}
            <br />
            Vitamin : {fruit.vitamin}
        </div>
    ));

    const lowCalFil = list.filter((fruit) => fruit.calories <= 500); {/* Filtered List of fruits with calories <= 500 */ }

    const lowCalListItems = lowCalFil.map((fruit) => (
        <div key={fruit.id} style={fruitStyle}>
            Fruit Name : {fruit.name.toUpperCase()}
            <br />
            Calories : {fruit.calories}
            <br />
            Vitamin : {fruit.vitamin}
        </div>
    ))



    if (category === "Fruits") {
        return (
            isCalories ?
                <>
                    <h1 style={fruitListHeading}>Low Calories Fruits</h1>
                    <div style={box}>

                        {lowCalListItems}
                    </div>
                </>
                :
                <>
                    <h1 style={fruitListHeading}>Fruits List</h1>
                    <div style={box}>
                        {totalListItems}
                    </div>
                </>
        );
    }return(
        isCalories ?
        <>
            <h1 style={fruitListHeading}>Low Calories Vegetables</h1>
            <div style={box}>

                {lowCalListItems}
            </div>
        </> :
        <>
            <h1 style={fruitListHeading}>Vegetables List</h1>
            <div style={box}>
                {totalListItems}
            </div>
        </>
    );

}

export default List;

// Ascending Order (A-Z) Sorting Objects in JavaScript with their Strings

// Ascending Order (A-Z) Sorting Objects in JavaScript with their Strings
{/*const users = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 }
];

// Ascending Order (A-Z)
users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);

[
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 }
]


// Descending Order (Z-A)
users.sort((a, b) => b.name.localeCompare(a.name));

console.log(users);
 */}