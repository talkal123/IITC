import React from 'react'
import HamburgerHomePage from "../components/HamburgerHomePage";

const Nav = () => {
  return (
    <div>
      <div>
        <HamburgerHomePage />
      </div>
      <div className="font-bold text-3xl">
        <h1>Pokedex</h1>
      </div>
    </div>
  )
}

export default Nav
