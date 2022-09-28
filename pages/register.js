import Head from 'next/head';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import valid from '../utils/valid';
import { useSelector, useDispatch } from 'react-redux';
import { notifyAction } from '../redux/NotifySlice';
import { postData } from '../utils/fetchData';
import { useRouter } from 'next/router';


const Register = () => {
    const initialState = { name: '', email: '', password: '', cf_password: '' };
    const [userData, setUserData] = useState(initialState);
    const { name, email, password, cf_password } = userData;

    const router = useRouter();

    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value });
        
        dispatch(notifyAction({}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const errMsg = valid(name, email, password, cf_password);
        
        if(errMsg) {
            return dispatch(notifyAction({ error: errMsg }))
        }

        dispatch(notifyAction({
            loading: true,
        }));

        const res = await postData('auth/register', userData);

        if(res.err) {
            return dispatch(notifyAction({ error: res.err }))
        }

        return dispatch(notifyAction({ success: res.msg }))
    }

    useEffect(() => {
        if(Object.keys(auth).length !== 0 && Object.keys(auth.auth).length !== 0) {
            router.push('/')
        }
    }, [auth, router])

    return ( 
        <div>
            <Head>
                <title>Register Page</title>
            </Head>

            <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={name}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        name="email" 
                        value={email}
                        onChange={handleChangeInput}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                        name="password" 
                        value={password}
                        onChange={handleChangeInput} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword2" 
                        name="cf_password" 
                        value={cf_password}
                        onChange={handleChangeInput}
                    />
                </div>

                <button type="submit" className="btn btn-dark w-100">Register</button>

                <p className="my-2">Already have an account? 
                    <Link href="/signin">
                        <a style={{color: 'crimson', textDecoration: 'underline'}}> Login Now</a>
                    </Link>
                </p>
            </form>
        </div>
    );
}
 
export default Register;