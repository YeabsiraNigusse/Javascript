const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5']
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

const findeNote = function (note, noteTitle){
     const index = note.findIndex(function (not, index){
          return not.title.toLowerCase() == noteTitle.toLowerCase()
     })
     return note[index]
}

//console.log(notes)

// console.log(notes.length)

// console.log(notes[1])

// notes.push('attending meeting')

// console.log('removed Note: '+ notes.shift())//pop() operator for front index
// notes.unshift('it should be Note 1 here')// push() operator for front index

//notes.splice(0, 1)// inclusive deletion from starting point to the end of an arrray
//console.log(notes)
//notes.splice(0,0, 'Note 1 is back')//so i can remove whate ever i want and enter whatevet i need

//console.log(notes)
//notes.splice(0, 2, 'whare are you Note')
//remove the first two and enter at first position
//console.log(notes)

//remove note 3 and 4 and insert at note 1
notes.splice(2, 2, 'who is removed')

//console.log(notes)

// notes.splice() mainly remove item from specific index and upto specified index sequencially
// can also insert value to the start of removed value


// notes.forEach(function (item, index){
//      console.log(index)
//      console.log(item)
// })
//console.log(note)
sortNotes = function(notes){
     return notes.sort(function (a, b){
          if (a.title.toLowerCase() < b.title.toLowerCase()){
               return -1
          }else if(a.title.toLowerCase() > b.title.toLowerCase){
               return 1
          }else{
               return 0
          }
     })
}

console.log(sortNotes(note))

console.log(false > true)