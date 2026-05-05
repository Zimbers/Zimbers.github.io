document.addEventListener('DOMContentLoaded', () => {
    // Теперь следим не только за карточками, но и за заголовками секций
    const items = document.querySelectorAll('.project-card, #projects h2, #about h2');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Ставим -50px, чтобы при появлении элемент плавно "уходил вниз" на свое место
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(-50px)';
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(-50px)';
        item.style.transition = 'all 0.8s ease-out'; // Чуть замедлил для большей плавности
        observer.observe(item);
    });
});
