
export const createTodoItem = (title, description, dueDate, priority, checkList) => {
    let todoList = [];
    todoList.push({ title, description, dueDate, priority, checkList});
    return { title, description, dueDate, priority, checkList }; 
}

