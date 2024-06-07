import { useContext, useRef, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Title from "../Shared/Title";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();

    const { signIn, signInGoogle } = useContext(AuthContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // reset error 
        setLoginError('');

        signIn(email, password)
        .then(result => {
            console.log(result);
            // navigate after login 
            toast.success('Logged in successfully!');
            console.log("Navigating to home...");
            navigate("/");
        })
        .catch(error => {
            console.error(error);
            setLoginError(error.message);
        });
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success("Logged In Successfully!");
            // navigate after login 
            console.log("Navigating to home...");
            navigate("/profile");
        })
        .catch(error => {
            console.log(error);
            toast.error("Error logging in. Please try again later.");
        });
    }

    return (
        <div className="w-full md:w-4/5 mx-auto min-h-screen py-20">
            <div className="flex flex-col">
                <div>
                    <Title title="Login Now" subtitle="Explore more features"></Title>
                </div>
                <div className="card p-4 lg:p-8 shrink-0 w-full md:w-2/3 mx-auto bg-[#240750]">
                    <form className="space-y-8 p-4" onSubmit={handleLogin}>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-[#57A6A1] opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="email" ref={emailRef} name="email" className="grow text-gray-500" placeholder="Email" required />
                        </label>
                        
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 text-[#57A6A1]">
                                <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                            </svg>
                            <input type={showPass ? "text" : "password"} required className="grow text-gray-500" name="password" />
                            <span onClick={() => setShowPass(!showPass)} className="text-base font-bold text-[#57A6A1]">
                                {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </span>
                        </label>
                        <label>
                            <input type="submit" className="btn w-full bg-[#57A6A1] mt-8" value="Login"></input>
                        </label>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                            <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                        </div>
                        <div className="text-center">
                            <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm text-red-700 btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                    {loginError && <p className="text-red-600">{loginError}</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
