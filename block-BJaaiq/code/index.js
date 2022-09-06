let root=document.querySelector("ul");



let max=50;
let index=0;

function addQoutes(){
  for (let i=0; i<max; i++){
    let li=document.createElement("li");
    let blockqoute=document.createElement("blockqoute");
       blockqoute.innerText=quotes[index].quoteText;
    let cite=document.createElement("cite");
        cite.innerText=quotes[index].quoteAuthor;

    li.append(blockqoute,cite);
    root.append(li);
    index++;
  }
}

addQoutes();

document.addEventListener("scroll",()=>{
  let scrollTop=document.documentElement.scrollTop;
  let scrollHeight=document.documentElement.scrollHeight;
  let clientHeight=document.documentElement.clientHeight;
  if(scrollTop+clientHeight>=scrollHeight && index<quotes.length){
    addQoutes();
  }
});

window.addEventListener("DOMContentLoaded",()=>{
  alert(`The content of the DOM is loaded`)
    addQoutes();
})