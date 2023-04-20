// // DOM - Document Object Manipulation                                    document.querySelectorAll('p')
// // an object that models html document inside a javascript               p.remove()
//                                                                          p.textContent = '*****'
//                                                                          document.createElement('p')
//                                                                          appendChild(newParagraph)
//                                                                          addEventListener('click', function(){}
// const ps = document.querySelectorAll('p')// an object of paragraph      
// //console.log(p)
// ps.forEach(function(p){ // catching all paragraph tags
//     //p.remove()
//     p.textContent = '*****'
// })

// // what do you learn untill now
// // 1. document setup
// // 2. manipulation of html document via DOM - like READING TEXT CONTENT, REMOVING TEXT and SELECTING SPECIFIC ELEMENT

// adding new element 

// const newParagraph = document.createElement('p')//CREATING ELEMENT
// newParagraph.textContent = 'this is new paragraph element from javascript'//giving it a value
// document.querySelector('body').appendChild(newParagraph)//giving it a position

document.querySelector('button').addEventListener('click', function(){
    console.log('You clicked the Button')
})

// How do we recive an input from the browser inserted by the user
// by adding input event listener

const note = [
    {
       title: 'My haskell Journy',
       body: 'learning building projects'
    }, {
       title: 'my javascript learning journy',
       body: 'finished learning basics'
    }, {
        title: 'fellowship status',
        body: 'still serving fellow'
    }, {
         title: 'class has been started',
         body: 'next week we have exam preparation'
    }]
const filters = {
    selectedtext: ''
}
// rendering notes take notes and text it is filtered
// step 1 - filtering notes(arrays) that only contain that text

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.selectedtext.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    //console.log(filteredNotes)
    filteredNotes.forEach(function(note){
        const noteEle = document.createElement('p')
        noteEle.textContent = note.title
        document.querySelector('#notes').appendChild(noteEle)
    })
}
renderNotes(note, filters)

// step 2- getting the text from the user input

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.selectedtext = e.target.value
    renderNotes(note, filters)
})

document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})