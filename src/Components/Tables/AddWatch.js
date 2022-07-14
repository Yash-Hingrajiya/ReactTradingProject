import React from 'react'
import { Button, Col, Container, Modal, Row, Form } from 'react-bootstrap'

function AddWatch (props) {
  return (
    <>
      <Modal {...props} aria-labelledby='contained-modal-title-vcenter'>
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            Portfolio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <h6>Portfolio List</h6>
                <Form.Select aria-label='Default select example'>
                  <option>Watch</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                <h6>Save Portfolio As</h6>
                <Form.Control type='email' placeholder='Portfolio Name' />
                <br />
                <Button>ADD</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddWatch
