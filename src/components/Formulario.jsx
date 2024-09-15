import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <>
      <Form className="w-25">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ubicacion</Form.Label>
          <Form.Control type="text" placeholder="Ej: San Miguel de Tucuman" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Pais</Form.Label>
          <Form.Control type="text" placeholder="Ej: Argentina" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Consultar clima
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
