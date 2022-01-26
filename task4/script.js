const userTextField = document.querySelector('#userTextField');

userTextField.addEventListener('click', function()
{
    this.textContent= 'Вы уверены, что хотите изменить название ссылки?';
        
    userTextField.addEventListener('click',
        (Event)=> {
        const userText = prompt('Введите текст');
        userTextField.textContent = userText;
        
})
})

