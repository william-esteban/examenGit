import {URLCompany} from "../api/urls.js"

const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

// const URLCompany = "http://localhost:3000/companies"


formLogin.addEventListener("submit", (event)=>{
    event.preventDefault()

    Login()

})

async function Login (){
    const response = await fetch(`${URLCompany}?email=${email.value}`)
    
    const data = await response.json()

    if (!data[0] ) {
        console.log("email incorrecto");
        return
    }
    
    if (data[0].password !== password.value) {
        console.log("contraseña incorrecta");
        return
    }
    localStorage.setItem("company", JSON.stringify(data[0]))
    window.location.href = "administrator.html"
}





