const questions = document.querySelectorAll('.faq-toggle');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.parentNode.classList.toggle('active');
    })
});