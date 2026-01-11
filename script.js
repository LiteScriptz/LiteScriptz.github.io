const questions = [
    { q: "What is 2 + 7?", a: "9" },
    { q: "What is 6 + 14?", a: "20" },
    { q: "What is 5 + 3?", a: "8" },
    { q: "What is 7 + 15?", a: "22" },
    { q: "On which Planet are we on?", a: "Earth" },
    { q: "What year is it?", a: "2025" }
];

let correctAnswer = "";

document.addEventListener("DOMContentLoaded", function () {
    const discordLink = document.getElementById("discord-link");
    const modal = document.getElementById("verifyModal");
    const closeModal = document.getElementById("closeModal");
    const mathQuestion = document.getElementById("mathQuestion");
    const userAnswer = document.getElementById("userAnswer");
    const submitAnswer = document.getElementById("submitAnswer");
    const verificationMessage = document.getElementById("verificationMessage");

    function showModal() {
        const idx = Math.floor(Math.random() * questions.length);
        mathQuestion.textContent = questions[idx].q;
        correctAnswer = questions[idx].a;
        userAnswer.value = "";
        verificationMessage.textContent = "";
        modal.style.display = "flex";
        userAnswer.focus();
    }

    function hideModal() {
        modal.style.display = "none";
    }

    discordLink.addEventListener("click", showModal);
    closeModal.addEventListener("click", hideModal);

    submitAnswer.addEventListener("click", function () {
        if (userAnswer.value.trim() === correctAnswer) {
            verificationMessage.innerHTML = `<a href="https://discord.gg/4WzDVjKJ" target="_blank">Click here to join our Discord!</a>`;
        } else {
            verificationMessage.textContent = "Incorrect answer. Try again!";
        }
    });

    userAnswer.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            submitAnswer.click();
        }
    });
});
