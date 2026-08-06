import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const UseSearch = () => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useSearchParams()

  const category = search.get("category")

  useEffect(() => {

    if (category) {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
    }

  }, [category])

  return (
    <div>

      <button onClick={() => setSearch({ category: "furniture" })}>
        Furniture
      </button>

      <button onClick={() => setSearch({ category: "beauty" })}>
        Beauty
      </button>

      <div>
        {
          products.map((p) => {
            return (
              <p key={p.id}>
                {p.id} - {p.brand} - {p.price} - {p.category}
              </p>
            )
          })
        }
      </div>

    </div>
  )
}

export default UseSearch