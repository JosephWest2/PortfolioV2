function changeActiveColor(color) {
    colors = {
        red: "var(--color-red)",
        blue: "var(--color-blue)",
        green: "var(--color-green)"
    }
    console.log(color);

    document.documentElement.style.setProperty("--color-active", colors[color]);
}