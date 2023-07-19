//DOM - Document Objet Model
let todos = []

//getting notes from local storage if there is any stored

const storedTodos = localStorage.getItem('todos')
if (storedTodos !== null){
    todos = JSON.parse(storedTodos)
}

const filters = {
    searchtodo: '', 
    hideCompleted: false
}

const renderTodo = function(todos, filters){
    let filteredTodos = todos.filter(function (todo){
        const searResult = todo.text.toLowerCase().includes(filters.searchtodo.toLowerCase())
        const filteredResult = !filters.hideCompleted || !todo.completed
        return searResult && filteredResult
    })
    //console.log(filteredTodos)
    document.querySelector('#todo').innerHTML = ''

    const getThingsTodo = function(todos){
        return todos.filter(function (todo){
             return !todo.completed
         })
     }
     const p1 = document.createElement('h2');
     p1.textContent = `You have ${getThingsTodo(todos).length} todos left`;
     document.querySelector('#todo').appendChild(p1);

    filteredTodos.forEach(function (todo){
        let newElem = document.createElement('p')
        newElem.textContent = todo.text
        document.querySelector('#todo').appendChild(newElem)
    })
}

renderTodo(todos, filters) 


// handling user interaction
document.querySelector('#add-form').addEventListener('submit', function (e){//accessing a user data from a form
    e.preventDefault()
    //console.log(e.target.elements.newTodo.value)//helps to access specific finput of a form
    if (e.target.elements.newTodo.value == ''){
        console.log('enter some todos')
    }else{
        todos.push({
            text: e.target.elements.newTodo.value,
            completed: false
        })
    }
    
    console.log(todos) 
    localStorage.setItem('todos', JSON.stringify(todos))
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