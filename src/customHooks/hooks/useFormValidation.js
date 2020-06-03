import {useEffect, useState} from "react";

function useFormValidation(initialState, validate, afterPass) {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(function () {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0;
            if (noErrors) {
                afterPass();
                setIsSubmitting(false);
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }
    
    function handleBlur() {
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setIsSubmitting(true);
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
    }
}

export default useFormValidation;
