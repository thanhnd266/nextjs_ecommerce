import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authAction } from '../redux/AuthSlice';
import { getData } from '../utils/fetchData';
import NavBar from './Navbar';
import Notify from './Notify';

const Layout = ({children}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin');
        if(firstLogin) {
        getData('auth/accessToken')
            .then(res => {

            if(res.err) return localStorage.removeItem('firstLogin');

            dispatch(authAction({
                token: res.access_token,
                user: res.user,
            }))
            })
            .catch(err => {
            console.log(err)
            })
        }
    }, [dispatch])

    return (  
        <div className="container">
            <NavBar />
            <Notify />
            {children}
        </div>
    );
}
 
export default Layout;