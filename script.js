const showFactBtn = document.getElementById('showFactBtn');
const randomFact = document.getElementById('randomFact');

const funFacts = [
    "Сдал ЕГЭ по информатике на 100 баллов!",
    "Работаю продуктовым аналитиком в Т-банке параллельно с учебой",
    "Золотой медалист и олимпиадник 2-го уровня",
    "Изучаю программирование с школьных лет",
    "Учусь на бюджете в Вышке на программиста",
    "Владею Python, SQL и машинным обучением",
    "Интересуюсь UX-исследованиями и дизайном",
    "Живу на 2 города"
];

if (showFactBtn && randomFact) {
    let currentFactIndex = -1;

    showFactBtn.addEventListener('click', () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * funFacts.length);
        } while (newIndex === currentFactIndex && funFacts.length > 1);

        currentFactIndex = newIndex;

        randomFact.style.opacity = '0';
        randomFact.style.transform = 'translateY(10px)';

        setTimeout(() => {
            randomFact.textContent = funFacts[currentFactIndex];
            randomFact.style.opacity = '1';
            randomFact.style.transform = 'translateY(0)';
        }, 300);

        showFactBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            showFactBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.team-card, .person-hero, .skill-category');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});