// create todo array

const todo = [
    'Finish Array section of Javascript bootcamp',
    'Read Bible',
    'Eat Lunch',
    'study haskell',
    'go to small group program'
]
console.log(`I have ${todo.length} things to do`)
//console.log('Todo list: '+ todo)

// another challenge
// Delete 3rd item from the list  
// add item to the end of the list
// remove the first element from the list 

todo.splice(2, 1)
todo.push('Attending Meeting')
todo.shift()
//console.log(todo)

todo.forEach(function(item, index){
    console.log(`${1 + index}, ${item}`)
}) 
// console.log()
// for(let i =0; i<todo.length; i++){
//     console.log(`${i+1}, ${todo[i]}`)
// }
