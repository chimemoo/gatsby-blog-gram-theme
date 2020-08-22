import React from "react"
import { Link } from "gatsby"

export default function Header({toggle, title}) {
  return (
    <div>
      <div className="header-container">
        <div className="header-toggle">
          {toggle}
        </div>
      </div>
      <div className="header-content">
        <Link 
          style={{ boxShadow: `none`, textDecoration: `none` }} 
          className="header-title" to={"/"}>
          <p style={{ marginBottom: `0px` }}>{title}</p>
        </Link>
        <p className="header-subtitle">
          Software Developer | React Native Dev | Javascript Enthusiast | Data Science Enthusiast
        </p>
      </div>
    </div>
  )
}