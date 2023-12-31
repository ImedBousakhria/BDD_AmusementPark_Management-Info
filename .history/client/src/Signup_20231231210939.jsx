import React from 'react';
import "./app.css";
import bg from "./assets/side-bg.jpg";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupPage = () => {
    return (
        <>
        <div className=" flex h-screen ">
        <section className=" basis-[65%] bg-customPrimary flex items-center justify-center">
        <img src={bg} alt="" />
        </section>
        <section className=" basis-[35%]">
        <div className='signup-message'>
            <h2>Sign UP</h2>
            <p>Please enter your details.</p>
        </div>
        <SignupForm />
        </section>
        </div>
        </>
    )
}

const initialValues = {
    firstname : '',
    lastname : '',
    email : '',
    password : '',
    cpassword : '',
    phonenum : ''
};

const passwordRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,}$");
const numRegex = new RegExp("^\d{10}$");

const signupSchema = Yup.object({
    firstname : Yup.string().min(3).required("Please enter your first name"),
    lastname : Yup.string().min(3).required("Please enter your last name"),
    email : Yup.string().email("Please enter a valid email").required("Please enter your email"),
    password : Yup.string().min(8,"Your password must be at least 8 characters long").matches(passwordRegex,"Please enter a valid password").required("Please enter a password"),
    cpassword : Yup.oneOf([Yup.ref(password)],"Password does not match").required("Please confirm your password"),
    phonenum : Yup.string().matches(numRegex,"Please enter a valid phone number").required("Please enter your phone number")
}); 

/*This is where things get messy! didn't apply any CSS yet, Soooo much regret of not learning tailwind now m gonna suffer with dimensions*/

const SignupForm = () => {

    const onSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    }

    return (
        <>
        <div className='SF'>
        <Formik initialValues={initialValues} validationSchema={signupSchema} onSubmit={onSubmit}>
            {({errors, touched}) => (
            <Form className='signup-form'>
            <label htmlFor='firstname'>First Name</label>
            <Field type='text' name='firstname' />
            <div className='error-conatiner'>
                {errors.firstname && touched.firstname && (
                    <p className='form-error'>{errors.firstname}</p>
                )}
            </div>
            <label htmlFor='lastname'>Last Name</label>
            <Field type='text' name='lastname' />
            <div className='error-conatiner'>
                {errors.lastname && touched.lastname && (
                    <p className='form-error'>{errors.lastname}</p>
                )}
            </div>
            <label htmlFor='email'>Email</label>
            <Field type='email' name='email' />
            <div className='error-conatiner'>
                {errors.email && touched.email && (
                    <p className='form-error'>{errors.email}</p>
                )}
            </div>
            <label htmlFor='password'>Password</label>
            <Field type='password' name='password' />
            <div className='error-conatiner'>
                {errors.password && touched.password && (
                    <p className='form-error'>{errors.password}</p>
                )}
            </div>
            <label htmlFor='cpassword'>Confirm password</label>
            <Field type='password' name='cpassword' />
            <div className='error-conatiner'>
                {errors.cpassword && touched.cpassword && (
                    <p className='form-error'>{errors.cpassword}</p>
                )}
            </div>
            <label htmlFor='phonenum'>Phone number</label>
            <Field type='text' name='phonenum' />
            <div className='error-conatiner'>
                {errors.phonenum 
                && touched.phonenum && (
                    <p className='form-error'>{errors.phonenum}</p>
                )}
            </div>
            <button type='submit'>Submit</button>
            </Form>)}
        </Formik>
        </div>
        </>
    )
}

export default SignupPage;
