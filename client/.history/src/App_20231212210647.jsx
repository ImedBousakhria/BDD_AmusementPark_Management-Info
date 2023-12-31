import { useState } from "react";
import "./App.css";
import bg from "./assets/side-bg.jpg";
import google from "./assets/icons/Google.svg";

function App() {

    /*  const loginUser = async (email, password) => {
      try {
        const response = await axios.post("http://localhost:3000/user/login", {
          email: email,
          password: password,
        });
        console.log(response.data);
        const { token, user } = response.data;
        setToken(token);
        setUser(user);
  
        localStorage.setItem("token", token);
        <Link to={"/"} />;
        return { token, user };
      } catch (error) {
        // setErrors((prev) => {
         // return { ...prev, password: "incorrect password" };
        //}); 
        if (error.response.data.errors.email === "That email is not registered") {
          console.log("hey");
          setErrors((prev) => {
            return { ...prev, email: "That email is not registered" };
          });
        } else if (
          error.response.data.errors.password === "That password is incorrect"
        ) {
          setErrors((prev) => {
            return { ...prev, password: "incorrect password" };
          });
        }
  
        console.log(error.response.data.errors.email);
        return { error: error.response.data };
      }
    };
   */



  /* const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must include at least one letter and one number"
      ),
  }); */


  const handleSubmit = async (values) => {
    // Handle form submission logic here
    console.log("Form values:", values);
    setErrors(null);

    /*  const { token, user, error } = await loginUser(
      values.email,
      values.password
    );

    if (error) {
      console.log("Login error:", error);
    } else {
      console.log("Login success:", user, token);
      // redirect to dashboard or some other page
    }
    if (error.email === 'incorrect email') {
      console.log('hey')
      setErrors((prev) => {
        return { ...prev, email: "That email is not registered" };
      });
    } else if (error.password === 'incorrect password') {
      setErrors((prev) => {
      return { ...prev, password: "incorrect password" };
    });
    } */
  };
  return (
    <div className=" flex h-screen ">
      {/* grandparent wrapper */}
      <div className=" basis-[60%] ">
        {/* left side bg */}
        <img src={bg} className=" h-screen w-full object-cover" alt="" />
      </div>
      <div className=" basis-[40%] flex flex-col h-screen items-center">
        {/* right side */}
        <header className=" text-center m-auto">
          {/* Welcome */}
          <h1 className=" tracking-wider font-semibold text-3xl">
            Welcome Back !
          </h1>
          <small className=" text-gray-500">Please enter your details</small>
        </header>
        <form className=" basis-[60%] w-[65%]" action="">
          {/* form inputs */}
          <div className=" flex flex-col ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className=" border-b border-customDark rounded-sm outline-none px-1 py-1.5"
              placeholder="Ex: email_81194@gmail.com"
            />
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className=" border-b border-customDark rounded-sm outline-none px-1 py-1.5"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between mb-9 mt-4">
            {/* password actions */}
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className=" text-xs">
                Remember me
              </label>
            </div>

            <a className=" text-sm opacity-70 cursor-pointer">
              Forgot Password ?
            </a>
          </div>

          <div className="flex flex-col items-center gap-4  ">
            {/* login methods */}
            <button
              className=" bg-customDark rounded-full p-2.5 tracking-wider font-medium text-white w-full"
              type="submit"
            >
              Log in
            </button>
            <a
              href=""
              className=" bg-customGray rounded-full p-2.5 tracking-wider font-medium justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
            >
              <img src={google} className=" w-[5%] " alt="" />{" "}
              <span className=" min-w-max">Log in with Google</span>
            </a>
          </div>
        </form>
        <footer className=" basis-[10]">
          <span className=" text-sm opacity-70">Don't have an account?</span>{" "}
          <a className=" cursor-pointer text-sm font-semibold">Sign up</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
