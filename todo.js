let addtodobtn=document.getElementById("addtodo");
let adding =document.getElementById('addtodo1')
let todocontainer=document.getElementById("addTodos");
let inputfield=document.getElementById("inputfield");
addtodobtn.addEventListener('click',function(){
    var paragraph =document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText=inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value=" ";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    adding.addEventListener('click',function(){
        //paragraph.addEventListener('dblclick',function(){
      todocontainer.removeChild(paragraph)
    })
    paragraph.addEventListener('dblclick',function(){
     todocontainer.removeChild(paragraph)
     })

})