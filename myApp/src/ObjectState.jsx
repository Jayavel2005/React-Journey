import { useState } from "react";


const ObjectState = () => {

    const [user, setUser] = useState({
        name: "John",
        age: 25,
        phoneNumber: {
            mobile: 6379274909,
            office: 7200642668,
            home: 8668171635
        }
    });

    return (
        <div className="main-container">
            <h1>Object State</h1>
            <div className="object-state">


                <div className="left-side">
                    {/* Name */}
                    <div className="Name box">
                        <label htmlFor="name">
                            <input type="text" name="name" id="name" value={user.name} className="name-input" onChange={(event) => {
                                setUser({ ...user, name: event.target.value })
                            }} />
                        </label>
                        <p>Name: {user.name}</p>
                    </div>

                    {/* Age */}
                    <div className="Age box">
                        <label htmlFor="age">
                            <input type="number" name="age" id="age" value={user.age} className="name-input" onChange={(event) => {
                                setUser({ ...user, age: event.target.value })
                            }} />
                        </label>
                        <p>Age: {user.age}</p>
                    </div>
                </div>

                <div className="right-side">
                    {/* for mobile phone Number */}
                    <div className="box mobile">
                        <label htmlFor="phoneNumberMobile">
                            <input type="text" name="phoneNumberMobile" id="mobilePhoneNumber" value={user.phoneNumber.mobile} className="name-input" onChange={(event) => {
                                setUser({ ...user, phoneNumber: { ...user.phoneNumber, mobile: event.target.value } })
                            }} />
                            <p>Mobile: {user.phoneNumber.mobile}</p>
                        </label>
                    </div>

                    {/* for home mobile number */}

                    <div className="box mobile">
                        <label htmlFor="phoneNumberMobile">
                            <input type="text" name="phoneNumberMobile" id="mobilePhoneNumber" value={user.phoneNumber.office} className="name-input"  onChange={
                                (event) => {
                                    setUser({...user,phoneNumber:{...user.phoneNumber,office:event.target.value}})
                                }
                            }/>
                            <p>Office: {user.phoneNumber.office}</p>
                        </label>
                    </div>

                    {/* for office mobile number */}

                    <div className="box mobile">
                        <label htmlFor="phoneNumberMobile">
                            <input type="text" name="phoneNumberMobile" id="mobilePhoneNumber" value={user.phoneNumber.home} className="name-input"  onChange={
                               (event) =>{
                                setUser({...user,phoneNumber:{...user.phoneNumber,home:event.target.value}})
                               }
                            }/>
                            <p>Home: {user.phoneNumber.home}</p>
                        </label>
                    </div>
                </div>




            </div>
                <button onClick={()=>{
                    console.log(user);
                }}>Click to See the Details</button>
        </div>
    );
}

export default ObjectState;