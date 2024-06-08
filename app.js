const btnAdd = document.querySelector('.tasks__add');
const todosMsg = document.querySelector('.todos__msg');
const todo = document.querySelector('.todos');
const tasksInput = document.querySelector('.tasks__input');
let completado = 0;
let totalTask = 0;

btnAdd.addEventListener('click', function (e) {
  e.preventDefault();
  const tasksInputValor = tasksInput.value.trim();
  if (tasksInputValor === '') return;
  const todosTask = document.createElement('div');
  todosTask.classList.add('todos__task');
  const task = document.createElement('li');
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn__delete');
  btnDelete.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" /></svg>`;

  todosTask.appendChild(btnDelete);
  task.classList.add('task');
  todo.appendChild(todosTask);
  task.textContent = tasksInputValor;

  totalTask++;
  tasksInput.value = '';
  todosTask.appendChild(task);

  modificarMsj(todosMsg);

  todosTask.addEventListener('click', function (e) {
    if (!todosTask.classList.contains('complete')) {
      todosTask.classList.add('complete');
      completado++;
    } else {
      todosTask.classList.remove('complete');
      completado--;
    }

    modificarMsj(todosMsg);
  });

  btnDelete.addEventListener('click', function (e) {
    e.stopPropagation();

    if (!task.classList.contains('complete')) {
      todosTask.remove();
      totalTask--;
    }
    todosTask.remove();

    modificarMsj(todosMsg);
  });
});

const modificarMsj = function (item) {
  item.textContent = `Hay ${totalTask - completado} tareas por completar`;
  item.style.textAlign = 'center';
  item.style.padding = '1rem 0';
  item.style.margin = 0;
  item.style.borderBottom = '1px solid #d3d3d3';
};
