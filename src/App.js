import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./pages/home";
import ItemPage from "./pages/item";
import TestPage from "./pages/test";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home/jeeitem:id' element={<ItemPage />} />
          <Route path='/home/jeeitem:id/test:tid/start' element={<TestPage />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
