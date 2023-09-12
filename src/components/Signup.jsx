import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "./validate";
import { notify } from "./Toast";

const Signup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false,
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data));
        console.log(errors);
    }, [data, touched]);

    const changeHandler = (e) => {
        if (e.target.name === "isAccepted") {
            setData({ ...data, [e.target.name]: e.target.checked });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
        console.log(data);
    };

    // We want it to show its errors with the focus whenever that name is clicked, and not to show us the default error.
    // using touched and focusHandler
    // for this purpose, we will add (example) && name to it
    const focusHandler = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You signed in successfully", "success");
        } else {
            notify("invalid data", "error");
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            });
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                    {/* this means if there was an error, put it in the Span Tag and check error وif there is an error,it will show this error */}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.email && touched.email && (
                        <span>{errors.email}</span>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password && (
                        <span>{errors.password}</span>
                    )}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <span>{errors.confirmPassword}</span>
                    )}
                </div>
                <div>
                    <label>Accept terms pf privacy of policy</label>
                    <input
                        type="text"
                        name="isAccepted"
                        value={data.isAccepted}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.isAccepted && touched.isAccepted && (
                        <span>{errors.isAccepted}</span>
                    )}
                </div>
                <div>
                    <a href="#">Login</a>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
