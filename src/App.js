import './App.css';
import React, { useState } from 'react'
import AddProduct from './components/Products/AddProduct';
import ProductList from './components/Products/ProductList';


function App() {

  const [productList, setProductList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const addedProduct = (pId, pPrice, pName) => {

    console.log(totalPrice,typeof(totalPrice))
    console.log(pPrice,typeof(pPrice))
    
    console.log(totalPrice)
    setProductList((previousList) => {
      console.log(previousList)
      // previousList.map ((item) =>{total=total + (+item.value) })
      // console.log(total)
      return [...previousList, { id: pId, price: pPrice, name: pName }]
    })

    setTotalPrice(parseInt(pPrice))
  }

  
  return (
    <React.Fragment>
      <AddProduct onAddProduct={addedProduct}></AddProduct>
      <ProductList products={productList} ></ProductList>
    </React.Fragment>
  );
}

export default App;
