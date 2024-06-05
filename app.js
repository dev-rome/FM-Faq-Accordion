const questionEl = document.querySelectorAll('.question');
const answerEl = document.querySelectorAll('.question-wrapper p');

questionEl.forEach((question) => {
    question.addEventListener("click", function () {
        answerEl.forEach((answer) => {
            if (answer !== question.nextElementSibling) {
                answer.style.display = 'none';
            }
        });

        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});