import React, {useState} from 'react';
import useFormValidation from "../hooks/useFormValidation";
import validateAuth from "./validateAuth";

const INITIAL_STATE = {
    email: "",
    password: "",
};

function DemoUseFormValidation(props) {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
    } = useFormValidation(INITIAL_STATE, validateAuth, register);

    function register() {
        console.log("Register: ", values);
    }

    return (
        <div className="container">
            <h1>Register Here</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    autoComplete="off"
                    placeholder="Your email address"
                />
                { errors.email && <p>{errors.email}</p> }
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="Choose a safe password"
                />
                { errors.password && <p>{errors.password}</p> }
                <div>
                    <button disabled={isSubmitting} type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default DemoUseFormValidation;