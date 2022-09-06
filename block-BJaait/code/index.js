let btn=document.querySelector(".add");
let remove=document.querySelector(".draggable");



function dragStart(e){
  this.style.opacity="0.4";
  dragSrcEl=this;
  e.dataTransfer.effectAllowed="move";
  e.dataTransfer.setData("text/html",this.innerHTML)
};

function dragEnter(e){
  this.classList.add("over")
};

function dragLeave(e){
  e.stopPropagation();
  this.classList.remove("over")
}


function dragOver(e){
  // console.log('calling drag over')
  e.preventDefault();
  e.dataTransfer.dropEffect="move";
  return false;
}

function dragDrop(e){
  // console.log("Droping the element")
  if(dragSrcEl!=this){
    dragSrcEl.innerHTML = e.dataTransfer.getData("text/html");
    // console.log("dropped the elment", dragSrcEl);
    // console.log(e.target);
    e.target.parentNode.insertBefore(dragSrcEl, e.target.nextSibling);
  }
  return false;
}

function dragEnd(e){
  // console.log('drag has ended')
  var listItem=document.querySelectorAll(".draggable");
  [].forEach.call(listItem,function(item){
    item.classList.remove("over");
  });
  this.style.opacity="1"
}


function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}


var listItem = document.querySelectorAll('.draggable');
[].forEach.call(listItem, function(item) {
  addEventsDragAndDrop(item);
});

function addNewItem() {
  var newItem = document.querySelector('.input').value;
  if (newItem != '') {
    document.querySelector('.input').value = '';
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}

btn.addEventListener('click', addNewItem);

