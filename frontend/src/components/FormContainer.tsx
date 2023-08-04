import { Container, Row, Col } from 'react-bootstrap';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function FormContainer({ children }: Props) {
  return (
    <Container>
      <Row className='justify-content-md-center mt-5'>
        <Col xs={12} md={6} className='card p-5'>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
