function changeActiveColor(color) {
    colors = {
        red: "var(--color-red)",
        blue: "var(--color-blue)",
        green: "var(--color-green)"
    }
    console.log(color);

    document.documentElement.style.setProperty("--color-active", colors[color]);
}

let focusStatus = false;

function focusProject(id) {
    if (focusStatus === true) {focusStatus = false; return;}
    const project = document.getElementById(id);
    project.dataset.focused = "true";
    focusStatus = true;
}

function deFocusProject(id) {
    const project = document.getElementById(id);
    project.dataset.focused = "leaving";
    setTimeout(() => {
        project.dataset.focused = "false"
    }, 300)
}

function deFocusAllProjects() {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (project.dataset.focused == "true") {
            deFocusProject(project.id);
        };
    })
}

const growingContent = document.getElementById("growing-content");
growingContent.addEventListener("click", (e) => {
    if (e.target === growingContent) {deFocusAllProjects(); focusStatus = false;};
})


const skillsContainer = document.getElementById("skillsContainer");
const skills = document.querySelectorAll(".skill");
const skillsCount = skills.length;
const skillsContainerRect = skillsContainer.getBoundingClientRect();
let radius = Math.min(skillsContainerRect.width/2, skillsContainerRect.height/2);
let center = (skillsContainerRect.width/2, skillsContainerRect.height/2);
const PI = 3.14159;

let circleRotation = 0;
let deltaRadians = PI * 2 /skills.length;
let iterationRadians = 0;


skills.forEach(skillNode => {
    let nodeX = interationRadians;
})


