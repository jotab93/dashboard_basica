import React from 'react';
import Logo from '../assets/logo.svg'

function TopBar() {
  return (
    <div
      style={{
        backgroundColor: 'rgb(7, 101, 161)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        color: '#fff',
      }}
    >
      <div>
        <img src={Logo} alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
      </div>
      <div>
        <a href="http://localhost:3030/" style={{ color: '#fff', textDecoration: 'none' }}>
          Ingresá a Básica!
        </a>
      </div>
    </div>
  );
}

export default TopBar;