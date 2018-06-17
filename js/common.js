const navigation = document.querySelector('#navigation');
const button = document.querySelector('#navbar-toggle');

button.addEventListener('click', openMenu);

function openMenu() {
    const active = document.querySelector('.active');

    if (active) {
        navigation.classList.remove('active');
    } else navigation.classList.add('active');
}

$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 400);
        e.preventDefault();
        return false;
    });
});