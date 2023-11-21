
export function clearContent() {
    const content = document.querySelector('#content');
    const projectContent = document.querySelector('project');
    if (projectContent) {
        content.removeChild(projectContent);
    }
}