import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/Actions';
import { notifyAction } from '../../redux/NotifySlice';

const ProductItem = ({ product }) => {

    const cart = useSelector(state => state.cart);
    const notify = useSelector(state => state.notify);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(notifyAction({
            loadingBtn: true,
        }));

        setTimeout(() => {
            dispatch(notifyAction({success: 'Add to your cart success'}))
            dispatch(addToCart(product, cart));
        }, 500)
    }

    const userLink = () => {

        return (
            <>
                <Link href={`product/${product._id}`}>
                    <a 
                        className="btn btn-info"
                        style={{marginRight: '5px', flex: 1}}
                    >
                        View
                    </a>
                </Link>
                <button 
                    className="btn btn-success" 
                    style={{marginLeft: '5px', flex: 1}}
                    disabled={product.inStock === 0 ? true : false}
                    onClick={handleAddToCart}
                >
                    {notify && notify.notify && notify.notify.loadingBtn 
                        ? <i className="fa-solid fa-spinner loaderBtn"></i>
                        : 'Buy'
                    }
                </button>
            </>
        )
    }

    return ( 
        <div className="card" style={{ width: '18rem' }}>
            <Image 
                className="card-img-top" 
                width={300}
                height={240}
                src={product.images[0].url}
                alt="Image product" 
            />
            <div className="card-body">
                <h5 className="card-title text-capitalize" title={product.title}>{product.title}</h5>

                <div className="row justify-content-between mx-0">
                    <h6 className="text-danger">${product.price}</h6>
                    {
                        product.inStock > 0
                            ? <h6 className="text-danger">In Stock: {product.inStock}</h6>
                            : <h6 className="text-danger">Out Stock</h6>
                    }
                </div>

                <p className="card-text">{product.description}</p>

                <div className="row justify-content-between mx-0">
                    {userLink()}
                </div>
                
            </div>
        </div>
    );
}
 
export default ProductItem;