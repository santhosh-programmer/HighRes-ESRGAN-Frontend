import React from 'react'
import "../styles/HeaderStyle.css"
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
        <h1>HighRes</h1>
        <Link to="/history">
          <button>
            History
          </button>
        </Link>
    </header>
  )
}

export default HeaderComponent