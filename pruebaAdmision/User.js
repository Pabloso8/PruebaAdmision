import React, { Fragment, useEffect, useState } from 'react'
import {  Badge, CardImg, Button, CardBody, Card } from 'reactstrap'
import coverImg from '@src/assets/images/banner/banner-12.jpg'

import BreadCrumbs from '@components/breadcrumbs'
import Avatar from '@components/avatar'

import { useParams, useHistory } from 'react-router-dom'


const Alerts = () => {

  const history = useHistory()
  const { id } = useParams()


  const [data1, setData1] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshTable, setRefreshTable] = useState(false)

  useEffect(() => {

    // export let data
    setIsLoading(true)
    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData1(data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setData1([])
        setIsLoading(false)
      })
  }, [refreshTable])

  return isLoading ? (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>) : (

    <Fragment>
      <BreadCrumbs breadCrumbTitle='Usuario' breadCrumbParent='Usuario' />

      <Card className='card-profile'>
        <CardImg className='img-fluid' src={coverImg} top />
        <CardBody>
          <div className='profile-image-wrapper'>
            <div className='profile-image'>
              <Avatar img={`${data1.avatar}`} />
            </div>
          </div>
          <h3>{data1.first_name}</h3>
          <h6 className='text-muted'>{data1.last_name}</h6>
          <Badge className='profile-badge' color='light-primary'>
            {data1.email}
          </Badge>
          <hr className='mb-2' />
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h6 className='text-muted font-weight-bolder'>Projects</h6>
              <h3 className='mb-0'>{(Math.floor(Math.random() * 50))} </h3>
            </div>
            <div>
              <h6 className='text-muted font-weight-bolder'>Age</h6>
              <h3 className='mb-0'>{(Math.floor(Math.random() * 80))}</h3>
            </div>
            <div>
              <h6 className='text-muted font-weight-bolder'>Rango</h6>
              <h3 className='mb-0'>{(Math.floor(Math.random() * 50))}</h3>
            </div>
          </div>
        </CardBody>


      </Card>
      <Button.Ripple color='primary' outline onClick={() => history.push(`/userList`)}>
        Volver a Usuarios
      </Button.Ripple>
      <h1></h1>

    </Fragment>
  )
}
export default Alerts
