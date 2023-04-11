let mybook = {
    title: '1984',
    author: 'George orwell',
    pageCount: 326
}
let otherbook = {
    title: 'Purpose Driven Life',
    author: 'Ric Warren',
    pageCount: 326
}

let getSummery = function (book){
    console.log(`${book.title} by ${book.author}`)
}

getSummery(otherbook)
getSummery(mybook)

let GetSummery = function (book){
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummery: `${book.title} by ${book.pageCount} pages long`
    }
}

let booksummery = GetSummery(mybook)
console.log(booksummery.pageCountSummery)

// challenge area