import React from "react";
import { ListGroup } from "react-bootstrap"; //logica
import ItemTarea from "./ItemTarea";
//import ListGroup from "react-bootstrap/ListGroup"; si importo solo 1 componente

const ListaTareas = ({ arregloTareas, borrarTarea }) => {
    return (
        <ListGroup>
            {arregloTareas.map((elemento, posicion) => (
                <ItemTarea key={posicion} nombreTarea={elemento} borrarTarea={borrarTarea}></ItemTarea>
            ))}
        </ListGroup>
    );
};

export default ListaTareas;
