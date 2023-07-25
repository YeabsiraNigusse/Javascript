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

const checkTodo = function (id){
    const index = todos.findIndex(function (todo){
        return todo.id == id 
    })

    if (index > -1){
        if (todos[index].completed){
          todos[index].completed = false
        }else{
            todos[index].completed = true
        }
    }
}
 // show filtered todos in browser

 const getTodos = function (todo){
        const newElem = document.createElement('div')  

        const checkbox = document.createElement('input')// checkbox for each todo
        checkbox.setAttribute('type', 'checkbox')
        checkbox.checked = todo.completed // retriving complition of todo from local storage
        checkbox.addEventListener('click', function (e){
           checkTodo(todo.id)
           saveTodos(todos)
           renderTodo(todos, filters)
        })


        const text = document.createElement('span')// paragraph for each todo
        text.textContent = todo.text
        
        const button = document.createElement('button') // button for each todo
        button.textContent = 'Remove'
        button.addEventListener('click', function (e){
           // removeTodo(todo.id)
            saveTodos(todos)
            renderTodo(todos, filters)
        })
        
        newElem.appendChild(checkbox)
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