const text = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', pokalbis);

function pokalbis() {
    const result = text.value;
    console.log(result);
}