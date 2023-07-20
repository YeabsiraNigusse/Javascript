//DOM - Document Objet Model

const todos = getSavedTodos()

const filters = {
    searchtodo: '', 
    hideCompleted: false
}

renderTodo(todos, filters) 

// handling user interaction
document.querySelector('#add-form').addEventListener('submit', function (e){//accessing a user data from a form
    e.preventDefault()
    
    if (e.target.elements.newTodo.value == ''){
        console.log('enter some todos')
    }else{
        todos.push({
            id: uuidv4(),
            text: e.target.elements.newTodo.value,
            completed: false
        })
    }
    
    console.log(todos) 
    saveTodos(todos)

    renderTodo(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector('#search').addEventListener('input', function(e){

    filters.searchtodo = e.target.value
    renderTodo(todos, filters)
    
})
document.querySelector('#checkbox').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderTodo(todos, filters)

})