import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const ProductItem = ({ product }) => {

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
                <button className="btn btn-success" style={{marginLeft: '5px', flex: 1}}>Buy</button>
            </>
        )
    }

    return ( 
        <div className="card" style={{ width: '18rem' }}>
            <Link href={`product/${product._id}`}>
                <a>
                    <Image 
                        className="card-img-top" 
                        width={300}
                        height={240}
                        src={product.images[0].url}
                        alt="Image product" 
                    />
                </a>
            </Link>
            
            <div className="card-body">
                <h5 
                    className="card-title text-capitalize" 
                    role="button" 
                    title={product.title}
                    onClick={() => userLink()}
                >
                    <Link href={`product/${product._id}`}>
                        <a>
                            {product.title}
                        </a>
                    </Link>
                </h5>

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