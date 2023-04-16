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

let incompleteTask = function(todos){
    let count = 0
    todos.forEach(function(todo){
        if (todo.completed === false){
            count = count + 1
        }
    })
    return count
}
const message = document.createElement('h2')
message.textContent = `You have ${incompleteTask(todos)} todos left`
document.querySelector('body').appendChild(message)

todos.forEach(function(todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').append(p)
})
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


