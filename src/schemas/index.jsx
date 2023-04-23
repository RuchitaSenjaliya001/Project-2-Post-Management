import * as Yup from 'yup';


export const loginSchema = Yup.object({
    mobileNumber: Yup.number().required('Please enter mobile number'),
    otp: Yup.number().required('Please enter valid OTP'),
    role: Yup.string()
        .oneOf(
            ['admin', 'user'],
            'Invalid role'
        )
        .required('Please select role.'),
    // role: Yup.string().required('Please select role.')

})