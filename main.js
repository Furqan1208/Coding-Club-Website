//change navar styles on scroll

addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})

//navbar script
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display ="none";
})

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click' , closeNav)






//header
const heading = document.querySelector('.header__left h1');
const text = heading.textContent;
heading.textContent = '';

let i = 0;
function type() {
  if (i < text.length) {
    heading.textContent += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();






//faq answer section

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click' , () => {
        faq.classList.toggle('open');

        //icon setting
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'bx bx-plus'){
            icon.className = "bx bx-minus"
        }else{
            icon.className = "bx bx-plus";
        }
    })
})

ScrollReveal({ 
    reset: true ,
    distance :'80px',
    duration: 2000,
    delay:300
});


ScrollReveal().reveal('.events h2, .faqs h2 ,.testimonials__container h2', { origin: 'top' });
ScrollReveal().reveal('', { origin: 'right' });
ScrollReveal().reveal('.header__left, .categories__left', { origin: 'left' });
ScrollReveal().reveal(' .categories__right, .events__container, .contact form', { origin: 'bottom' });








