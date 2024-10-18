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

//Magic Cursor
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=> {
    canvas.widht = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particlesArray = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 8 + 2;
        this.speedX = Math.random() * 0.5 - 1.0;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsla(${Math.random() * 30 + 110}, 100%, 50%, 0.8)`;
        this.opacity = 1;
        this.fadeRate = Math.random() * 0.01 + 0.009;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.94;
        this.opacity -= this.fadeRate;
    }


    draw() {
        ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    

}

canvas.addEventListener('mousemove', (event) =>{
    for (let i = 0; i < 44; i++) {
        particlesArray.push(new Particle(event.x, event.y));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.forEach((particle, index) =>{
        particle.update();
        particle.draw();

        if ( particle.size < 0.2 || particle.opacity <= 0) {
            particlesArray.splice(index, 1);
        }
    });
    requestAnimationFrame(animate);
}

animate();
