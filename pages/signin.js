import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../redux/AuthSlice';
import { notifyAction } from '../redux/NotifySlice';
import { postData } from '../utils/fetchData';
import Cookie from 'js-cookie';

const Signin = () => {

    const initialState = { email: '', password: ''};
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;

    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value });
        
        dispatch(notifyAction({}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        dispatch(notifyAction({
            loading: true,
        }));

        const res = await postData('auth/login', userData);

        if(res.err) {
            return dispatch(notifyAction({ error: res.err }))
        }

        dispatch(notifyAction({ success: res.msg }));

        dispatch(authAction({
            token: res.access_token,
            user: res.user,
        }));

        Cookie.set('refreshtoken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7,
        });

        localStorage.setItem('firstLogin', true);
    }

    return ( 
        <div>
            <Head>
                <title>Sign in Page</title>
            </Head>

            <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password"
                        name="password"
                        className="form-control" 
                        id="exampleInputPassword1" 
                        value={password}
                        onChange={handleChangeInput}
                        />
                </div>
                <button type="submit" className="btn btn-dark w-100">Login</button>

                <p className="my-2">You do not have an account?
                    <Link href="/register">
                        <a style={{color: 'crimson', textDecoration: 'underline'}}> Register here</a>
                    </Link>
                </p>
            </form>
        </div>
    );
}
 
export default Signin;