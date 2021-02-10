function inscriptionForm(event){ //ou e pour event. A harmoniser avec e.preventDefault() 
    event.preventDefault(); // utiliser e si il est en argument de la fonction. Sinon, event.
    // console.log(event.target.prenom);

    let regex = /([a-z0-9](\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}/;
    // let regex = new RegExp('([a-z0-9](x\.?|\_|\-))*@([a-z0-9]{2,})(\.[a-z]{2,}){1,}');

    if(regex.test(email) === false){
        event.target.email.classList.add('error');
        event.target.email.classList.remove('error');
    }
}


document.getElementById('form_inscription').addEventListener('submit', inscriptionForm);