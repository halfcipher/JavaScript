const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(pink).backgroundColor);

const getBColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// console.log(getBColor(pink));
// console.log(getBColor(orange));
// console.log(getBColor(cyan));
// console.log(getBColor(violet));
// console.log(getBColor(red));

// var color = getBColor(orange);

// orange.addEventListener("mouseenter", () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
    
};

magicColorChanger(red, getBColor(red));
magicColorChanger(cyan, getBColor(cyan));
magicColorChanger(violet, getBColor(violet));
magicColorChanger(pink, getBColor(pink));
magicColorChanger(orange, getBColor(orange));