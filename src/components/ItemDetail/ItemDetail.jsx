import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({producto, mostrarSiguiente, mostrarAnterior}) => {

  const { id, image, title, description, category, rating, price } = producto

  if (!producto || Object.keys(producto).length === 0) {
    return <h3>No se encontró el producto</h3>;
}


  return (
    <Card className="m-3 col-8 d-flex flex-row m-auto">
          <Card.Img 
        variant="top" 
        src={image} 
        alt={`foto del producto ${title}`} 
        className="w-25 mx-3 col-2" 
        style={{ objectFit: 'contain', height: 'auto' }}
      />
    <Card.Body className="col-6">
      <Card.Title> <h3>{title}</h3> </Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        <strong>Precio:</strong> ${price}
      </Card.Text>
      <Card.Text>
        <strong>Categoría:</strong> {category}
      </Card.Text>

      <Button variant="primary" onClick={mostrarAnterior} className="me-2">Ver Anterior</Button>
      <Button variant="primary" onClick={mostrarSiguiente}>Ver Siguiente</Button>
    </Card.Body>
  </Card>
  )
}

export default ItemDetail