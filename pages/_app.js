import '../styles/app.scss';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';


const MyApp = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )

}

export default MyApp
