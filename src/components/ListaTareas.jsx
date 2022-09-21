import React from "react";
import { ListGroup } from "react-bootstrap"; //logica
import ItemTarea from "./ItemTarea";
//import ListGroup from "react-bootstrap/ListGroup"; si importo solo 1 componente

const ListaTareas = ({ arregloTareas }) => {
    return (
        <ListGroup>
            {arregloTareas.map((elemento, posicion) => (
                <ItemTarea key={posicion} nombreTarea={elemento}></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;
