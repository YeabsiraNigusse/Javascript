//DOM - Document Objet Model
const todos = [
    {
        text: 'Preparing for tomorrow',
        completed: true
    },
    {
        text: 'weaking up early morning and leave to work',
        completed: false
    },
    {
        text: 'read bible in the bus',
        completed: false
    },
    {
        text: 'take internship paper from head office',
        completed: true
    },
    {
        text:'take ATM card from the bank',
        completed:true
    },
    {
        text:'revise week 3 and week 4 plutus course at the work and come back home',
        completed: false
    }
]

// get things to do

let remaining = 0
todos.forEach(function (todo){
    if (todo.completed == false){
        remaining += 1;
    }
})
const getThingsTodo = function(todos){
   return todos.filter(function (todo){
        return !todo.completed
    })
}
const p1 = document.createElement('h2');
p1.textContent = `You have ${getThingsTodo(todos).length} todos left`;
document.querySelector('#h2').appendChild(p1);


// get every todos 

// todos.forEach(function (todo){
//     let p = document.createElement('p');
//     p.textContent = todo.text;
//     document.querySelector('body').appendChild(p);
// })

const filters = {
    searchtodo: '', 
    hideCompleted: false
}
const renderTodo = function(todos, filters){
    let filteredTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchtodo.toLowerCase())
    })

    filteredTodos = todos.filter(function (todo){
        if (filters.hideCompleted){
            return !todo.completed
        }else{
            return true
        }
    })
    //console.log(filteredTodos)
    document.querySelector('#todo').innerHTML = ''

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

    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    
    console.log(todos)
    renderTodo(todos, filters) 
    e.target.elements.newTodo.value = ''
})
 
document.querySelector('#search').addEventListener('input', function(e){

    filters.searchtodo = e.target.value
    renderTodo(todos, filters)
    
})
document.querySelector('#checkbox').addEventListener('change', function (e){
    console.log(e.target.checked)
    if (e.target.checked == true){
        filters.hideCompleted = true
    }else{
        filters.hideCompleted = false
    }
    renderTodo(todos, filters)

})