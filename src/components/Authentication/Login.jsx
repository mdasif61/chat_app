import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const [loading,setLoading]=useState(false)

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginUser=async()=>{
        setLoading(true);
        if(!email || !password){
            toast.error('Please privide login info');
            setLoading(false);
            return
        }
        try {
            const config={
                headers:{
                    'Content-type':'application/json'
                }
            }
            const {data}=await axios.post('http://localhost:5000/api/user/login',{email,password},config);

            toast.success('Login Successfull');
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false)
            // navigator('/')

        } catch (error) {
            toast.error('Login Failed. try again')
        }
    }

    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="md:w-5/12 w-full">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button onClick={loginUser} className="btn btn-primary">Login</button>
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