import React from 'react'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Button from '@material-ui/core/Button'

const UserTable = props => (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
    <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {props.users.length > 0 ? (
        props.users.map(user => (
            <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
            <Button variant="contained" color='primary' onClick={() => {
                  props.editRow(user)
                }}>
                Edit
                </Button>
              <Button variant="contained" color='primary' onClick={() => props.deleteUser(user.id)}>
                
                Delete
                </Button>
              </TableCell>
            </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell> No Phone Numbers</TableCell>
        </TableRow>
      )}
     </TableBody>
    </Table>
)

export default UserTable