const text = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', selfMessage);

function getMessege() {
    const result = text.value;
    return result;
}

function createParagraph() {
    const element = document.createElement('p');
    element.innerText = getMessege();
    return element;
}

function selfMessage() {
    const main = document.querySelector('.chat-container');
    const art = document.createElement('article');
    const sectionImage = document.createElement('section');
    const sectionBubble = document.createElement('section');
    art.classList.add('message', 'self');
    sectionImage.classList.add('image');
    sectionBubble.classList.add('chat-bubble');
    art.appendChild(sectionImage);
    art.appendChild(sectionBubble);
    main.appendChild(art);
    const paragraph = createParagraph();
    sectionBubble.appendChild(paragraph);
    paragraph = '';
}





// lintjs