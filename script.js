let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

document.getElementById('botonDescarga').addEventListener('click', function() {
    document.getElementById('descargar').click();
});

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php_mysql");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("csharp");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("persistencia");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


//Formulario de Contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_qufgus7'; //ID de EmailJS
    const templateID = 'template_p1pxxbc'; //Template ID de EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado con éxito.',
            });
            // Limpiar el formulario
            document.getElementById('contact-form').reset();
        }, function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.',
            });
        });
});

//Efecto typing inicio
 var typed = new Typed(".text",{
    strings:["Tecnólogo de desarrollo de software", "Tecnico en sistemas", "Desarrollador Frontend", "Desarrollador Backend", "Analista de software", ],
    typeSpeed:50,
    backSpeed:80,
    backDelay:100,
    loop:true
 })