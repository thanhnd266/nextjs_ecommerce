import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Link from 'next/link';
import { getData } from '../utils/fetchData';
import { addCart } from '../redux/CartSlice';

const Cart = () => {

    const [total, setTotal] = useState();
    const cart = useSelector(state => state.cart);
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity);
            }, 0)

            setTotal(res);
        }

        getTotal();
    }, [cart, total])

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
        <div className="row mx-auto">
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
                            cart.map((item, index) => (
                                <CartItem 
                                    key={index} 
                                    item={item} 
                                    dispatch={dispatch}
                                    cart={cart}
                                />
                            ))
                        }
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-outline-dark">Cancel</button>
                    <button className="btn btn-danger ml-2">Save</button>
                </div>
            </div>

            <div className="col-md-4 my-3 text-right text-uppercase text-secondary">
                <form>
                    <h2>Shipping</h2>

                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        className="form-control mb-2" 
                    />

                    <label htmlFor="address">Mobile</label>
                    <input 
                        type="text" 
                        name="mobile" 
                        id="mobile" 
                        className="form-control mb-2" 
                    />
                </form>

                <h3>Total: <span className="text-danger">${total}</span></h3>

                <Link href={auth.user ? '#' : '/signin'}>
                    <a className="btn btn-dark my-2">Proceed with payment</a>
                </Link>
            </div>
        </div>
    );
}
 
export default Cart;