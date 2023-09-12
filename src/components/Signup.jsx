import React, { useEffect, useState } from "react";
import { validate } from "./validate";

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(validate(data));
        console.log(errors);
    }, [data]);

    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {
            setData({ ...data, [e.target.name]: e.target.checked });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
        console.log(data);
    };

    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Accept terms pf privacy of policy</label>
                    <input
                        type="text"
                        name="isAccepted"
                        value={data.isAccepted}
                        onChange={changeHandler}
                    />
                </div>
                <a href="#">Login</a>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
