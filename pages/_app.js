import '../styles/app.scss';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { useEffect } from 'react';
import { getData } from '../utils/fetchData';
import axios from 'axios';

export async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  const data = response.data;

  return {
    props: {
      users: data,
    }
  }
}

const MyApp = ({ Component, pageProps, users }) => {

  // useEffect(() => {
  //   const firstLogin = localStorage.getItem('firstLogin');
  //   if(firstLogin) {
  //     getData('auth/accessToken')
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }
  // }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )

}

export default MyApp
