function slideMenu() {
    $('#blockMenu').toggleClass('md:animate-fadeleft md:animate-faderight').show();
}
window.addEventListener('scroll', (Event) => {
    if (scrollY >= 20) {
        $("#header").removeClass('bg-transparent').addClass('bg-neutral-200 dark:bg-neutral-900')
    }
    else {
        $("#header").addClass('bg-transparent').removeClass('bg-neutral-200 dark:bg-neutral-900')
    }
});

