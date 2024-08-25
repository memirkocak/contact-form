const radio1 = document.querySelector('#radio1')
const radio2 = document.querySelector('#radio2')
const inputRadio1 = document.querySelector('#inputRadio1')
const inputRadio2 = document.querySelector('#inputRadio2')

const InputFirstName = document.querySelector('#firstname')
const InputLastName = document.querySelector('#lastname')
const InputEmail = document.querySelector('#email')
const InputRadioAll = document.querySelector('#InputRadioAll')
const MessageArea = document.querySelector('#messagearea')
const InputCheckbox = document.querySelector('#inputcheckbox')
const submit = document.querySelector('.submit')
const errorDiv = document.querySelector('#error1')
const errorInput = document.querySelectorAll('.errorInput')

    radio1.addEventListener('click',()=>{
            radio1.style.backgroundColor = '#E0F1E8'
            radio2.style.backgroundColor = 'white'
            inputRadio1.checked = true
    })

    radio2.addEventListener('click',()=>{
        radio2.style.backgroundColor = '#E0F1E8'
        radio1.style.backgroundColor = 'white'
        inputRadio2.checked = true
})

const time = ()=>{
        setTimeout(() => {
                error() 
        }, 50);
}

const firstNameP = document.querySelector('#firstName')
const lastNameP = document.querySelector('#lastName')
const emailP = document.querySelector('#emailP')
const messageP = document.querySelector('#messageP')
const checkboxP = document.querySelector('#checkboxP')
const radioP = document.querySelectorAll('#radioP')

function error (){
        if(InputFirstName.value !== ''){
                firstNameP.className = 'none'
        }else{
                firstNameP.className = 'errorP'
        }
        if(InputLastName.value !== ''){
                lastNameP.className = 'none'
        }else{
                lastNameP.className = 'errorP'
        }
        if(InputEmail.value !== ''){
                emailP.className = 'none'
        }else{
                emailP.className = 'errorP'
        }
        if(MessageArea.value !== ''){
                messageP.className = 'none'
        }else{
                messageP.className = 'errorP'
        }
        if(InputCheckbox.checked === true){
                checkboxP.className = 'none'  
        }else{
                checkboxP.className = 'errorP'
        }
        if(inputRadio1.checked){
                radioP.className = 'none'
                
        }else{
                radioP.className = 'errorP'
        }
        
        
        time()
}
error()



submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const alertBox = document.getElementById('alert')
        alertBox.classList.add('show')
        setTimeout(() => {
                alertBox.classList.remove('show')
        }, 3000);
})


