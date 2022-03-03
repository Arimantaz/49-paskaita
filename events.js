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

function selfMessage(){
    const main = document.querySelector('.chat-container');
    const art = document.createElement('article');
    const sectionImage = document.createElement('section');
    const sectionBubble = document.createElement('section');
    main.appendChild(art);
    art.classList.add('message', 'self');
    sectionImage.classList.add('image');
    sectionBubble.classList.add('chat-bubble');
    art.appendChild(sectionImage);
    art.appendChild(sectionBubble);

}

selfMessage()



// lintjs