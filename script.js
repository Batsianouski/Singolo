const MENU = documet.getElementById('menu1')



MENU.addEventListener('click' (event) => {
    MENU.querySelectorALL('li').forEach(el => el.classList.remove('active'))
    even.target.classList.add('active');
})