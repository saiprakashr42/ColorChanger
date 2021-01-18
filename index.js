let button = document.querySelector('button');
let body = document.querySelector('body');
let colors = ['red', 'yellow', 'lightpink', 'lightblue', 'skyblue', 'green'];

button.addEventListener('click', () => {
    colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
})