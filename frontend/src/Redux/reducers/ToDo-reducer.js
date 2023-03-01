import { todoAPI } from "../../api/todos_api"

const SET_TODOS = "APP/TODO/SET_TODOS"
const SET_IS_LOADING = "APP/TODO/SET_IS_LOADING"

let initialState = {
  todos: [],
  isLoading: false
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TODOS:
      return {
        ...state,
        todos: [...action.todos],
      }

    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }

    default:
      return state
  }
}

// ActionCreator

export const todoActions = {

  setToDos: (todos) =>
  ({
    type: SET_TODOS,
    todos,
  }),

  setIsLoading: (isLoading) =>
  ({
    type: SET_IS_LOADING,
    isLoading
  }),

}

// Thunk

export const getAllToDos = () => {
  return async (dispatch) => {
    try {
      dispatch(todoActions.setIsLoading(true))
      const data = await todoAPI.getAllToDos()
      if (data.resultCode === 200) {
        dispatch(todoActions.setToDos(data.todos))
      }
      dispatch(todoActions.setIsLoading(false))
    } catch (err) {
      console.error(err)
      dispatch(todoActions.setIsLoading(false))
    }
  }
}

export const createOneToDo = (newTodo) => {
  return async (dispatch) => {
    try {
      dispatch(todoActions.setIsLoading(true))
      const data = await todoAPI.createOneToDo(newTodo)
      if (data.resultCode === 201) {
        console.log(data)
        dispatch(todoActions.setToDos(data.todos))
      }
      dispatch(todoActions.setIsLoading(false))
    } catch (err) {
      console.error(err)
      dispatch(todoActions.setIsLoading(false))
    }
  }
}

export const removeOneToDo = (todoID) => {

  return async (dispatch) => {
    try {
      dispatch(todoActions.setIsLoading(true))
      const data = await todoAPI.deleteOneToDo(todoID)
      if (data.resultCode === 200) {
        dispatch(todoActions.setToDos(data.todos))
      }
      dispatch(todoActions.setIsLoading(false))
    } catch (err) {
      console.error(err)
      dispatch(todoActions.setIsLoading(false))
    }
  }
}

export const changeToDoIsDone = (isDone, todoID) => {
  return async (dispatch) => {
    try {
      dispatch(todoActions.setIsLoading(true))
      const data = await todoAPI.changeToDoIsDone(isDone, todoID)
      if (data.resultCode === 200) {
        dispatch(todoActions.setToDos(data.todos))
      }
      dispatch(todoActions.setIsLoading(false))
    } catch (err) {
      console.error(err)
      dispatch(todoActions.setIsLoading(false))
    }
  }
}

export const updateOneToDoData = (todoUpdateData) => {
  return async (dispatch) => {
    try {
      dispatch(todoActions.setIsLoading(true))
      const data = await todoAPI.updateOneToDoData(todoUpdateData)
      if (data.resultCode === 200) {
        dispatch(todoActions.setToDos(data.todos))
      }
      dispatch(todoActions.setIsLoading(false))
    } catch (err) {
      console.error(err)
      dispatch(todoActions.setIsLoading(false))
    }
  }
}










