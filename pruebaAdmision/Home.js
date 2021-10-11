import React, { Fragment } from 'react'
import { Row, Col, CardText, CardTitle, Badge, CardImg, ListGroup, ListGroupItem, CardBody, Card } from 'reactstrap'
import coverImg from '@src/assets/images/banner/banner-16.jpg'
import { Minus } from 'react-feather'
import imgg1 from '@src/assets/images/slider/04.jpg'
import imgg2 from '@src/assets/images/slider/03.jpg'
import imgg3 from '@src/assets/images/slider/06.jpg'
import img1 from '@src/assets/images/banner/banner-1.jpg'
import img2 from '@src/assets/images/banner/banner-2.jpg'
import img3 from '@src/assets/images/banner/banner-4.jpg'

const Homee = () => {
  return (

    <Fragment>

      <Card className='card-profile'>
        <CardImg className='img-fluid' src={coverImg} top />
        <CardBody>
          <h3>{"Juan Pablo Medna Quiñones"}</h3>
          <h6 className='text-muted'>{"Estudiante Ing. Sistemas y Computación"}</h6>
          <Badge className='profile-badge' color='light-primary'>
            {"Universidad EIA"}
          </Badge>
          <hr className='mb-2' />
          <h5>{"Estudiante de 8vo semestre de Ingeniería de Sistemas y Computación. Tiene experiencia utilizando herramientas para desarrollo de aplicaciones para Front-End y Back-End. Se destaca por su buen rendimiento académico. Le apasiona desarrollar soluciones digitales que sirvan a la sociedad y a la economía."}</h5>
          <Badge className='profile-badge' color='light-primary'>
          </Badge>

        </CardBody>

      </Card>
      <hr className='mb-2' />

      <h3 className='card-profile font-weight-bolder'>Proyectos</h3>

      <Row>
        <Col><Card>
          <CardImg top src={imgg1} alt='Card cap' />
          <CardBody><CardTitle>Easy Inventory - 2019</CardTitle>
            <CardText><strong className="font-weight-bolderer" >Aplicación Web y Móvil </strong> para el manejo de inventarios. Dirigida para iOS y Android. Ambas versiones comparte la misma información gracias a la conexión a bases de datos hosteada en AWS.
            </CardText></CardBody>
        </Card></Col>
        <Col><Card>
          <CardImg top src={imgg2} alt='Card cap' />
          <CardBody><CardTitle>Datazo - 2020</CardTitle>
            <CardText>Aplicación Web para aplicar algoritmos de <strong className="font-weight-bolderer" >Inteligencia Artificial </strong>como Regresiones lineales, Clustering, Nearest Neighbor. Tiene módulo para <strong className="font-weight-bolderer" >análisis de datos.</strong> Creado con principios básicos de arquitectura y microservicios para escalamiento horizontal.
            </CardText></CardBody>
        </Card></Col>
        <Col><Card>
          <CardImg top src={imgg3} alt='Card cap' />
          <CardBody><CardTitle>SpotiClone - 2021</CardTitle>
            <CardText>Aplicación Web que imita ciertas características de Spotify. Creada con el objetivo de explorar conceptos claves para <strong className="font-weight-bolderer" > bases de datos SQL. </strong>
            </CardText> </CardBody>
        </Card></Col>
      </Row>
      <hr className='mb-2' />
      <h3 className='card-profile font-weight-bolder'>Información Adicional</h3>

      <Row>
        <Col><Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody><CardTitle> Habilidades</CardTitle>
            <CardText>
              <ListGroup>
                <ListGroupItem> <Minus size={12} /> JavaScript </ListGroupItem>
                <ListGroupItem> <Minus size={12} /> Java </ListGroupItem>
                <ListGroupItem> <Minus size={12} /> Pyhton </ListGroupItem>
                <ListGroupItem> <Minus size={12} /> SQL </ListGroupItem>
              </ListGroup>
            </CardText></CardBody>
        </Card></Col>
        <Col><Card>
          <CardImg top src={img2} alt='Card cap' />
          <CardBody><CardTitle>Idiomas </CardTitle>
            <ListGroup>
              <ListGroupItem> <Minus size={12} /> Inglés - B2 </ListGroupItem>
              <ListGroupItem> <Minus size={12} /> Francés - B2 </ListGroupItem>
              <ListGroupItem> <Minus size={12} /> Español - Fluido </ListGroupItem>

            </ListGroup>
            <CardText>
            </CardText></CardBody>
        </Card></Col>
        <Col><Card>
          <CardImg top src={img3} alt='Card cap' />
          <CardBody><CardTitle>Temas de interés </CardTitle>
            <CardText>
              <ListGroup>
                <ListGroupItem> <Minus size={12} /> Desarrollo de aplicaciones </ListGroupItem>
                <ListGroupItem> <Minus size={12} /> Inteligencia Artificial </ListGroupItem>
                <ListGroupItem> <Minus size={12} /> Empredimiento </ListGroupItem>

              </ListGroup>
            </CardText> </CardBody>
        </Card></Col>

      </Row>
    </Fragment>
  )
}
export default Homee
