import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const ItemTarea = () => {
    return (
        <ListGroup.Item className="lead bg-light rounded d-flex justify-content-between ">
            Buscar a Nacho del cole
            <Button variant="danger">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;
