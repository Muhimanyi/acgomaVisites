const animatetop = document.querySelectorAll('.slidetop');
const animateleft = document.querySelectorAll('.slideleft');
const animateright = document.querySelectorAll('.slideright')
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.className.includes('slidetop')) {
                entry.target.classList.add('animate-fadeIn');
            } if (entry.target.className.includes('slideleft')) {
                entry.target.classList.add('animate-fadeleft');
            } if (entry.target.className.includes('slideright')) {
                entry.target.classList.add('animate-fadeslideright');
            }
            entry.target.classList.remove('opacity-0');

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});
animatetop.forEach(top => observer.observe(top));
animateleft.forEach(left => observer.observe(left));
animateright.forEach(right => observer.observe(right));
