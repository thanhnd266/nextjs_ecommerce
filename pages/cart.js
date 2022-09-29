import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {

    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    if(cart.length === 0) {
        return (
            <img 
                className="img-responsive w-100" 
                src="/empty_cart.jpg" 
                alt="empty cart" 
            />
        )
    }
    return ( 
        <div>
            <Head>
                <title>Cart page</title>
            </Head>

            <div className="col-md-8 text-secondary table-responsive my-3">
                <h2 className="text-uppercase">
                    Shopping Cart
                </h2>

                <table className="table my-3">
                    <tbody>
                        {
                            cart.map(item => (
                                <CartItem 
                                    key={item._id} 
                                    item={item} 
                                    dispatch={dispatch}
                                    cart={cart}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div className="col-md-4">
                
            </div>
        </div>
    );
}
 
export default Cart;