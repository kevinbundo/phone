import React, { useState,useEffect, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css'



const App = () => {
	
  const usersData = JSON.parse(window.localStorage.getItem('users' || "[]"))
	// const usersData = [
	// 	{ id: 1, name: 'Kevin', phone: '0675167244' },
	// 	{ id: 2, name: 'Isi', phone: '0675167245' },
	// 	{ id: 3, name: 'Joni', phone: '0675167246' },
	// ]

	const initialFormState = { id: null, name: '', phone: '' }

	
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  useEffect(() => {
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users])

	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, phone: user.phone })
	}

	return (
		<Paper style ={{ 
      padding: 0, 
      margin: 0, 
      height: '100vh', 
      backgroundColor: "#fafafa"}} 
      elevation={0}>
        <AppBar 
               color='primary' 
               position="static"
               style={{ height: '85px'}}
               >
                   <Toolbar >
                       <Typography variant="h4" color="inherit"> Phones </Typography>
                   </Toolbar>


               </AppBar>
			
			<div >
				<div >
					{editing ? (
						<Fragment>
							<h2>Edit contacts</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add contact</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div >
					<h2>View contacts</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
      </Paper>
	)
}

export default App