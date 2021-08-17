const iconoAmburguesa = document.querySelector('.icono-amburguesa');
const mobileNav = document.querySelector('.navegacion-mobile');

document.addEventListener('DOMContentLoaded', ()=>{
    
    iconoAmburguesa.addEventListener('click', abrirMenu);

    scrollNavegacion();
});

function abrirMenu(){
    
    if(mobileNav.classList.contains('mostrar')){
        mobileNav.classList.remove('mostrar');
    
    }
    else{
        mobileNav.classList.add('mostrar');
        
    }
}
function scrollNavegacion(){

    const enlaces = document.querySelectorAll('.scrollNav a');

    enlaces.forEach( function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
}


navegacionFija();
function navegacionFija(){
    const barra = document.querySelector('.navegacion-barra');
    //registrar el observer
    const observer = new IntersectionObserver(function (entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }
        else{
            barra.classList.add('fijo');
        }
    });

    //elemento a observar
    observer.observe(document.querySelector('.contenedor-header'));

}