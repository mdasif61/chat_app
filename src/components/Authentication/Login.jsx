import { useState } from "react";

const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="md:w-5/12 w-full">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                    <button onClick={()=>{
                        setEmail('asifikbal@gmail.com');
                        setPassword('123456')
                    }} className="btn btn-primary">Get Guest User</button>
                </div>
            </div>
        </div>
    );
};

export default Login;