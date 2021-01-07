const button = document.getElementById('buttonId');
const finalResult = document.getElementById('result');


button.addEventListener('click', () => {
    const value = document.getElementById('value').value;
    let result = (value - 32) * 5.0 / 9.0;
    finalResult.innerHTML = result;
});