import React, { useState } from "react";
const Signup = () => {
    return (
        <div>
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={data.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" value={data.password} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="text"
                        name="confirmPassword"
                        value={data.confirmPassword}
                    />
                </div>
                <div>
                    <label>Accept terms pf privacy of policy</label>
                    <input
                        type="text"
                        name="isAccepted"
                        value={data.isAccepted}
                    />
                </div>
                <a href="#">Login</a>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
