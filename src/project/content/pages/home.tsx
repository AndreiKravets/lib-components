import { useState } from 'react'
import { Col, Container, Row, Section } from '../../../my-lib/layout'
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card'
import { Avatar, Image } from '../../../my-lib/components/image'
import { BtnModern } from '../../../my-lib/components/buttons'
const Home = () => {

  return (
    <>
     <Section p='20px'>
      <Container fullwidth='true'>
        <Row>
          <Col size={4}>
            <Card shadow='variant-1' >
              <CardHeader>
                <Image src='https://loremflickr.com/640/360'></Image>
              </CardHeader>
              <CardContent p='20px' pb='0'>
                <Avatar shadow='variant-2' bg='blue' color='white' mb='10px'>AA</Avatar>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptates est ratione maxime doloribus, adipisci facilis nulla eum totam fugit.
              </CardContent>
              <CardFooter p='20px' pt='0'>
                <BtnModern hover='victoria horizontal'>read more</BtnModern>
                <BtnModern hover='victoria left'>read more</BtnModern>
              </CardFooter>
            </Card>
           </Col>
          <Col size={4}>
            <Card shadow='variant-1' >
              <CardHeader>
                <Image src='https://loremflickr.com/640/360'></Image>
              </CardHeader>
              <CardContent p='20px' pb='0'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptates est ratione maxime doloribus, adipisci facilis nulla eum totam fugit.
              </CardContent>
              <CardFooter p='20px' pt='0'>
                <BtnModern hover='victoria horizontal'>read more</BtnModern>
                <BtnModern hover='victoria left'>read more</BtnModern>
              </CardFooter>
            </Card>
           </Col>
          <Col size={4}>
            <Card shadow='variant-1' >
              <CardHeader>
                <Image src='https://loremflickr.com/640/360'></Image>
              </CardHeader>
              <CardContent p='20px' pb='0'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptates est ratione maxime doloribus, adipisci facilis nulla eum totam fugit.
              </CardContent>
              <CardFooter p='20px' pt='0'>
                <BtnModern hover='victoria horizontal'>read more</BtnModern>
                <BtnModern hover='victoria left'>read more</BtnModern>
              </CardFooter>
            </Card>
           </Col>
        </Row>
      </Container>
     </Section>
      
    </>
  )
}
export default Home