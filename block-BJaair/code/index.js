let form=document.querySelector("form");
let root=document.querySelector("ul");
let container=document.querySelector(".container");
let box=document.querySelector(".box");




// let cardsData=[{title:"play cricket",category:"sports"}];
let cardsData=JSON.parse(localStorage.getItem("cards")) || [];

form.addEventListener("submit",(event)=>{
  event.preventDefault();

  let title=event.target.title.value;
  let category=event.target.category.value;
  // console.log(title,category);
  cardsData.push({title,category});
  localStorage.setItem("cards",JSON.stringify(cardsData));
  createUI(cardsData,root);
});

function handleEdit(event,info,index,label){
  let elm=event.target;
  let input=document.createElement("input");
    input.value=info;


    input.addEventListener("keyup",(event)=>{
      if(event.keyCode ===13){
        let updatedValue=event.target.value;
        // console.log("pressed enter")
        cardsData[index][label]=updatedValue;
  localStorage.setItem("cards",JSON.stringify(cardsData));

        createUI();
      }
    })

      input.addEventListener("blur",(event)=>{
      
        let updatedValue=event.target.value;
        // console.log("pressed enter")
        cardsData[index][label]=updatedValue;
  localStorage.setItem("cards",JSON.stringify(cardsData));

        createUI();
      
    })



  let parent=event.target.parentElement;
  parent.replaceChild(input,elm);
}



function createUI(data=cardsData,ul=root){
  root.innerHTML="";
let fragment= new DocumentFragment();

cardsData.forEach((cardInfo,index)=>{
  let li=document.createElement("li");
  let p=document.createElement("p");

      p.addEventListener("dblclick",(event)=>
      handleEdit(event,cardInfo.category,index,"category"))
      p.innerText=cardInfo.category;
  let h2=document.createElement("h2");
      h2.innerText=cardInfo.title;
      h2.addEventListener("dblclick",(event)=>
      handleEdit(event,cardInfo.title,index,"title"))

    li.append(p,h2);
    fragment.appendChild(li);
});
root.append(fragment);
};
createUI();