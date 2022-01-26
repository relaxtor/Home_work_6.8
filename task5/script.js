const input = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');



input.addEventListener('input', updateValue);
    function updateValue(event) {
        duplicateField.textContent = event.target.value;
}


document.querySelector('button').addEventListener('click',
    function (event) {
        event.preventDefault();
        input.value='';
        console.log(duplicateField.textContent);
        duplicateField.innerHTML = '';
})
