import React from 'react'
import './Book.css'

const Book = () => {
  return (
    <div>
      <img src="" alt="image" width={200} height={200} />
      <h3>Title : Physics</h3>
      <h4>Price : $45</h4>
      <div>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
      <button onClick={addtocart}>Add to cart</button>
    </div>
  )
}

export default Book
