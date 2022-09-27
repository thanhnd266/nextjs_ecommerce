import Link from 'next/link';
import {useRouter} from 'next/router';

const NavBar = () => {
    const router = useRouter();

    const isActive = (r) => {
        if(r === router.pathname) {
            return ' active';
        } else {
            return ' ';
        }
    } 

    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">DEVAT</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/cart">
                            <a className={"nav-link" + isActive('/cart')}><i className="fa-solid fa-cart-shopping" arial-hidden="true"></i>Cart</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/signin">
                            <a className={"nav-link" + isActive('/signin')}>
                                <i className="fa-solid fa-user" arial-hidden="true"></i>
                                Sign in
                            </a>
                        </Link>
                    </li>
                    
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                        User Name
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li> */}
                </ul>
            </div>
            </nav>
    );
}
 
export default NavBar;