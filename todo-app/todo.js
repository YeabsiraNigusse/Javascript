const todos = []
filters = {
    searchedText: '',
    hideCompleted: false
}

filteredTodos = function(todos, filters){// this is the function that filters based on the text input
    const filterd = todos.filter(function(todo){
       return todo.text.toLowerCase().includes(filters.searchedText.toLowerCase()) && (!todo.completed || filters.hideCompleted)
    })

    let incompleteTask = function(){
        let count = 0
        filterd.forEach(function(todo){
            if (todo.completed === false){
                count = count + 1 // this is for to know how match todos left
            }
        })
        return count
    }
    document.querySelector('#todo-div').innerHTML = ''

    const message = document.createElement('h2')
    message.textContent = `You have ${incompleteTask()} todos left`// this is appending h2 to our browser
    document.querySelector('#todo-div').appendChild(message)

    filterd.forEach(function(todos){
        const newEle = document.createElement('p')// this is appending the filtered todos
        if (todos.text.length > 0){
            newEle.textContent = todos.text
        }else{
            newEle.textContent = 'Unnamed todo'
        }
        document.querySelector('#todo-div').appendChild(newEle)
    })
}

filteredTodos(todos, filters)
document.querySelector('#checkbox').addEventListener('change' , function(e){
    if (e.target.checked){
        filters.hideCompleted = false
    }else{
        filters.hideCompleted = true
    }
    filteredTodos(todos, filters)
})
document.querySelector('#add-todo-input').addEventListener('input', function(e){// learning listning input form
    filters.searchedText = e.target.value
    filteredTodos(todos, filters) // calling filteredtodo with updated user input
})

// PREPARE FORM WITH INPUT AND BUTTON ELEMENT(DONT FORGET NAME, PLACEHOLDER, TEXT)
// PREPARE EVENT LISTNER OF THE FORM USING BY ITS ID AND SUBMIT TYPE
// CALL PREVENTDEFAULT METHOD AND ASSIGN EMPTY VALUE INTO THE INPUT PLACE

document.querySelector('#todo-form').addEventListener('submit', function(e){// learning listning submit button
    e.preventDefault()

        todos.push({// this eventlistner recive user todos  from the user and append it to the todos list by using submit button
            text: e.target.elements.AddTodo.value,
            completed: false
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    filteredTodos(todos, filters)
    e.target.elements.AddTodo.value = ''
})

