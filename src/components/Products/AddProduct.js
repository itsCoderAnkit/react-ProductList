import React, { useState } from 'react'


const AddProduct = (props) => {

  const [id, setId] = useState('')
  const [price, setPrice] = useState('')
  const [name, setName] = useState('')


  const idChangeHandler = (event) => {
    setId(event.target.value)
  }

  const priceChangeHandler = (event) => {
    setPrice(event.target.value)
  }

  const nameChangeHandler = (event) => {
    //console.log(event.target.value)
    setName(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    props.onAddProduct(id, price, name)
    setId('')
    setPrice('')
    setName('')
  }


  return (
    <React.Fragment>

      
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">Product ID</label>
            <input type="number" className="form-control" id="id" value={id} onChange={idChangeHandler} />

          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Selling Price</label>
            <input type="number" className="form-control" id="price" value={price} onChange={priceChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={nameChangeHandler} />
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      
    </React.Fragment>
  )

}

export default AddProduct

