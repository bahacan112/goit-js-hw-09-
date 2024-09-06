import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css'; // BasicLightbox için CSS dosyasını dahil edin




const email=document.querySelector('input')
const message=document.querySelector('textarea')
const form=document.querySelector('form')
const button=document.querySelector('button')

const local=JSON.parse(localStorage.getItem('feedback-form-state'))
if (local){
email.value=local.email
message.value=local.message
}
form.addEventListener('input',()=>{
    const formInputs={
        'email':email.value,
        'message':message.value
    }

    localStorage.setItem('feedback-form-state',JSON.stringify(formInputs))

}
)
form.addEventListener('submit',(event)=>
{
    event.preventDefault();

    if (email.value && message.value){ 
    

        console.log(localStorage.getItem('feedback-form-state'))

        localStorage.clear();
        email.value=''
        message.value=''
    }
    else{
        const lightBoxMessage=basicLightbox.create('<h2 style="color: white; text-align: center;">Lütfen Tüm Alanları Doldurunuz</h2>')
        lightBoxMessage.show();
}
})



