import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='text-white border-2 border-emerald-600 rounded-full text-xl py-3 px-5 outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder="Enter your email" />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='text-white border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-3 outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder="Enter password" />
                    <button className="mt-5 border-2 bg-emerald-600 rounded-full text-xl text-white py-3 w-full border-none outline-none">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;