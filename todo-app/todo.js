//DOM - Document Objet Model
const todos = [
    {
        text: 'Preparing for tomorrow',
        completed: false
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
        completed: false
    },
    {
        text:'take ATM card from the bank',
        completed:false
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
document.querySelector('body').appendChild(p1);


// get every todos 

todos.forEach(function (todo){
    let p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})


// handling user interaction

document.querySelector('button').addEventListener('click',function (e){
    console.log('learning about user interaction')
})

document.querySelector('#todo').addEventListener('click', function (e){
    e.target.textContent = 'Clicked'
})