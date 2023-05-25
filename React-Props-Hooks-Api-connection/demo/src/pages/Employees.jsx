import React, { useEffect, useState } from 'react'
import { Button, Table } from 'reactstrap'
import axios from 'axios'
import AddEmploye  from '../components/admin/AddEmploye';

function Employees() {
  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState([])

  const baseUrl = "https://localhost:7012/";

  const hide = () => {
    setOpen(false)
  }

  useEffect(() => {
      axios.get(`${baseUrl}api/Employee/GetALL`).then((response) => {
      setEmployees(response.data)
    })
  }, [])

  return (
    <div className='container my-4'>
      <AddEmploye hide={hide} open={open} />
      <h3 className='text-center mb-3'>Employees</h3>
      <Button onClick={() => setOpen(true)} color="primary" outline>Create</Button>
      <Table>
        <thead>
          <tr>
            <th>
              Fullname
            </th>
            <th>
              Age
            </th>
            <th>
              Address
            </th>
            <th>
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(function (item, i) {
              return <tr key={i}>
                <th>
                  {item.fullName}
                </th>
                <td>
                  {item.age}
                </td>
                <td>
                  {item.address}
                </td>
                <td>
                  <Button color="warning" outline>Detail</Button>
                  <Button className='mx-3' color="success" outline>Edit</Button>
                  <Button color="danger" outline>Delete</Button>
                </td>
              </tr>
            })
          }

        </tbody>
      </Table>
    </div>
  )
}

export default Employees