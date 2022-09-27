import NavBar from './Navbar';
import Notify from './Notify';

const Layout = ({children}) => {
    return (  
        <div className="container">
            <NavBar />
            <Notify />
            {children}
        </div>
    );
}
 
export default Layout;