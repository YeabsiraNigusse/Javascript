let todos = []

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p){
//     if (p.textContent.includes('the')){//removing elements depending on thir content
//         p.remove()
//     }
// })

// challenge time
// you have 2 todos left(p element)
// add a p for each todo above(use text value)


// todos.forEach(function(todo){// THIS IS POWERFULL
//     const p = document.createElement('p')// WE ARE ABLE TO CREAT AN ELEMENT WE WANT AND INSERT OUR VALUE INTO IT BROWSER(HOW ABOUT THAT)
//     p.textContent = todo.text
//     document.querySelector('body').append(p)// INSERTING PARAGRAPH ELEMENT AND ADDING OBJECT VALUE INTO IT
// })

// document.querySelector('button').addEventListener('click', function(){// adding event listener for button click
//     console.log('You added todo')
// })

// document.querySelector('#add-todo').addEventListener('click', function(){
//     console.log('adding todos')
// })
// // add to do input and print to the console
// document.querySelector('#add-todo-input').addEventListener('input', function(e){
//     console.log(e.target.value) // RECIVING INPUT FROM THE USER
// })
// IMPORTANT
// -- TEXT CONTENT IS USED TO GET CONTENTS OF ELEMENTS
// -- VALUE IS USED TO GET CONTENTS OF USER INPUT 


// my challenge if not given
// at this point you can recive todo from the user and append it to the browser
// read input from the input when add todo button is clicked and append the result value to the browser

// document.querySelector('#add-todo-input').addEventListener('change', function(e){
//     document.querySelector('#add-todo').addEventListener('click', function(){
//         const content = e.target.value
//         const p = document.createElement('p')
//         p.textContent = content
//         document.querySelector('body').append(p)
//     })
// })

// rendering data

// WRITE A FUNCTION THAT FILTERS A TODO FROM AN ARRAY BASED ON INPUT TEXT
// APPEND FILTERED ARRAY INTO THE BROWSER BY CREATING PRAGRAPH TAG(USE INNERHTML)
// WRITE USER INPUT LISTNER AND RENDER THE FILTERED TODOS
filters = {
    searchedText: '',
    hideCompleted: false
}
const localTodo = localStorage.getItem('todos')
if (localTodo !==null){
    todos = JSON.parse(localTodo)
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
            text: '',
            completed: false
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    filteredTodos(todos, filters)
    e.target.elements.AddTodo.value = ''
})

// localStorage.setItem('Name', 'Yeabsira')
// //localStorage.removeItem('Name')
// console.log(localStorage.getItem('Name'))
// //localStorage.clear()

// // local storage always support a string data. so what about array and object data(how do we store it using local storage)

// const user ={
//     name : 'Yeabsira',
//     age: 21
// }
// const userJson = JSON.stringify(user)
// console.log(userJson)
// localStorage.setItem('user', userJson)

// const userJSON = localStorage.getItem('user')
// const getuser = JSON.parse(userJSON)
// console.log(`${getuser.name} is ${getuser.age}`)



