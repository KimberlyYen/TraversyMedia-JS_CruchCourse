const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

console.log(myForm)

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value)

    if(nameInput.value ===''  || emailInput === "") {
        // alert('Please Enter fields')
        msg.classList.add('error')
        msg.innerHTML = "Please Enter fields"

        setTimeout(() => msg.remove(), 3000)
    } else {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        //clean file
        nameInput.value = ''
        emailInput.value = ''
    }
}