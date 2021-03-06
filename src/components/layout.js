import React, { useState } from "react"

import { rhythm } from "../utils/typography"
import Header from "./header"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../utils/globalStyles"
import { lightTheme, darkTheme } from "../utils/theme"
import Switch from "react-switch";

const Layout = ({ children, metaData }) => {
  
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('colorTheme')) || false)
  const themeToggler = () => {
    checked === true ? changeToDark() : changeToLight()
  }
  
  const changeToDark = () => {
    localStorage.setItem('colorTheme', false)
    setChecked(false)
  }

  const changeToLight = () => {
    localStorage.setItem('colorTheme', true)
    setChecked(true)
  }

  const toggle = (
    <Switch 
      checked={checked} 
      uncheckedIcon={false} 
      checkedIcon={false} 
      onChange={themeToggler}
      offColor="#DDD"
      onColor="#363537"
    />
  )
  let header = <Header toggle={toggle} metaData={metaData} />

  return (
    <ThemeProvider theme={checked === true? lightTheme : darkTheme}>
      <>
        <GlobalStyles/>
        <div>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `20px ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
            <footer 
              style={{textAlign: `center`, marginTop: `30px`}}
            >
              © {new Date().getFullYear()} Built with 🤟 · 
              Powered By <a href="https://www.gatsbyjs.org">Gatsby</a> · 
              <a href="https://github.com/chimemoo/gatsby-blog-gram-theme"> BlogGram Theme</a>
            </footer>
          </div>
        </div>
      </>
    </ThemeProvider>
  )
}

export default Layout
