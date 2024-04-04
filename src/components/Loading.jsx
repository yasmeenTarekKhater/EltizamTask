import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Skeleton from 'react-loading-skeleton';

const Loading = () => {
  return (
     <Container className='mt-5'>
          <Row className='align-items-center'>
            <Col md="4" className='text-center'>
              <Skeleton circle={true} width={200} height={200}/>
              <Skeleton />
            </Col>
            <Col md="6">
              <Skeleton count={4}/>
            </Col>
          </Row>
        </Container>
  )
}

export default Loading;