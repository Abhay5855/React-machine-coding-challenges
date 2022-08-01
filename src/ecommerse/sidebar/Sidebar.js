import React, { useState } from 'react'
import styled from 'styled-components'
import './sidebar.css'

const Sidebar = ({ products, setProducts }) => {
  const [value, setValue] = useState(false)
  const [value1, setValue1] = useState(false)
  const [selected , setSelected] = useState([]);

  const handleSortLow = (sortType) => {
    setValue(true)
    setValue1(false)

    const sortData = [...products]

    if (sortType === 'low to high') {
      sortData.sort((a, b) => {
        return a.price - b.price
      })

      setProducts(sortData)
    }
  }

  const handleSortHigh = (sortType) => {
    setValue1(true)
    setValue(false)
    const sortData = [...products]

    if (sortType === 'high to low') {
      sortData.sort((a, b) => {
        return b.price - a.price
      })

      setProducts(sortData)
    }
  }


  const handleCategory = (products) => {

     
  }
  return (
    <SidebarContainer>
      {/* filters and clear button */}
      <div className="filterbtn__tab">
        <p className="filter__text">Filters</p>

        <button className="clear__btn">Clear</button>
      </div>

      <hr className="hr__line" />

      {/* sort by */}

      <div>
        <p className="filter__text">Sort by</p>
        <div className="sort">
          <input
            type="radio"
            name="low to high"
            value="low to high"
            checked={value}
            onChange={(e) => handleSortLow(e.target.name)}
          />
          <p>Price : Low to High</p>
        </div>
        <div className="sort">
          <input
            type="radio"
            name="high to low"
            value="high to low"
            checked={value1}
            onChange={(e) => handleSortHigh(e.target.name)}
          />
          <p>Price : High to Low</p>
        </div>
      </div>

      <hr className="hr__line" />

      {/* Rating */}
      <div>
        <p className="filter__text">Ratings</p>
        <div className="sort">
          <input type="checkbox" />
          <p>5 star and below</p>
        </div>
        <div className="sort">
          <input type="checkbox" />
          <p>4 star and below</p>
        </div>
        <div className="sort">
          <input type="checkbox" />
          <p>3 star and below</p>
        </div>
        <div className="sort">
          <input type="checkbox" />
          <p>2 star and below</p>
        </div>
      </div>

      <hr className="hr__line" />

      <div>
        <p className="filter__text">Category</p>
        <div className="sort">
          <input type="checkbox" />
          <p>Jeans</p>
        </div>
        <div className="sort">
          <input type="checkbox" />
          <p>T shirts</p>
        </div>
        <div className="sort" >
          <input type="checkbox" checked={selected.includes('categoryName')} onChange={() => handleCategory(products)}/>
          <p>shoes</p>
        </div>
      </div>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  min-width: 15rem;
  background: #2d2e45;
  color: #fff;
  margin: 2em 2em 0 0;
  padding: 1.3em;
  border-radius: 5px;

  @media (max-width: 750px) {
    display: none;
  }
`
