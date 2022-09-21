import React from "react";
import { ListGroup, Button } from "react-bootstrap";
const ItemTarea = ({ nombreTarea, borrarTarea }) => {
    return (
        <ListGroup.Item className="lead bg-light rounded d-flex justify-content-between ">
            {nombreTarea}
            <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>
                Borrar
            </Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;
