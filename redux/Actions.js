import { addCart } from './CartSlice';
import { notifyAction } from './NotifySlice';

export const addToCart = (product, cart) => {
    
    if(product.inStock === 0) {
        return (notifyAction({error: 'This product is out of stock'}))
    }

    const check = cart.every(item => {
        return item._id !== product._id;
    })

    if(!check) {
        return (notifyAction({ error: 'The product has been added to cart'}))
    }

    return (addCart([{...product, quantity: 1}]))
}