import React, { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [enteredData, setEnteredData] = useState({
        mobileNumber: '',
        otp: ''
    })
    const mobileNumberChange = (event) => {
        setEnteredData({ mobileNumber: event.target.value })
    }
    const otpChange = (event) => {
        setEnteredData({ otp: event.target.value })
    }
    const random = Math.floor(Math.random() * 9000 + 1000);
    const otpGenerator = () => {
        alert("One Time Password: " + random)
    }
    const loginHandler = (event) => {
        event.preventDefault();
        if (random === enteredData.otp) {
            setIsLoggedIn(true)
        }
    }
    return (
        <div class="flex">
            <div class="w-1/2 bg-[#201d75] min-h-screen text-white flex justify-center items-center">
                hello
            </div>

            <form onSubmit={loginHandler} className='w-1/2 min-h-screen flex flex-col items-center justify-center space-y-4'>
                <div className='text-center'>
                    <h1 class="text-3xl font-bold pb-2">Hello Again,</h1>
                    <p class="text-gray-500 pb-5">Welcome back, let's get started!</p>
                </div>
                <Input type="number" title="Mobile Number" value={enteredData.mobileNumber} onChange={mobileNumberChange} />
                <select name="role" id="role" className='block px-2.5 pb-2.5 pt-4 w-1/2 text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 focus:outline-none focus:ring-0 focus:border-blue-600'>
                    <option value="">Select</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <Button title="Generate OTP" className="w-1/2 bg-[#201d75]" onClick={otpGenerator} />
                <Input type="number" title="Enter OTP" value={enteredData.otp} onChange={otpChange} />
                <Button title="Login" className="w-1/2 bg-[#201d75]" />
            </form>
        </div>
    )
}
