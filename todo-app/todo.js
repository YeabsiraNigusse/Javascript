const todos = [
    {
        text: 'Finish DOM section of Javascript bootcamp',
        completed: false
    },
    {
        text: 'Take Shower',
        completed: true
    },
    {
        text: 'celebrate Ester',
        completed: true
    },
    {
        text: 'study haskell',
        completed: false
    }
]

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

// const p1 = document.createElement('p')
// p1.textContent = todos[0].text
// document.querySelector('body').append(p1)

// const p2 = document.createElement('p')
// p2.textContent = todos[1].text
// document.querySelector('body').append(p2)

// const p3 = document.createElement('p')
// p3.textContent = todos[2].text
// document.querySelector('body').append(p3)

// const p4 = document.createElement('p')
// p4.textContent = todos[3].text
// document.querySelector('body').append(p4)

// console.log(todos[0])

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
    searchedText: ''
}
filteredTodos = function(todos, filters){
    const filterd = todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchedText.toLowerCase())
    })

    let incompleteTask = function(){
        let count = 0
        filterd.forEach(function(todo){
            if (todo.completed === false){
                count = count + 1
            }
        })
        return count
    }
    document.querySelector('#todo-div').innerHTML = ''

    const message = document.createElement('h2')
    message.textContent = `You have ${incompleteTask()} todos left`
    document.querySelector('#todo-div').appendChild(message)

    filterd.forEach(function(todos){
        const newEle = document.createElement('p')
        newEle.textContent = todos.text
        document.querySelector('#todo-div').appendChild(newEle)
    })
}

filteredTodos(todos, filters)

document.querySelector('#add-todo-input').addEventListener('input', function(e){
    filters.searchedText = e.target.value
    filteredTodos(todos, filters)
})

// PREPARE FORM WITH INPUT AND BUTTON ELEMENT(DONT FORGET NAME, PLACEHOLDER, TEXT)
// PREPARE EVENT LISTNER OF THE FORM USING BY ITS ID AND SUBMIT TYPE
// CALL PREVENTDEFAULT METHOD AND ASSIGN EMPTY VALUE INTO THE INPUT PLACE

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    e.target.elements.AddTodo.value = ''
})
