let quote = document.getElementById('quote');
let Author = document.getElementById('authorName');
let button=document.getElementById('quote-btn');


button.addEventListener('click',()=>{

    let quoteurl ="https://api.quotable.io/random";
    fetch(quoteurl)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data.content);
        console.log(data.author);
        quote.innerText=data.content;
        Author.innerText="- "+ data.author;

    });

});

document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.key==' '){
        let quoteurl ="https://api.quotable.io/random";
    fetch(quoteurl)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data.content);
        console.log(data.author);
        quote.innerText=data.content;
        Author.innerText="- "+ data.author;

    });
    }

});


