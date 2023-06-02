
module.exports.signUpErrors = (err) => {
    let errors = {name :'' , email : '',password : ''}
    if (err.code = 11000 && Object.keys(err.keyValue)[0].includes("name"))
        errors.name = "cet name est déja enregistré"  
    if (err.code = 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email = "cet email est déja enregistré"  
    if ('name' in err.errors)
        errors.name = "name incorrecte ou déja pris"
    if ('email' in err.errors)
        errors.email = "email incorrecte"   
    if ('password' in err.errors)
        errors.password = "password ne matche pas les critères" 
         
    return errors 
}

module.exports.signInErrors = (err) => {
    let errors = {email :'' , password : ''}
    if (err.message.includes("email")) 
        errors.email = "email inconnue"
    if (err.message.includes("password")) 
        errors.password = "password inconnue"  
    return errors       
}

module.exports.uploadError = (err) => {
    let errors = {format:'',maxsize:""}
    if (err.message.includes('invalid file'))
        errors.format="Format incompatible"
    if (err.message.includes('max size'))
        errors.maxsize = "le fichier dépasse 50ko";
    return errors         
}