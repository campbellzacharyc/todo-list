import { start } from "repl";




const createTabs = () => {
    const content = document.querySelector('#content');

    const startProject = document.createElement('div');

    startProject.classList.add('project');

    startProject.textContent = 'Project';
    startProject.textContent = 'Delete';
    
    content.appendChild(startProject);

    startProject.addEventListener('click', () => {
        clearContent();
    })
}





function clearContent() {
    const content = document.querySelector('#content');
    const projectContent = document.querySelector('project');
    if (projectContent) {
        content.removeChild(projectContent);
    }
}

export default createTabs;