inputCheckbox.addEventListener('click', handleAddBtn);
const todoChecks = document.querySelectorAll('.todoCheckInput');
const todoListesi = document.querySelector('.todoList');

function handleAddBtn() {
  if ((inputText.value.trim() !== '' && inputCheckbox.checked)) {
    const todo = inputText.value;
    todoListesi.innerHTML += `<li class="todo-list-item"><input type="checkbox" name="todoItem"><span class="todo-check">${todo}</span><a href="#" class="deleteBtn"><img src="assets/img/close-icon.svg" alt=""></a></li>`;
    bindClickEvents();

  } else {
    alert('Boş todo ekleyemezsiniz!');
  }
  inputText.value = '';
  inputCheckbox.checked = false;
}

const inputunText = document.querySelector('.input-text');

inputunText.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

function todoComplete() {
  this.classList.toggle('todo-complete');
}

for (const todo of todoChecks) {
  todo.addEventListener('click', todoComplete);
}

function bindClickEvents() {
  const deleteBtns = document.querySelectorAll('.deleteBtn');

  for (const btn of deleteBtns) {
    btn.addEventListener('click', removeTodo)
  }
}

//DOM elementleri sayfaya eklendiğinde daha önceden yapılan eventlistener atamaları sıfırlanır

function removeTodo() {
  if (confirm('Silinsin mi?')) {
    this.parentElement.remove();
  }
}

bindClickEvents();

