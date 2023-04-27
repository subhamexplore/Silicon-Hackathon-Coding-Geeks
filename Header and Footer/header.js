

var btn = document.getElementById('burger');
var logo = document.getElementById('plogo');
var navc = document.getElementById('navcon')
navc.style.fontWeight = 'bold'
navc.style.color = 'rgb(43, 2, 48)'
let content = document.getElementById('navbarSupportedContent');
let c = document.getElementById('con')
c.style.position = 'relative'
c.style.left = '1.4rem'
let x = content.innerHTML;
let b = false;

const change = () => {
    if (b == false) {
        b = true;
    }
    else {
        b = false;
    }
    if (b) {
        content.innerHTML = "";
        logo.innerHTML = x;
        logo.style.marginRight = '1rem';
        btn.style.marginTop = '-10rem'
    }
    else {
        logo.innerHTML = "";
        content.innerHTML = x;
        btn.style.marginTop = '0rem'
    }
}
btn.addEventListener('click', change);