import { Provider } from "react-redux";
import 'tailwindcss/tailwind.css'
import store from "../store";
import '../index.scss';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL} >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home/:item/:id' element={<ItemPage />} />
          <Route path='/home/:item/:id/test:tid/' element={<TestPage />} />
          <Route path='/home/:item/:id/test:tid/result' element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </BrowserRouter> */}
      <Head>
        <link rel='shortcut icon' href="/logo.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
