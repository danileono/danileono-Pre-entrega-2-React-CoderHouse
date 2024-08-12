import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryName } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const url = categoryName
                    ? `https://fakestoreapi.com/products/category/${categoryName}`
                    : 'https://fakestoreapi.com/products';
                const response = await fetch(url);
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error fetching productos:', error);
            } 
        };

        fetchProductos();
    }, [categoryName]);


//////// MAPERO CARDS PRODUCTOS //////////

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {productos.map(({ id, image, title, description, price }) => (
                <Card key={id} className="col-3 m-3">
                    <Card.Img   variant="top" 
                                src={image} 
                                alt={title}
                                className="w-50 align-self-center p-2" 
                    />

                    <Card.Body className="align-content-end">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Button variant="dark" onClick={() => navigate(`/detalle/${id}`)}>
                            Ver Detalle
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ItemListContainer;
