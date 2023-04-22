import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [enteredData, setEnteredData] = useState({
        mobileNumber: "",
        role: "",
        otp: "",
    });
    const [generatedOtp, setGeneratedOtp] = useState();
    const [formErrors, setFormErrors] = useState({});

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setEnteredData({ ...enteredData, [name]: value });
    };

    const random = Math.floor(Math.random() * 9000 + 1000);
    const otpGenerator = () => {
        setGeneratedOtp(random.toString());
        alert("One Time Password: " + random);
    };

    const validateFormData = () => {

        const error = {};

        if (enteredData.mobileNumber.trim().length !== 10) {
            error.mobileNumber = "Please enter valid 10 digit mobile number";
        }
        if (enteredData.otp.trim().length !== 4) {
            error.otp = "Please enter 4 digit OTP";
        } else if (generatedOtp !== enteredData.otp) {
            error.otp = "Invalid OTP"
        }
        setFormErrors({ ...error });
        return Object.keys(error) < 1;
    };

    const loginHandler = (event) => {
        event.preventDefault();


        if (
            enteredData.mobileNumber === "" ||
            enteredData.otp === "" ||
            enteredData.role === ""
        ) {
            return validateFormData();
        }

        let isValid = validateFormData();
        if (!isValid) {
            return;
        }
        if (generatedOtp === enteredData.otp) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("user", JSON.stringify(enteredData));
            navigate("/");

        }
    };
    return (
        <div className="flex">
            <div className="hidden lg:w-1/2 bg-[#201d75] min-h-screen text-white lg:flex lg:justify-center lg:items-center">
                hello
            </div>

            <form
                onSubmit={loginHandler}
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
                    onChange={inputChangeHandler}
                    hasError={formErrors}
                    errorMsg={formErrors.mobileNumber}
                    required="required"
                    className="w-1/2"
                />
                <select
                    name="role"
                    id="role"
                    className="block px-2.5 pb-2.5 pt-4 w-1/2 text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    onChange={inputChangeHandler}
                    hasError={formErrors}
                    errorMsg={formErrors.role}
                    required="required"
                >
                    <option value="">Select</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
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
                    onChange={inputChangeHandler}
                    hasError={formErrors}
                    errorMsg={formErrors.otp}
                    required="required"
                />
                <Button type="submit" title="Login" className="w-1/2 bg-[#201d75] hover:bg-[#121056]" />
            </form>
        </div>
    );
}
