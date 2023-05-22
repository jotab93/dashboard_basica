import React, { useState, useEffect } from 'react';

function TotalProductos() {
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3030/api/products');
      const data = await response.json();
      setTotalProductos(data.count);
    }

    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: '50%', textAlign: 'center', backgroundColor: 'rgb(7,101,161)', color: '#fff', margin: '5%' }}>
      <div className="card-body">
        <h5 className="card-title">Total de productos</h5>
        <p className="card-text">{totalProductos}</p>
      </div>
    </div>
  );
}

export default TotalProductos;

