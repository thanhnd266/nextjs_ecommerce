import Head from 'next/head';
import { useState } from 'react';
import { getData } from '../utils/fetchData';
import ProductItem from '../components/product/ProductItem';

export const getServerSideProps = async () => {
  const res = await getData('product');
  return {
    props: {
      products: res.products,
      result: res.result
    }
  }
}


const Home = (props) => {
  const [products, setProducts] = useState(props.products);

  return (
    <div className="products">
      <Head>
        <title>Home Page</title>
      </Head> 
      {products.length === 0
          ? <h2>No Products</h2>
          : products.map(product => (
              <ProductItem key={product._id} product={product} />
          )) 
      }
    </div>
  )
}

export default Home;