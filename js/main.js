// var btns = document.getElementsByClassName('menu_item');
// var par = document.getElementsByClassName('nav-link');
// btns[0].onclick = function() {
//   par[0].classList.add("active");
// }
// btns[1].onclick = function() {
//   par[0].classList.remove("active");
// }

let link = document.querySelector('.link');

link.addEventListener('click', () => {
    link.classList.add('active')
})