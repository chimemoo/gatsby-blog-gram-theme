import React from "react"
import { Link } from "gatsby"

export default function Header({toggle, metaData}) {
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
          <p style={{ marginBottom: `0px` }}>{metaData.title}</p>
        </Link>
        
        <p className="header-subtitle">
          {metaData.author.name || ''}
          <br/>
          <small>
            {metaData.author.summary || ''}
          </small>
        </p>
      </div>
    </div>
  )
}