import {URLCompany} from "../api/urls.js";

const fromRegister = document.querySelector("#fromRegister");
const EmailAddress = document.querySelector("#emial");
const password = document.querySelector("#password");
const PasswordConfirmation = document.querySelector("#password-confirmation");
const NameCompany = document.querySelector("#company");
const img = document.querySelector("#img-company");




fromRegister.addEventListener("submit", (event)=>{
    event.defaultPrevented()

    resgistrar()

})


async function resgistrar(){

    const compam = await fetch(URLCompany)
    const data = await compam.json()
    const nit = new Date().toISOString().split("T")[1];
    const companyInfo = {
        Email: EmailAddress.value,
        password: password.value,
        nameCompay: NameCompany.value,
        img: img.value,
        nit: nit,
    };
    if(password.value !== PasswordConfirmation.value && password.length <6){
        console.log("No es la misma contraseña");

        return
    }
    if(Email.value === compam.EmailAddress){
        console.log("Email invalido");

        return
    }
    if(nit === compam.nit){
        console.log("nit ya registrado");

        return
    }
    const response = await fetch(URLCompany,{
        method: "post",
        headers:{
            "content-type":"application/json",
            body: JSON.stringify(companyInfo),
        }
       
    });
    const datas = await response.json();
    
    
}




