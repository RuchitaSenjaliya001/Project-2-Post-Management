import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import content from "../assets/content.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";

const initialValues = {
    mobileNumber: "",
    role: "",
    otp: "",
};

export default function Login() {
    const navigate = useNavigate()
    const { values, handleChange, touched, handleBlur, handleSubmit, errors, isSubmitting } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("user", JSON.stringify(values));
            navigate("/");
            action.resetForm()
        },
    });
    const [generatedOtp, setGeneratedOtp] = useState();
    const [formErrors, setFormErrors] = useState({});

    // const inputChangeHandler = (event) => {
    //     const { name, value } = event.target;
    //     setEnteredData({ ...enteredData, [name]: value });
    // };

    const random = Math.floor(Math.random() * 9000 + 1000);
    const otpGenerator = () => {
        setGeneratedOtp(random.toString());
        alert("One Time Password: " + random);
    };

    // const validateFormData = () => {

    //     const error = {};

    //     if (enteredData.mobileNumber.trim().length !== 10) {
    //         error.mobileNumber = "Please enter valid 10 digit mobile number";
    //     }
    //     if (enteredData.otp.trim().length !== 4) {
    //         error.otp = "Please enter 4 digit OTP";
    //     } else if (generatedOtp !== enteredData.otp) {
    //         error.otp = "Invalid OTP"
    //     }
    //     setFormErrors({ ...error });
    //     return Object.keys(error) < 1;
    // };

    // const loginHandler = (event) => {
    //     event.preventDefault();

    //     if (
    //         enteredData.mobileNumber === "" ||
    //         enteredData.otp === "" ||
    //         enteredData.role === ""
    //     ) {
    //         return validateFormData();
    //     }

    //     let isValid = validateFormData();
    //     if (!isValid) {
    //         return;
    //     }
    //     if (generatedOtp === enteredData.otp) {
    //         localStorage.setItem("isLoggedIn", true);
    //         localStorage.setItem("user", JSON.stringify(enteredData));
    //         navigate("/");

    //     }
    // };
    return (
        <div className="flex">
            <div className="hidden lg:w-1/2 bg-[#201d75] min-h-screen text-white lg:flex lg:justify-center lg:items-center">
                <img src={content} alt="" className="w-1/2" />
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center space-y-4"
            >
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Hello Again,</h1>
                    <p className="text-gray-500 pb-5">Welcome back, let's get started!</p>
                </div>
                <Input
                    type="number"
                    name="mobileNumber"
                    title="Mobile Number"
                    className="w-1/2"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={touched.mobileNumber}
                    errorMsg={errors.mobileNumber}
                />

                <select
                    name="role"
                    id="role"
                    className="block px-2.5 pb-2.5 pt-4 w-1/2 text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">Select a Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                {errors.role && touched.role ? <p className="text-red-500 text-sm">{errors.role}</p> : null}

                <Button
                    type="button"
                    title="Generate OTP"
                    className="w-1/2 bg-[#201d75] hover:bg-[#121056]"
                    onClick={otpGenerator}
                />
                <Input
                    type="text"
                    name="otp"
                    title="Enter OTP"
                    className="w-1/2"
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={touched.otp}
                    errorMsg={errors.otp}
                />
                <Button
                    type="submit"
                    title="Login"
                    className="w-1/2 bg-[#201d75] hover:bg-[#121056]"
                />
                {/* {isSubmitting ? <Button
                    type="submit"
                    title="Login"
                    className="w-1/2 bg-[#201d75] hover:bg-[#121056]"
                /> :
                    <button type="button" class="w-1/2 px-8 py-3 text-white font-semibold cursor-not-allowed bg-[#605f7d] rounded-md focus:outline-none" disabled>Login</button>} */}
            </form>
        </div>
    );
}
