const textAreaElement = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', createMessage);

const allMessage = [
    'Labas',
    'Labas, kaip sekas',
    'Viskas OK'
]
allMessage.forEach {

};

function getMessage() {
    textAreaElement.value = allMessage[0];
    const result = textAreaElement.value;
    textAreaElement.value = "";
    return result;
}

function createParagraph() {
    const element = document.createElement('p');
    element.innerText = getMessage();
    return element;
}

function createMessage(user) {
    const main = document.querySelector('.chat-container');
    const art = document.createElement('article');
    const sectionImage = document.createElement('section');
    const sectionBubble = document.createElement('section');
    art.classList.add('message', user);
    sectionImage.classList.add('image');
    sectionBubble.classList.add('chat-bubble');
    art.appendChild(sectionImage);
    art.appendChild(sectionBubble);
    main.appendChild(art);
    const paragraph = createParagraph();
    sectionBubble.appendChild(paragraph);

}

createMessage('self');


// lintjs