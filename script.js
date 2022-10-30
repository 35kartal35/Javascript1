let AddToDoButton = document.getElementById('AddToDo');
let todoContainer = document.getElementById('todoContainer');
let inputText = document.getElementById('inputText');
let ClearToDo = document.getElementById('ClearToDo');

AddToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener ('click', function(){
        paragraph.style.textDecoration ='line-through';
    });

    paragraph.addEventListener ('dblclick', function(){
        todoContainer.removeChild(paragraph);
    });
    
    ClearToDo.addEventListener('click', function(){
        paragraph.style.display= 'none';
    });

})


