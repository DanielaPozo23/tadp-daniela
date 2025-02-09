import React from "react";
import { Card } from "react-bootstrap";

export function ItemProductos({producto}) {
  return (
    
      <Card>
        <Card.Img variant="top" src={producto.imagen} style={{width:"200px", height:"70%"}} />
        <Card.Body>
          <Card.Title>Nombre: {producto.nombre}</Card.Title>
          <Card.Text>
           <p>Precio: {producto.precio}</p>
            <p>Unidades: {producto.unidad}</p>
            <p>Contenido neto: {producto.contenido}</p>
          </Card.Text>
        </Card.Body>
      </Card>
  
  );
}