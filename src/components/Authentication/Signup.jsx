import { useState } from "react";

const Signup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPass,setConfirmPass]=useState('');
    const [photo,setPhoto]=useState('');

    const postDetails=(pics)=>{};

    const submitHandle=()=>{}

    return (
        <div className="w-full flex items-center justify-center h-screen">
            <div className="md:w-5/12 w-full">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Upload Your Picture</span>
                    </label>
                    <input onChange={(e) => postDetails(e.target.files[0])} type="file" />
                </div>
                <div className="form-control mt-6">
                    <button onClick={submitHandle} className="btn btn-primary">Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;