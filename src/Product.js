import React from 'react'

function Product({name,desc,price}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{desc}</h2>
        <h2>${price}</h2>
    </div>
  )
}

export default Product