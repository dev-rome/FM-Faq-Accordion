const questionEl = document.querySelectorAll('.question');
const answerEl = document.querySelectorAll('.question-wrapper p');

questionEl.forEach((question) => {
    question.addEventListener("click", function () {
        answerEl.forEach((answer) => {
            if (answer !== question.nextElementSibling) {
                answer.style.display = 'none';
                const icon = answer.previousElementSibling.querySelector('img');
                if (icon) {
                    icon.src = './assets/images/icon-plus.svg';
                }
            }
        });

        const answer = question.nextElementSibling;
        const icon = question.querySelector('img');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.src = './assets/images/icon-plus.svg';
        } else {
            answer.style.display = 'block';
            icon.src = './assets/images/icon-minus.svg';
        }
    });
});