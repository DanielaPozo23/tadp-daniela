import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function ItemProductos({ producto }) {
  return (
    <div className="d-flex flex-row flex-wrap gap-3 justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <h2>Precio: {producto.precio}</h2>
            <h2>Descripción: {producto.unidad}</h2>
            <h2>Contenido: {producto.contenido}</h2>
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
