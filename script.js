const numPad = document.querySelector('.numPad');
const numButton = document.querySelectorAll('.numButton');
const clearButton = document.querySelector('.clear');
const backButton = document.querySelector('.back');
const screenCurrent = document.querySelector('.screenCurrent');

numButton.forEach((element) => {
    element.addEventListener('click', () => {
        const currentNum = document.querySelector('.screenCurrent').textContent + element.textContent;
        if (document.querySelector('.screenCurrent').textContent.length < 9) {
            document.querySelector('.screenCurrent').textContent = currentNum;
        }
    })
});

clearButton.addEventListener('click', () => {
    screenCurrent.textContent = '';
});

backButton.addEventListener('click', () => {
    screenCurrent.textContent = screenCurrent.textContent.slice(0, screenCurrent.textContent.length - 1);
});

function operate(prevNum, currentNum, operator) {
    switch (true) {
        case operator == '+':
            console.log(prevNum + currentNum);
            break;
        case operator == '-':
            console.log(prevNum - currentNum);
            break;
        case operator == '*':
            console.log(prevNum * currentNum);
            break;
        case operator == '/':
            console.log(prevNum / currentNum);
            break;
    }
}
