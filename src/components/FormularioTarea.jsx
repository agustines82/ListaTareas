import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const FormularioTarea = () => {
    return (
        <section>
            <div className="container w-75 bg-light border rounded-top">
                <Form.Label className="lead ms-2 mt-1">Nueva Tarea</Form.Label>
            </div>
            <Form className="mb-3 lead w-75 container border rounded-bottom">
                <Form.Group>
                    <InputGroup>
                        <Form.Control className="mb-4 mt-3" placeholder="Ingrese una tarea" aria-label="tarea" aria-describedby="tarea" />
                        <Button className="mb-4 mt-3" type="submit" variant="primary" id="btnTarea">
                            Enviar
                        </Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </section>
    );
};

export default FormularioTarea;
