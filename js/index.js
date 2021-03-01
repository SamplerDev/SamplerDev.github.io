const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

/**Buscador */

const formulario = document.querySelector('#formulario');
         const boton= document.querySelector('#boton');
         const contenedor1 = document.getElementsByClassName('contenedor1');
         const resultado = document.querySelector('#resultado');
        
         const tiendas= [
          {nombre:'Turismo',

          nombre2:'Sol y Luna',link: `<a href="SolyLuna.html">Turismo Sol y Luna</a>` },

          


         ]
         const filtrar = () =>{

          resultado.innerHTML ='';
           const texto = formulario.value.toLowerCase();
          

           
           for(let tienda of tiendas){
             let nombre = tienda.nombre.toLowerCase();
             let nombre2 = tienda.nombre2.toLocaleLowerCase();
             if ( nombre == texto || nombre2 == texto){
                   resultado.innerHTML +=`


                   <li id="resultados" > ${tienda.link} </li>
                   
                   `

             }

             

             
           }
           

          

           
           
             
          
          
          
          }
           
           boton.addEventListener('click',filtrar); 


             
            

 