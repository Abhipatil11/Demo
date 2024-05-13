let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance:'60px',
    duration:2500,
    dealy:400,
    reset:true
})
 sr.reveal('text',{dealy:200, origin:  'top'})
 sr.reveal('.form-container form',{dealy:800, origin:  'left'})
 sr.reveal('.heading',{dealy:800, origin:  'top'})
 sr.reveal('.ride-container .box',{dealy:800, origin:  'top'})
 sr.reveal('.services-container .box',{dealy:800, origin:  'top'})
 sr.reveal('.about-container .box',{dealy:800, origin:  'top'})
 sr.reveal('.review-container .box',{dealy:800, origin:  'top'})
 sr.reveal('.contact-container .box',{dealy:800, origin:  'top'})


 const parentContainer =  document.querySelector('.read-more-container');
 parentContainer.addEventListener('click', event=>{
 const current = event.target;
 const isReadMoreBtn = current.className.includes('read-more-btn');
 if(!isReadMoreBtn) return;
 const currentText = event.target.parentNode.querySelector('.read-more-text');
 currentText.classList.toggle('read-more-text--show');
 current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})
