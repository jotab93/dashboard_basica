import React, { useState, useEffect } from 'react';

function TotalUsuarios() {
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3030/api/users');
      const data = await response.json();
      setTotalUsuarios(data.count);
    }

    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: '50%', textAlign: 'center', backgroundColor: 'rgb(7,101,161)', color: '#fff', margin: '5%' }}>
      <div className="card-body">
        <h5 className="card-title">Total de usuarios</h5>
        <p className="card-text">{totalUsuarios}</p>
      </div>
    </div>
  );
}

export default TotalUsuarios;