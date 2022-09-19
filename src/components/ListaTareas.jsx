import React from "react";
import { ListGroup } from "react-bootstrap"; //logica
import ItemTarea from "./ItemTarea";
//import ListGroup from "react-bootstrap/ListGroup"; si importo solo 1 componente

const ListaTareas = () => {
    return (
        <ListGroup>
            <ItemTarea></ItemTarea>
        </ListGroup>
    );
};

export default ListaTareas;
