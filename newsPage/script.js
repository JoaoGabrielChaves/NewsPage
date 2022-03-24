const btn = document.getElementById("btn");
const html = document.querySelector("html");
const logo = document.getElementById('logo');

const btnMobile = document.querySelector('.mobile-menu');


btn.addEventListener('click', () => {
    btn.classList.toggle('active');
   
    if(btn.classList == 'active'){//assim que o botão perder o status 'ativo', o html remove a classe dark-mode deixando a página da cor original.
        html.classList.add('dark-mode');
    }else{
        html.classList.remove('dark-mode');
    }
})


btnMobile.addEventListener('click', (e) => {
    e.preventDefault();
    let menuMobile = document.querySelector('.nav-ul');
    menuMobile.classList.toggle('showMenu');
    btnMobile.classList.toggle('changeButton');
})



