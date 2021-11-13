import React, { useState } from 'react'


const AddUserForm = props => {
	const initialFormState = { id: null, name: '', phone: '' }
    
	const [ user, setUser ] = useState(initialFormState)

    
	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.phone) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} required/>
			<label>Phone</label>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} required/>
			<button>Add new contact</button>
		</form>
	)
}

export default AddUserForm