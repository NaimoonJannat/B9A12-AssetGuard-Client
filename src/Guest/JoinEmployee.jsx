import { Link, useLocation, useNavigate } from "react-router-dom";
import Title from "../Shared/Title";
import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const JoinEmployee = () => {
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");
    const [showPass, setShowPass] = useState(false);
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    

      // to handle date picking 
      const [dueDate, setDueDate] = useState(null); 
      const handleDateChange = (date) => {
          setDueDate(date);
      };

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.url.value;
        const birthdate = e.target.birthdate.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        const role = "employee";
        console.log(name, email, birthdate, photo, password, role);

        const newEmployee = { name, email, birthdate, photo, password, role };

        console.log(newEmployee);

         // send data to the server 
         fetch('https://b9a12-assetguard-server.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newEmployee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

         // send data to the server 
         fetch('https://b9a12-assetguard-server.vercel.app/employees',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newEmployee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })


        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError(
                "Your password should have at least one uppercase character"
            );
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError(
                "Your password should have at least one lowercase character"
            );
            return;
        } else if (!accepted) {
            setRegisterError("Please accept our terms and conditions");
            return;
        }

        // reset error
        setRegisterError("");
        setRegisterSuccess("");

           // create user 
           createUser(name, email, photo, password)
           .then(() =>{
               setRegisterSuccess('Registered Successfully!');
               toast.success("Account Registered Successfully!");
               navigate(location?.state ? location.state : '/')
           })
           .catch(error =>{
               console.error(error);
               setRegisterError(error.message);
               toast.error("There was an error! Please try again later.");
           })
    }
    return (
        <div className="w-full md:w-4/5 mx-auto py-20  min-h-screen">
            <Helmet>
                <title>AssetGuard | Join as Employee</title>
            </Helmet>
            <div className="flex flex-col justify-between">
                <div>
                    <Title title="Register" subtitle="Join as an employee" ></Title>
                </div>
                <div className="card shrink-0 p-4 lg:p-8 w-full mx-auto md:w-2/3 bg-[#240750]">
                    <form className="space-y-8 p-4" onSubmit={handleRegister}>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                name="name"
                                className="grow text-gray-500"
                                placeholder="Your Name"
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70 text-[#57A6A1]"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="email"
                                name="email"
                                className="grow text-gray-500"
                                placeholder="Email"
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input
                                type="text"
                                name="url"
                                className="grow text-gray-500"
                                placeholder="Photo URL"
                                required
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        <DatePicker
                                            selected={dueDate}
                                            name="birthdate"
                                            onChange={handleDateChange}
                                            className="w-full text-gray-500 p-2 rounded-md"
                                            dateFormat="dd-MM-yyyy" 
                                            placeholderText="Date of Birth"
                                        />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70 text-[#57A6A1]"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type={showPass ? "text" : "password"}
                                required
                                className="grow text-gray-500"
                                name="password"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPass(!showPass)}
                                className="text-base"
                            >
                                {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </span>
                        </label>

                        <div>
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms" className="text-gray-500">
                                Accept our <a className="text-gray-500" href="">Terms and Conditions</a>
                            </label>
                        </div>
                        <label>
                            <input
                                type="submit"
                                className="btn w-full bg-[#57A6A1] mt-8"
                                value="Register"
                            ></input>
                        </label>
                    </form>
                    {registerError && <p className="text-red-600">{registerError}</p>}
                    {registerSuccess && (
                        <p className="text-green-600">{registerSuccess}</p>
                    )}
                    <p>
                        Already Have an Account? Please <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinEmployee;