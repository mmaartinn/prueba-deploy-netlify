import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contenedor">
      <h2>Mi Primer Componente en JSX</h2>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}

export default Contador;
