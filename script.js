// Add interactivity for animations or popups
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
});
