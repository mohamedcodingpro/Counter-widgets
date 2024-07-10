document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const maxCount = 10;

    const counterElem = document.querySelector('.counter');
    const incrementBtn = document.querySelector('.increment');
    const decrementBtn = document.querySelector('.decrement');
    const resetBtn = document.querySelector('.reset');

    const updateCounter = () => {
        counterElem.innerText = counter;
    };

    incrementBtn.addEventListener('click', () => {
        if (counter < maxCount) {
            counter++;
            updateCounter();
        }
    });

    decrementBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateCounter();
        }
    });

    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateCounter();
    });

    updateCounter();
});
