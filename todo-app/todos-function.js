const getSavedTodos = function(todos){
    const localTodo = localStorage.getItem('todos')
if (localTodo !==null){
    todos = JSON.parse(localTodo)
}
}