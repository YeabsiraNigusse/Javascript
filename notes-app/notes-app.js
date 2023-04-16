// DOM - Document Object Manipulation
// an object that models html document inside a javascript

const ps = document.querySelectorAll('p')// an object of paragraph
//console.log(p)
ps.forEach(function(p){ // catching all paragraph tags
    //p.remove()
    p.textContent = '*****'
})

// what do you learn untill now
// 1. document setup
// 2. manipulation of html document via DOM - like reading text content, removing text and selecting specific element from htm text

// adding new element 

const newParagraph = document.createElement('p')//creating element
newParagraph.textContent = 'this is new paragraph element from javascript'//giving it a value
document.querySelector('body').appendChild(newParagraph)//giving it a position