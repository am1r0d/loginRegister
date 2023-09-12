import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import { validate } from "./validate";
import { notify } from "./Toast";

// Styles
import styles from "./Signup.module.css";

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
        setErrors(validate(data, "signup"));
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
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>SignUp</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input
                        className={
                            errors.name && touched.name
                                ? styles.uncompleted
                                : styles.formInput
                        }
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                    {/* this means if there was an error, put it in the Span Tag and check error وif there is an error,it will show this error */}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                        className={
                            errors.email && touched.email
                                ? styles.uncompleted
                                : styles.formInput
                        }
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
                <div className={styles.formField}>
                    <label>Password</label>
                    <input
                        className={
                            errors.password && touched.password
                                ? styles.uncompleted
                                : styles.formInput
                        }
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.password && touched.password && (
                        <span>{errors.password}</span>
                    )}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                        className={
                            errors.confirmPassword && touched.confirmPassword
                                ? styles.uncompleted
                                : styles.formInput
                        }
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <span>{errors.confirmPassword}</span>
                    )}
                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I Accept terms pf privacy of policy</label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    {errors.isAccepted && touched.isAccepted && (
                        <span>{errors.isAccepted}</span>
                    )}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
