import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import { validate } from "./validate";
import { notify } from "./Toast";

// styles
import styles from "./Signup.module.css";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    // baray in validation bayad yek state define konim,ke behesh dastresi dashte bashim. ke oon object error ro be ma mide save konimsh.
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // use useEffect to emal validations
    useEffect(() => {
        setErrors(validate(data, "login"));
        console.log(errors);
    }, [data, touched]);

    // FOCUS-HANDLER
    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };
    // ba onFocus va focusHandler  --> bara in use mikonim ke befahmim k masaln alan roy in input raftim va onjaro Click kardim.
    //va mikhahim toy in (setTouched) focusHandler har bar k roy in input ha click shod , bere toy state_touched va yek value ro add kone.
    //va hala har vaght roy in input ha click kardim yek key-value barash ijad mishe

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Loged in successfully", "success");
        } else {
            notify("invalid data", "error");
            setTouched({
                email: true,
                password: true,
            });
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>email</label>
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

                {/* PASSWORD */}
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

                <div className={styles.formButtons}>
                    <Link to="signup">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
