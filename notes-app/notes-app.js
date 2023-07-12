// DOM -Document Object Model helps us to control elements in html document


//quering and removing single element
// const p = document.querySelector('p');
// p.remove();

// Quering all element and reading their text content

const ps = document.querySelectorAll('p');

ps.forEach(function (p){
    //read text content of each element
    p.textContent = '********';
    console.log(p.textContent);
})

