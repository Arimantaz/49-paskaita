const textAreaElement = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', createMessage);

const allMessage = [{
        class: 'self',
        message: 'Labas',
    },
    {
        class: 'contact',
        message: 'Labas, kaip sekas',
    },
    {
        class: 'self',
        message: 'viskas ok'
    }
];

allMessage.forEach(zinute);

function zinute(messageData) {
    console.log(messageData.class);
    createMessage(messageData.class, messageData.message);
}

function getMessage() {
    const result = textAreaElement.value;
    textAreaElement.value = "";
    return result;
}

// function createParagraph() {
//     const element = document.createElement('p');
//     element.innerText = getMessage();
//     return element;
// }

function createMessage(className, messageText) {
    const main = document.querySelector('.chat-container');
    const art = document.createElement('article');
    const sectionImage = document.createElement('section');
    const sectionBubble = document.createElement('section');
    art.classList.add('message', className);
    sectionImage.classList.add('image');
    sectionBubble.classList.add('chat-bubble');
    art.appendChild(sectionImage);
    art.appendChild(sectionBubble);
    main.appendChild(art);

    const paragraph = document.createElement('p');
    paragraph.innerText = messageText;

    sectionBubble.appendChild(paragraph);

}




// lintjs