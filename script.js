const button = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.querySelector('#unord')
const clearAll = document.getElementById('clear')

function inputLength() {
    return input.value.length
}
function createLiElement() {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.className += 'done';
    ul.appendChild(li);
    input.value = '';
    
  let delBtn = document.createElement('button');
    delBtn.textContent = 'DELETE';
  li.addEventListener('click', function(e) {
    li.classList.toggle('done'); 
    li.style.userSelect = 'none';

    if (li.classList == '') {
    li.style.textDecoration = 'line-through'
    } else if (li.classList == 'done') {
        li.style.textDecoration = 'none';
    }
    })
//    li.addEventListener('', () => {
//    li.setAttribute("contenteditable", "true");
// })
    let clearToDos = document.createElement('button');
    clearToDos.style.fontSize = '8px';
    clearToDos.style.padding = '0';
    //clearToDos.style.background = 'rgba(150, 190, 0, 0)'
    clearToDos.style.borderRadius = '4px'
    let clearTodosText = document.createTextNode('❌');
    clearToDos.appendChild(clearTodosText);
    let deleteOne = li.appendChild(clearToDos);
    deleteOne.style.textDecoration = 'none';
   // document.body.insertBefore(deleteOne, li.nextSibling);
    deleteOne.addEventListener('click', () => {
        li.remove()
        deleteOne.remove();
    })

    li.style.backgroundColor = 'rgba(216, 191, 216, 0.479)';

    clearAll.addEventListener('click', () => {
        li.remove();
    })
}

function addLiAfterClick() {
    if (input.value.length > 0) {
        createLiElement();
    }
}
function addLiAfterKeypress(event) {
    if (inputLength() > 0 && event.which == 13) {
        createLiElement();
 }
}
function addLiAfterClick() {
    if (input.value.length > 0) {   
    createLiElement();
}
}
button.addEventListener('click', addLiAfterClick);
input.addEventListener('keypress', addLiAfterKeypress);