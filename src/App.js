import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import SearchProduct from './components/SearchProduct';
import ViewProduct from './components/ViewProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/SearchProduct' element={<SearchProduct/>}/>
      <Route path='/DeleteProduct' element={<DeleteProduct/>}/>
      <Route path='/ViewProduct' element={<ViewProduct/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
