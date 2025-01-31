import React from 'react'

export function ItemProductos({producto}) {
  return (
    <div>
      <h2>Nombre: {producto.nombre}</h2>
      <h2>Precio: {producto.precio}</h2>
      <h2>Descripción: {producto.unidad}</h2>
      <h2>Contenido: {producto.contenido}</h2>
      <img
      src={producto.imagen}
      style={{ width: "150px", height: "150px", borderRadius: "10px" }} 
      />
    </div>
  )
}

