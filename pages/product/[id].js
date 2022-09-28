import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { getData } from '../../utils/fetchData';
import Image from 'next/image';

export const getServerSideProps = async ({ params: {id} }) => {
    const res = await getData(`product/${id}`);

    return {
      props: {
        product: res.product,
      }
    }
  }

const DetailProduct = (props) => {

    const [product, setProduct] = useState(props.product);
    const [tab, setTab] = useState(0);
    const imgRef = useRef();


    useEffect(() => {
        const images = imgRef.current.children;

        console.log(images)
        for(let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace('active', 'img-thumbnail rounded')
        }

        images[tab].className = 'img-thumbnail rounded active';

    }, [tab])

    return (
        <div className="row detail_page">
            <Head>
                <title>Detail Product</title>
            </Head>

            <div className="col-md-6">
                <Image 
                    src={product.images[tab].url}
                    alt="product image" 
                    className="d-block img-thumbnail rounded mt-4 w-100"
                    height={350}
                    width={540}
                />

                <div className="row mx-0" style={{ cursor: 'pointer' }} ref={imgRef} >
                    {
                        product.images.map((img, index) => (
                            <Image 
                                key={index} 
                                src={img.url} 
                                alt="product image"
                                className="img-thumbnail rounded"
                                width={108}
                                height={80}
                                onClick={() => setTab(index)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="col-md-6"></div>
        </div>
    )
}

export default DetailProduct;