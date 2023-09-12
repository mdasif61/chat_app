import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const postDetails = (pics) => {
        setLoading(true);
        if (photo === undefined) {
            toast.error('Please select an image');
            return
        }
        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData();
            data.append('file', pics);
            data.append('upload_preset', 'chat-app');
            data.append('cloud_name', 'ikbalhossain');
            fetch('https://api.cloudinary.com/v1_1/ikbalhossain/image/upload', {
                method: 'POST',
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setPhoto(data.url.toString());
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })
        } else {
            toast.error('Please select an image');
            return;
        }
    };

    const submitHandle = async () => {
        setLoading(true);
        if (!name || !email || !password || !confirmPass) {
            toast.error('Please fill all the feilds');
            setLoading(false)
            return;
        }
        if (password !== confirmPass) {
            toast.error('password not match');
            return;
        }

        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            };

            const { data } = await axios.post('/api/user', { name, email, password, photo }, config)

            toast.success('Registration Successfull');
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false)
            history.push('/chats')

        } catch (error) {
            toast.error('Error Occured');
            setLoading(false)
        }

    }

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
                    <button disabled={loading} onClick={submitHandle} className="btn btn-primary">Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;