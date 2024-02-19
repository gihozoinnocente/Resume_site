let todos = [
    {
        id: 1,
        title: 'Go shopping',
        status: true
    },
    {
        id: 2,
        title: 'Go swimming',
        status: false
    },
    {
        id: 3,
        title: 'Sleep',
        status: false
    }
];

localStorage.setItem('todos', JSON.stringify(todos));



const renderTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let incompletedTodos = todos.filter((item) => {
        return item.status === false;
    })
    incompletedTodos.forEach((item) => {
        let incompleteTodos = document.querySelector('#incomplete-tasks');
        let todo = document.createElement("li");
        let todoInput = document.createElement("input");
        todoInput.setAttribute('type', 'checkbox');
        let todoLabel = document.createElement("label");
        todoLabel.textContent = item.title
        let todoEditInput = document.createElement("input")
        todoEditInput.setAttribute('type', 'text');
        let editButton =  document.createElement('button')
        editButton.setAttribute('class', 'edit')
        editButton.textContent = "Edit"
        editButton.setAttribute('value', item.id)
        editButton.setAttribute('onClick', "edit()")
        let deleteButton =  document.createElement('button')
        deleteButton.setAttribute('class', 'delete')
        deleteButton.textContent="Delete"
        todo.appendChild(todoInput);
        todo.appendChild(todoLabel);
        todo.appendChild(todoEditInput);
        todo.appendChild(editButton);
        todo.appendChild(deleteButton);

        incompleteTodos.appendChild(todo);
    })
}

const renderCompletedTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    let completedTodos = todos.filter((item) => {
        return item.status === true;
    })
    completedTodos.forEach((item) => {
        let completeTodos = document.querySelector('#completed-tasks');
        let todo = document.createElement("li");
        let todoInput = document.createElement("input");
        todoInput.setAttribute('type', 'checkbox');
        todoInput.setAttribute('checked', '')
        let todoLabel = document.createElement("label");
        todoLabel.textContent = item.title
        let todoEditInput = document.createElement("input")
        todoEditInput.setAttribute('type', 'text');
        let editButton =  document.createElement('button')
        editButton.setAttribute('class', 'edit')
        editButton.textContent = "Edit"
        editButton.setAttribute('value', item.id)
        editButton.setAttribute('onClick', "edit()")
        let deleteButton =  document.createElement('button')
        deleteButton.setAttribute('class', 'delete')
        deleteButton.textContent="Delete"

        todo.appendChild(todoInput);
        todo.appendChild(todoLabel);
        todo.appendChild(todoEditInput);
        todo.appendChild(editButton);
        todo.appendChild(deleteButton);

        completeTodos.appendChild(todo);
    })
}
const edit = () =>{
    const element = document.querySelector('.edit');
    const id = element.getAttribute('value')
    element.addEventListener('click', (e) => {
        location.assign(`/detail.html#${id}`)
    })
}
renderTodos()
renderCompletedTodos()
let existingTodos = JSON.parse(localStorage.getItem('todos'));
existingTodos.push("hello")
localStorage.setItem('todos', JSON.stringify(existingTodos) );



task = document.querySelector('#new-task');
task.addEventListener('change', (e) => {
    console.log(e.target.value)
})

