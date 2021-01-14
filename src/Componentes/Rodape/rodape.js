import React from 'react';
import './rodape.css';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Rodape = () => {
    
  return (
    <footer>
      <h2 className={'inscricao'}>INSCREVA-SE</h2>
      <Form className={'inscricao-form'}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleName">Nome</Label>
              <Input type="text" name="nome" id="exampleName" placeholder="Digite seu nome" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">E-mail</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Cidade</Label>
              <Input type="text" name="city" id="exampleCity" placeholder="Digite sua cidade" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Estado</Label>
              <Input type="text" name="state" id="exampleState" placeholder="Digite seu estado" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCountry">País</Label>
              <Input type="text" name="country" id="exampleCountry" placeholder="Digite seu país" />
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Quero receber material exclusivo!</Label>
        </FormGroup><br/>
        <Button onClick={() => {alert('Tudo certo! 🎉 Você receberá meus materiais exclusivos por e-mail📰. Obrigada! 🥰')}} className={'buton-form'}>Enviar</Button>
      </Form><br/>
          <h6>Copyright (c) - 2020 - L I L I T</h6>
    </footer>
  );
}

export default Rodape;