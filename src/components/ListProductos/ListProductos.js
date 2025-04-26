import React from "react";
import { Table, Button, Image } from "react-bootstrap";
import { ENV } from "../../utils";

const urlImagen = ENV.BASE_PATH;

export function ListProductos({ productos, onDelete }) {
  const handleDelete = async (id) => {
    if (!id) {
      console.error("El ID del producto es inválido:", id);
      return;
    }

    try {
      await onDelete(id); // Llama a la función para eliminar el producto en el backend
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Unidad</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <tr key={producto.id}>
            <td>{index + 1}</td>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.unidad}</td>
            <td>
              <Image
                src={`${urlImagen}/${producto.imagep}`}
                style={{ width: "50px", height: "50px" }}
                roundedCircle
              />
            </td>
            <td>
              <Button variant="success">Editar</Button>
              <Button
                variant="danger"
                className="ms-2"
                onClick={() => handleDelete(producto._id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

