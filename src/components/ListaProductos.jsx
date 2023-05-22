import React, { useState, useEffect } from 'react';

function ListaProductos() {
  const [listaProductos, setlistaProductos] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch('http://localhost:3030/api/products');
        const data = await response.json();
        setlistaProductos(data.productos);
    }

    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: '70%', textAlign: 'center', backgroundColor: 'rgb(7,101,161)', color: '#fff', margin: '5%' }}>
      <h5 className="card-title">Lista de productos</h5>
      {Array.isArray(listaProductos) ? (
        listaProductos.map((producto, index) => (
          <p className="card-text" key={index}>{producto.nombre}</p>
        ))
      ) : (
        <p>No se pudo obtener la lista de productos</p>
      )}
    </div>
  );
}

export default ListaProductos;

