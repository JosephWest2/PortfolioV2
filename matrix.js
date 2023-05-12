let currentMatrixTranslateX = 0;
let currentMatrixtranslateY = 0;
let currentMatrixScaleX = 0;
let currentMatrixScaleY = 0;

const matrixH1Id = "ContactHeader"
const matrixContentId = "matrix-content"

function beginMatrix() {
    const H1Element = document.getElementById(matrixH1Id);
    const iRect = H1Element.getBoundingClientRect();
    let deltaX = iRect.left - (window.innerWidth / 2) + (iRect.width/2);
    let deltaY = iRect.top - (window.innerHeight / 8);
    H1Element.style.transform = `translateX(${-deltaX}px) translateY(${-deltaY}px) scaleX(5) scaleY(0.2)`;
    H1Element.style.color = "var(--color-red)";
    H1Element.style.backgroundColor = "var(--color-red)";
    setTimeout(() => {
        const newRect = document.getElementById(matrixH1Id).getBoundingClientRect();
        const matrixContent = document.getElementById(matrixContentId);
        matrixContent.style.left = `${newRect.left}px`;
        matrixContent.style.top = `${newRect.top}px`;
        matrixContent.style.width = `${newRect.width}px`;
        matrixContent.style.height = `${newRect.height}px`;
    }, 400)
    setTimeout(() => {
        const matrixContent = document.getElementById(matrixContentId);
        matrixContent.style.height = "75vh";
    },700)
}

function peekMatrix() {
    const H1Element = document.getElementById(matrixH1Id);
    const iRect = H1Element.getBoundingClientRect();
    let deltaX = iRect.left - (window.innerWidth / 2) + (iRect.width/2);
    let deltaY = iRect.top - (window.innerHeight / 10);
    H1Element.style.transform = `translateX(${-deltaX/15}px) translateY(${-deltaY/15}px) scaleX(1.2) scaleY(0.95)`;
}

function hideMatrix() {
    const H1Element = document.getElementById(matrixH1Id);
    H1Element.style.transform = "";
}