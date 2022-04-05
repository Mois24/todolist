let count = '1';
let element = document.querySelector('.but');
element.addEventListener('click', createDiaryEntry);

function createDiaryEntry() {
    let block = document.querySelector('.main');
    let text = document.querySelector('.cell')
    let newElement = document.createElement('div');
    newElement.classList.add('text');
    newElement.innerHTML = `${count}. ${text.value}`;
    block.append(newElement);
    text.value = '';
    count++;
}