const text = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', createEl);

function pokalbis() {
    const result = text.value;
    return result;
}

function createEl() {
    const element = document.createElement('p');
    element.innerText = pokalbis();
    console.log(element);  
}