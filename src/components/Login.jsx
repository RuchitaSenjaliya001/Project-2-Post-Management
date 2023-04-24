import React, { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import content from "../assets/content.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
    mobileNumber: "",
    role: "",
    otp: "",
};

export default function Login() {
    const navigate = useNavigate();
    const [generatedOtp, setGeneratedOtp] = useState();

    const random = Math.floor(Math.random() * 9000 + 1000);
    const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    const loginSchema = Yup.object({
        mobileNumber: Yup.string()
            .matches(mobileRegex, "Phone number is not valid")
            .required("Please enter mobile number"),
        otp: Yup.number()
            .required("Please enter valid OTP")
            .test("Notequal", "OTP does not match", (val) => {
                // console.log(val, generatedOtp);
                return val == generatedOtp;
            }),
        role: Yup.string()
            .oneOf(["admin", "user"], "Invalid role")
            .required("Please select role."),
    });

    const otpGenerator = () => {
        setGeneratedOtp(random.toString());
        alert("One Time Password: " + random);
    };

    const {
        values,
        handleChange,
        touched,
        handleBlur,
        handleSubmit,
        errors,
        isValidating,
        isValid,
        dirty,
        isSubmitting,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {

            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("user", JSON.stringify(values));
            navigate("/");
            action.resetForm();
        },
    });

    return (
        <div className="flex">
            <div className="hidden lg:w-1/2 bg-[#201d75] min-h-screen text-white lg:flex lg:justify-center lg:items-center">
                <img src={content} alt="" className="w-1/2" />
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full lg:w-1/2 min-h-screen flex flex-col items-center justify-center space-y-4"
            >
                {/* {console.log(isSubmitting, isValid, isValidating, dirty)}
                {console.log(isSubmitting && isValid && isValidating)} */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold pb-2">Hello Again,</h1>
                    <p className="text-gray-500 pb-5">Welcome back, let's get started!</p>
                </div>
                <Input
                    type="text"
                    name="mobileNumber"
                    title="Mobile Number"
                    className="w-1/2"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isTouched={touched.mobileNumber}
                    errorMsg={errors.mobileNumber}
                />
                <div className="w-1/2">
                    <select
                        name="role"
                        id="role"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        value={values.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="">Select a Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    {errors.role && touched.role ? (
                        <p className="text-red-500 text-sm">{errors.role}</p>
                    ) : null}
                </div>

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
                    // disabled={isValid}
                    className="w-1/2 bg-[#201d75] hover:bg-[#121056] disabled:bg-[#7472ad] disabled:cursor-not-allowed"
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
