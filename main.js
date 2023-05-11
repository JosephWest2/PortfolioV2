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