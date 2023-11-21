

export function initialLoad() {
    // createTabs();

    const content = document.querySelector("#content");
    const heading = document.createElement('h1');
    const project = document.createElement('button');
    heading.textContent = "todo list";
    content.appendChild(heading);
    project.textContent = "New Project";
    content.appendChild(project);

}

