import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
//importamos la hoja de estilo para todo el proyecto en app.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
    return (
        <>
            <Container className="my-5">
                <h1 className="display-4">Lista de tareas</h1>
                <hr />
                <FormularioTarea />
                <ListaTareas />
            </Container>
        </>
    );
}

export default App;
