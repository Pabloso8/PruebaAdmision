import React, { Fragment } from 'react'
import { Row, Card, Col, CardText, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap'
import gitFlow from './Imagenes/gitFlow.png'
import trunk from './Imagenes/Trunk.png'

import { Minus } from 'react-feather'
import BreadCrumbs from '@components/breadcrumbs'


const Questions = () => {

    return (
        <Fragment >
            <BreadCrumbs breadCrumbTitle='Preguntas' breadCrumbParent='Preguntas' />
            <Row>

                <Col sm='12'>
                    <Card >
                        <CardBody>
                            <CardTitle>¿Qué es una prueba unitaria? </CardTitle>
                            <CardText>
                                Una prueba unitaria es una prueba automatizada la cual tiene la función de verificar el correcto funcionamiento de una unidad de código.
                            </CardText>
                            <CardTitle>¿Qué nos permite una prueba unitaria? </CardTitle>
                            <CardText>Permiten identificar errores más fácilmente  al dividir un proyecto en unidades, lo cual nos garantiza que se pueda atender un error sin temer a que otras funcionalidades se vean afectadas, haciendo que el proyecto sea más fácil de mantener. Otra ventaja es que indirectamente se documenta el código.</CardText>
                            <CardTitle>¿Cuándo se aplica? </CardTitle>
                            <CardText>Se aplican cuando se crea una unidad de código y se debe garantizar el el correcto funcionamiento de la misma sin depender de ninguna otra funcionalidad. </CardText>
                            <hr />
                            <footer className='blockquote-footer'>
                                Fuente: <a href="https://www.youtube.com/watch?v=3kzHmaeozDI"> What is Unit Testing? Why YOU Should Learn It - Andy Sterkowitz</a>
                            </footer>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='12'>
                    <Card >
                        <CardBody>
                            <CardTitle>¿Cuáles son las ventajas de la programación funcional? </CardTitle>
                            <CardText>
                                <ListGroup>
                                    <ListGroupItem> <Minus size={12} /> El resultado de una función solo depende de sus parámetros y no de ningún otro valor, como el de una clase por ejemplo. </ListGroupItem>
                                    <ListGroupItem> <Minus size={12} /> Son más fáciles de analizar, ya que solo se debe examinar lo que sucede dentro de la función.</ListGroupItem>
                                    <ListGroupItem> <Minus size={12} /> Son más fáciles de testear.</ListGroupItem>
                                    <ListGroupItem> <Minus size={12} /> Se puede lograr escribir codigo más compacto. Por ejemplo, en JavaScript se puede guardar una función en una variable , pasar como parámetro de otra o también retornarlo de otra función. </ListGroupItem>
                                </ListGroup>
                            </CardText>
                            <hr />
                            <footer className='blockquote-footer'>
                                Fuente: <a href="https://www.youtube.com/watch?v=fsVL_xrYO0w"> Object Oriented vs Functional Programming with TypeScript - Fireship</a>
                            </footer>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='12'>
                    <Card >
                        <CardBody>
                            <Row>
                                <Col><CardTitle className="text-center" >GitFlow  </CardTitle>
                                </Col>
                                <Col><CardTitle className="text-center"> Trunk </CardTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem> <Minus size={12} /> Ideal cuando se trabaja en un proyecto de código abierto, ya que se puede tener control de los cambios.</ListGroupItem>
                                        <ListGroupItem> <Minus size={12} /> Ideal cuando se trabaja con un número considerable de desarrolladores junior, al poder controlar los cambios se puede garantizar calidad en el código.</ListGroupItem>
                                        <ListGroupItem> <Minus size={12} /> Ideal cuando se trabaja con un producto que ya está establecido.</ListGroupItem>
                                    </ListGroup></Col>
                                <Col>
                                    <ListGroup>
                                        <ListGroupItem> <Minus size={12} /> Ideal cuando se comienza un proyecto y se buscan un producto mínimo viable, ya que Trunk permite trabajar con mayor velocidad. </ListGroupItem>
                                        <ListGroupItem> <Minus size={12} /> Ideal cuando se necesita iterar sobre el proyecto con mayor velocidad.</ListGroupItem>
                                        <ListGroupItem> <Minus size={12} /> Ideal cuando se trabaja con muchos desarrolladores con experiencia y de confianza, ya que estos pueden tener más autonomía y reducir procesos de revisión.</ListGroupItem>
                                    </ListGroup></Col>
                            </Row>
                            <hr />

                            <Row>
                                <Col>
                                    <div className="item-img text-center" >
                                        <img width="530" height="672" className="img-fluid" src={gitFlow} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="item-img text-center" >
                                        <img width="530" height="672" className="img-fluid" src={trunk} />
                                    </div>

                                </Col>
                            </Row>

                            <hr />
                            <footer className='blockquote-footer'>
                                Fuente: <a href="https://www.toptal.com/software/trunk-based-development-git-flow"> Trunk-based Development vs. Git Flow - Konrad Gadzinowski</a>
                            </footer>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='12'>
                    <Card >
                        <CardBody>
                            <CardTitle>¿Cuáles son las ventajas de utilizar arquitecturas sin servidor? </CardTitle>
                            <ListGroup>
                                <ListGroupItem> <Minus size={12} /> Los desarrolladores pueden enfocarse en la lógica del negocio en lugar de como va a ser despleagado y mantenido el servicio. </ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Los servicios que permiten arquitecturas sin servidor solo cobran por tiempo de ejecucion y no por tener el servicio activo 24/7.</ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Se escalan de manera automática, además el encargado de esto es el proveedor de serivicio y no el desarollador.</ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Permiten desarrollar rápidamente un producto, generando una ventaja competitiva. </ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Garantizan alta disponibilidad del serivicio. </ListGroupItem>

                            </ListGroup>
                            <CardText></CardText>
                            <CardTitle>Algunos contras de la arquitecturas sin servidor </CardTitle>
                            <CardText>
                                <ListGroup>
                                    <ListGroupItem> <Minus size={12} /> Pueden tener mayor latencia para generar respuesta.</ListGroupItem>
                                    <ListGroupItem> <Minus size={12} /> Se depende del proveedor del servicio.</ListGroupItem>
                                </ListGroup>
                            </CardText>
                            <hr />
                            <footer className='blockquote-footer'>
                                Fuente: <a href="https://www.youtube.com/watch?v=vxJobGtqKVM"> What is Serverless? - IBM Technology</a>
                            </footer>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm='12'>
                    <Card >
                        <CardBody>
                            <CardTitle>¿Qué ventajas tiene el uso de bases de datos no relacionales? </CardTitle>
                            <ListGroup>
                                <ListGroupItem> <Minus size={12} /> Escalan mejor verticalmente y horizontalmente que las bases de datos SQL. </ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> No dependen de un esquema, por lo cual cada elemento puede cambiar, se vuelve una ventaja si la aplicación lo requiere o evoluciona constantemente.</ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Maneja datos no estructurados.</ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Es ideal para manegar grandes cantidades de datos. </ListGroupItem>
                                <ListGroupItem> <Minus size={12} /> Es ideal para manegar información en tiempo real. </ListGroupItem>

                            </ListGroup>

                            <hr />
                            <footer className='blockquote-footer'>
                                Fuente: <a href="https://www.youtube.com/watch?v=ruz-vK8IesE"> SQL vs NoSQL Explained - Be A Better Dev</a>
                            </footer>
                        </CardBody>
                    </Card>
                </Col>


            </Row>
        </Fragment>
    )
}
export default Questions
