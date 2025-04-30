import './App.css';

import Products from "./components/Products.jsx";
import Orders from "./components/Orders.jsx";
import {useState} from "react";

function App() {
    const [view, setView] = useState('products');
  return (
    <div className='main-container'>
        <h1>elo</h1>
        <div className='button-container'>
            <button onClick={() => setView('products')}>produkty</button>
            <button onClick={() => setView('orders')}>zamowienia</button>
        </div>
        {view === 'products' ? <Products /> : <Orders />}
    </div>
  )
}

export default App
