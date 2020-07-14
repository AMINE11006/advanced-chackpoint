import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ProductTable from './ProductTable';


let object1 = { name:"T-shirt", price: 10, category:"Clothes"};
let object2 = { name:"Sweat", price: 15, category:"Clothes"};
let object3 = { name:"AirPods", price: 179, category:"Electronics"};
let object4 = { name:"Jean", price: 90, category:"Clothes"};
let object5 = { name:"Samsung 4K TV", price: 9468, category:"Electronics"};
let object6 = { name:"LG Fridge", price: 2645, category:"Electronics"};


const products = [ object1, object2, object3, object4, object5, object6 ];


ReactDOM.render(
  <React.StrictMode>
    <ProductTable tableau={products} />
  </React.StrictMode>,
  document.getElementById('root')
);

export default products;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
