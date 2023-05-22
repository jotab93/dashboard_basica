import React, { useState, useEffect } from 'react';

function UltimoUsuario() {
  const [ultimoUsuario, setUltimoUsuario] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch('http://localhost:3030/api/users');
        const data = await response.json();
        const ultimoUsuario = data.users[data.users.length - 1];
        setUltimoUsuario(ultimoUsuario);
    }

    fetchData();
  }, []);

  return (
    <div className="card" style={{ width: '70%', textAlign: 'center', backgroundColor: 'rgb(7,101,161)', color: '#fff', margin: '5%' }}>
      <div className="card-body">
        <h5 className="card-title">Ultimo usuario creado</h5>
        {ultimoUsuario && (
          <>
            <p className="card-text">{ultimoUsuario.nombre}{ultimoUsuario.apellido}</p>
            <p className="card-text">{ultimoUsuario.email}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default UltimoUsuario;
