export const createProject = () => {
    // add todoList to project, multiple todos (on todoList) on each project. 
    let project = document.querySelector(".project");
    project.innerHTML = '';
    for (let i = 0; i < myProject.length; i++) {
        let projectCard = myProject[i];
        let projectElement = document.createElement("div");
        projectElement.setAttribute("class", "project-card");
        projectElement.innerHTML = `
        <div class="card-header">
            <h3 class="title">${title}</h3>
        </div>
        <div class="card-body">
            <div class="dueDate">${dueDate}</div>
            <img class="magnify"/>
            <img class="trash"/>
        </div>
        <div class="footer">
            <img class="addTodo"/>
            <img class="delete"/> 
        `
    }
}
