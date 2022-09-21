import React from "react";
import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
    const [tarea, setTarea] = useState("");
    const [arregloTareas, setArregloTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // no puedo usar el push en un state por que no puedo modificar directamente la variable para ello necesito del operador spread ...
        setArregloTareas([...arregloTareas, tarea]);
        //limpiar el input (previamente se puso el value en el imput)
        setTarea("");
    };

    return (
        <section>
            <div className="container w-75 bg-light border rounded-top">
                <Form.Label className="lead ms-2 mt-1">Nueva Tarea</Form.Label>
            </div>
            <Form className="mb-3 lead w-75 container border rounded-bottom" onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            className="mb-4 mt-3"
                            placeholder="Ingrese una tarea"
                            onChange={(e) => setTarea(e.target.value)}
                            value={tarea}
                        />
                        <Button className="mb-4 mt-3" type="submit" variant="primary" id="btnTarea">
                            Enviar
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
            <section className="w-75 container">
                <article className="p-1">
                    <ListaTareas />
                </article>
            </section>
        </section>
    );
};

export default FormularioTarea;
