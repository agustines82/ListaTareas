import React from "react";
import { Form, Button } from "react-bootstrap";

const FormularioTarea = () => {
    return (
        <Form className="my-3">
            <Form.Group className="mb-1">
                <Form.Control type="text" placeholder="Describe tu tarea" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Tarea
            </Button>
        </Form>
    );
};

export default FormularioTarea;
