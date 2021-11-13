import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./pages/home";
import ItemPage from "./pages/item";
import NotFoundPage from "./pages/notfound";
import ResultPage from "./pages/result";
import TestPage from "./pages/test";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home/:item/:id' element={<ItemPage />} />
          <Route path='/home/:item/:id/test:tid/start' element={<TestPage />} />
          <Route path='/home/:item/:id/test:tid/start/result' element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
