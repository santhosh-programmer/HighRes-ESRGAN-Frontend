import React from 'react'
import "../styles/HeaderStyle.css"
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className='history-header'>
        <h1>HighRes</h1>
        <Link to="/">
          <button>
            Home
          </button>
        </Link>
    </header>
  )
}

export default HeaderComponent