import React, { useState, useEffect } from 'react';

function ProductosPorCategoria() {
  const [productosPorCategoria, setproductosPorCategoria] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3030/api/products');
      const data = await response.json();
      setproductosPorCategoria(data.countByCategory);
    }

    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: '50%', textAlign: 'center', backgroundColor: 'rgb(7,101,161)', color: '#fff', margin: '5%' }}>
      <div className="card-body">
        <h5 className="card-title">Buzos</h5>
        <p className="card-text">{productosPorCategoria.Buzos}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">Pantalones</h5>
        <p className="card-text">{productosPorCategoria.Pantalones}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">Remeras</h5>
        <p className="card-text">{productosPorCategoria.Remeras}</p>
      </div>
    </div>
  );
}

export default ProductosPorCategoria;