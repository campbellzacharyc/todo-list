let todoList = [];

const createTodoItem = (title, description, dueDate, priority, checkList) => {
    todoList.push({ title, description, dueDate, priority, checkList});
    return { title, description, dueDate, priority, checkList }; 
}

export default createTodoItem;