import React from 'react'

const ProductList = (props) =>{
console.log("props>>",props.products)

// let total = 0 
// const list= props.products.map((product) =>{
//     total = total + (+product.price)
// })



// const totalValue = () =>{
//     props.totalCal(total)
// }

// const deleteProduct = (event) =>{
//     console.log(event.target.id)
//     props.onDeleteProduct(event.target.id)

// }

return (
    <React.Fragment>
        <h2 > Products </h2>
    <ul>
        {props.products.map((product) =>(
            
            <li key={product.id}> 
            {product.name } {product.price}
            
            <button type="button" id={product.id} >Delete</button>

            </li>
        ))}
      
        
    </ul>
    
    </React.Fragment>
)

}

export default ProductList