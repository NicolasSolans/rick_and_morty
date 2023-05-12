const validation = (userData)=>{
    const errors = {};

    if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)){
        errors.email = 'El email no es correcto'
    }
    if(!userData.email){
        errors.email = 'Debes completar el email'
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe superar los 35 caracteres'
    }
    if(!/^[a-zA-Z0-9]{6,10}$/.test(userData.password)){
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'El password tiene que tener al menos un número'
    }
    
    return errors;
}

export default validation;