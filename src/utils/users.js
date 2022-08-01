const users = []

// -------------------- addUser Function --------------------
const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate the data
  if (!username || !room) {
    return {
      error:  'Username and room are required!'
    }
  }

  // Checking for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
    }
  }

  // Store user
  const user = { id, username, room }
  users.push(user)
  return { user }
}

// -------------------- removeUser Function --------------------
const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

// -------------------- getUser Function --------------------
const getUser = (id) => {
  return users.find(user => user.id === id)
}

// -------------------- getUserInRoom Function --------------------
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase()
  return users.filter(user => user.room === room)
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}


// -------------------------------------------------- Test --------------------------------------------------
// ------------- Test addUser -------------
// addUser(
//   {
//   id: 22,
//   username: 'Adriano',
//   room: 'Sao Paulo    '
//   }
// )

// addUser(
//   {
//     id: 23,
//     username: 'Jose',
//     room: 'Sao Paulo    '
//   }
// )

// addUser(
//   {
//     id: 24,
//     username: 'lili',
//     room: 'Rio de Janeiro'
//   }
// )

// console.log(users)

// ------------- Test removeUser -------------
// const removedUser = removeUser(22)
// console.log(removedUser)
// console.log(users)

// ------------- Test getUser -------------
// const getUser1 = getUser(23)
// console.log(getUser1)

// ------------- Test getUserInRoom -------------
// const userRoom = getUserInRoom("Sao Paulo    ")
// console.log(userRoom)

