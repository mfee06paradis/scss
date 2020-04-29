import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <>
      {/* <div className="navbar">
        <div className="col-5 nav-outline">
          <div className="nav-link">
            <span className="col-6">
              <span class="nav-title-eng">BRANDS</span>
              <span class="nav-title-chs">品牌</span>
            </span>
            <span className="col-6">
              <span class="nav-title-eng">PRODUCTS</span>
            </span>
          </div>
        </div>
        <div className="col-2">LOGO</div>
        <div className="col-5 nav-outline">
          <div className="nav-link">
            <span className="col-6">
              <span class="nav-title-eng">DISCOUNT</span>
            </span>
            <span className="col-6">
              <span class="nav-title-eng">MAKEUP</span>
            </span>
          </div>
        </div>
      </div> */}

      <nav className="navbar navbar-expand-lg">
        <div className="top-nav-center">
          <NavLink className="navbar-brand" to="/">
            logo
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/Uielements"
              >
                UIelements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                產品列表
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/product"
              >
                產品
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/cart">
                購物車
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu
