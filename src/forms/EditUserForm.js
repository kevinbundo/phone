import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Phone</label>
      <input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
      <button>Update contact</button>
      <Button onClick={() => props.setEditing(false)} variant="contained" color='primary'>
        Cancel
      </Button>
    </form>
  )
}

export default EditUserForm