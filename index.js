var btn = document.querySelector('.button');
var textColor = document.querySelector('.color')

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',];


function rand(min, max) {
    return Math.floor(Math.random() * (max + min) - min);
}

function gen() {
    const color = '#' + hex[rand(0,16)] + hex[rand(0,16)] + hex[rand(0,16)] + hex[rand(0,16)] + hex[rand(0,16)] + hex[rand(0,16)];
    return color;
}

function color() {
    let color = gen();
    document.body.style.backgroundColor = color;
    textColor.textContent = color;
    
}


btn.addEventListener('click', function() {color()})
