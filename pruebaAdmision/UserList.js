import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card } from 'reactstrap'
import DataTable from 'react-data-table-component'

import BreadCrumbs from '@components/breadcrumbs'
import { ChevronDown, Edit } from 'react-feather'
import Avatar from '@components/avatar'

import {  useHistory } from 'react-router-dom'


const UserList = () => {

  const history = useHistory()

  const columns = [
    {
      name: '  ',
      selector: ' ',
      sortable: true,
      width: '50px',
      cell: row => (
        <div className='d-flex align-items-center'>
          <Avatar img={`${row.avatar}`} /> &nbsp;&nbsp;
        </div>
      )
    },
    {
      name: 'Nombre',
      selector: 'first_name',
      sortable: true,
      minWidth: '250px'
    },
    {
      name: 'Apellido',
      selector: 'last_name',
      sortable: true,
      minWidth: '150px'
    },

    {
      name: 'Email',
      selector: 'email',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Acciones',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='d-flex'>
            <Edit size={15} onClick={() => {
              console.log(row.id)
              history.push(`/user/${row.id}`)
            }} />
          </div>
        )
      }
    }
  ]


  const [data1, setData1] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [usuarios, setUsuarios] = useState(1)

  const [refreshTable, setRefreshTable] = useState(false)

  useEffect(() => {

    setIsLoading(true)
    fetch(`https://reqres.in/api/users?page=${usuarios}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data[0])
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
      <BreadCrumbs breadCrumbTitle='Usuarios' breadCrumbParent='Usuarios' />

      <Card>

        <DataTable
          noHeader
          highlightOnHover
          striped
          theme='light'
          data={data1}
          columns={columns}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
        />

      </Card>
      <Button.Ripple color='primary' outline onClick={() => {
        if (refreshTable) setUsuarios(1) 
        else setUsuarios(2) 
        setRefreshTable(!refreshTable)
      }} >
        Cambiar Usuarios
      </Button.Ripple>
      <h1></h1>
    </Fragment>
  )
}
export default UserList
