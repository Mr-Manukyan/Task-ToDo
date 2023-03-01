import { instance } from "./axios_instance"

export const todoAPI = {

    getAllToDos() {
        return instance.get('todos/').then((res) => res.data)
    },

    createOneToDo(newToDo) {
        return instance.post(`todos/create`, newToDo).then(res => res.data)
    },

    deleteOneToDo(todoID) {
        return instance.delete(`todos/delete/${todoID}`).then((res) => res.data)
    },

    changeToDoIsDone(isDone, todoID) {
        return instance.patch(`todos/update/isDone`, { isDone, todoID }).then((res) => res.data)
    },

    updateOneToDoData(todoUpdateData) {
        return instance.patch(`todos/update/data`, todoUpdateData).then((res) => res.data)
    },

}