const form = document.querySelector('form')
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const photoURL = document.getElementById('photo')

form.addEventListener('submit', (event)=>{
    

    event.preventDefault()
    if(password.value === confirmPassword.value){

    console.log('Submit!!')
    console.log('nombre:', nombre.value)
    console.log('email:', email.value)
    console.log('password:', password.value)
    console.log('confirmPassword:', confirmPassword.value )
    console.log('photoURL:', photoURL.value)
    
        fetch('http://localhost:3000/api/user/register',{
        
            method:'POST',
            body: JSON.stringify({
                name: nombre.value,
                email: email.value, 
                password: password.value,
                photo: photoURL.value,
                IsAdmin:false
            
            }),
            headers:{
                "Content-Type": "application/json",
            }
                
            }).then((res)=>{
                console.log('res:', res)
                window.location.href = 'http://localhost:3000/login'
        }).catch((error)=>{
            console.error(error)
        })

    }else{
        document.getElementById('password-no-mach').style.display = 'block'
    }



})