import React from 'react';

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">My Portfolio</a>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
