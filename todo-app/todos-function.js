// getting todos from local storage

const getSavedTodos = function (){
    const todoJson = localStorage.getItem('todos')

    if (todoJson !== null){
        return JSON.parse(todoJson)
    }else{
        return []
    }
}

// save todos

const saveTodos = function(todos){
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getting remaining todos

const getThingsTodo = function(todos){
    return todos.filter(function (todo){
         return !todo.completed
     })
 }

 // show remaining todos in browser
 const showReaminingTodos = function (todos){
    const p1 = document.createElement('h2');
     p1.textContent = `You have ${getThingsTodo(todos).length} todos left`;
     document.querySelector('#todo').appendChild(p1);
 }
// remove todo
const removeTodo = function (id){
    const index = todos.findIndex(function (todos){
        return todos.id == id
    })

    if (index > -1){
        todos.splice(index, 1)
    }
}
 // show filtered todos in browser

 const getTodos = function (todo){
        const newElem = document.createElement('div')  

        const input = document.createElement('input')// checkbox for each todo
        input.setAttribute('type', 'checkbox')

        const text = document.createElement('span')// paragraph for each todo
        text.textContent = todo.text
        
        const button = document.createElement('button') // button for each todo
        button.textContent = 'Remove'
        button.addEventListener('click', function (e){
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodo(todos, filters)
        })
        
        newElem.appendChild(input)
        newElem.appendChild(text)
        newElem.appendChild(button)
        
        document.querySelector('#todo').appendChild(newElem)
        
        
 }
 const getFilteredTodos = function (todos, filters){
    return todos.filter(function (todo){
        const searResult = todo.text.toLowerCase().includes(filters.searchtodo.toLowerCase())
        const filteredResult = !filters.hideCompleted || !todo.completed
        
        return searResult && filteredResult
    })
 }


 const renderTodo = function(todos, filters){
    let filteredTodos = getFilteredTodos(todos, filters)
    
    document.querySelector('#todo').innerHTML = ''
    
    showReaminingTodos(todos)

    filteredTodos.forEach(function (todo){
        getTodos(todo)
    })
}