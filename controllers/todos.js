const errorHandler = require('../utils/errorHandler')

let inintialState = [
  {
    id: "1",
    toDoText: "React JS",
    isDone: false,
    todoDate: 1676903725177
  },

  {
    id: "2",
    toDoText: "Redux State",
    isDone: true,
    todoDate: 1676903725177
  },
]

module.exports.getAllToDos = async (req, res) => {

  try {
    res.status(200).json({
      todos: inintialState,
      toDostotalCount: inintialState.length,
      resultCode: 200
    })

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.createToDo = async (req, res) => {

  try {
    const newTodo = req.body

    inintialState.push(newTodo)

    res.status(201).json({
      todos: inintialState,
      message: 'created',
      resultCode: 201
    })

  } catch (error) {
    errorHandler(res, error)
  }
}



module.exports.deleteOneToDo = async (req, res) => {

  try {

    const todoID = req.params.id
    inintialState = inintialState.filter(todo => todo.id !== todoID)

    res.status(200).json({
      message: 'delete',
      resultCode: 200,
      todos: inintialState
    })

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.updateToDoIsDone = async (req, res) => {
  const { isDone, todoID } = req.body

  try {

    inintialState = inintialState.map((todo) => {
      if (todo.id === todoID) {
        return {
          ...todo,
          isDone: isDone
        }
      }
      return todo
    })

    res.status(200).json({
      message: 'updated',
      resultCode: 200,
      todos: inintialState
    })

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.updateOneToDoData = async (req, res) => {
  const { id, toDoText, todoDate } = req.body

  try {

    inintialState = inintialState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          toDoText,
          todoDate
        }
      }
      return todo
    })

    res.status(200).json({
      message: 'updated',
      resultCode: 200,
      todos: inintialState
    })

  } catch (error) {
    errorHandler(res, error)
  }
}


