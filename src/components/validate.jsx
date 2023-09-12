export const validate = (type, data) => {
    // define errors
    const errors = {};

    // This is for Email
    if (!data.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email address is invalid";
    } else {
        delete errors.email;
    }

    // This is for ConfirmPassword
    if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm Password required";
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password do not match";
    } else {
        delete errors.confirmPassword;
    }

    if (type === "signup") {
        // This is for Name || username
        if (!data.name.trim()) {
            errors.name = "Username required";
        } else {
            delete errors.name;
        }

        // This is for Password
        if (!data.password) {
            errors.password = "Password required";
        } else if (data.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        } else {
            delete errors.password;
        }

        // This is for Checkbox
        if (data.isAccepted) {
            delete errors.isAccepted;
        } else {
            errors.isAccepted = "Accept our regulations";
        }
    }

    return errors;
};
