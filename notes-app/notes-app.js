// DOM - Document Object Manipulation
// an object that models html document inside a javascript

const ps = document.querySelectorAll('p')
//console.log(p)
ps.forEach(function(p){
    //p.remove()
    p.textContent = '*****'
})
