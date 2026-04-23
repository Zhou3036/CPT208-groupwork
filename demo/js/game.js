// js/game.js

const questions = [
    {
        text: "Where is Maple Bridge located?",
        options: [
            "Next to the West Lake in Hangzhou",
            "By the Grand Canal, near Hanshan Temple in Suzhou",
            "In the center of Beijing",
            "Near the Yellow River in Xi'an"
        ],
        correct: 1
    },
    {
        text: "Why was the bridge originally named 'Feng Qiao' (封桥)?",
        options: [
            "Because it was made of maple wood",
            "Because it was used to block/check canal traffic for taxes",
            "Because a general named Feng built it",
            "Because it looks like a closed door"
        ],
        correct: 1
    },
    {
        text: "Which famous poem made Maple Bridge world-renowned?",
        options: [
            "Mooring by Maple Bridge at Night (枫桥夜泊)",
            "Quiet Night Thought (静夜思)",
            "Spring Morning (春晓)",
            "The Song of Everlasting Sorrow (长恨歌)"
        ],
        correct: 0
    },
    {
        text: "During the Ming and Qing Dynasties, what was Maple Bridge famous for trading?",
        options: [
            "Silk and Tea",
            "Porcelain and Jade",
            "Rice and Beans (It was a major distribution center)",
            "Spices and Herbs"
        ],
        correct: 2
    },
    {
        text: "What is the 'Feng Hu' (枫斛) mentioned in history?",
        options: [
            "A type of ancient musical instrument",
            "A standard measuring tool for grain in the rice market",
            "A special boat used on the canal",
            "A kind of traditional Chinese painting"
        ],
        correct: 1
    },
    {
        text: "The current stone arch bridge we see today was rebuilt in which year?",
        options: [
            "Tang Dynasty (Year 750)",
            "Ming Dynasty (Year 1400)",
            "Qing Dynasty (Year 1867)",
            "Modern Times (Year 1980)"
        ],
        correct: 2
    },
    {
        text: "Why were replica stone steles (carved poems) created during the war period (1930s-40s)?",
        options: [
            "To decorate the new museum",
            "To protect the original historic stele from being stolen by invaders",
            "Because the original one was broken by rain",
            "To sell as souvenirs to tourists"
        ],
        correct: 1
    }
];

let currentIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let quizFinished = false;
function render() {
    const app = document.getElementById("quizApp");
    if (!app) return; 

    if (quizFinished) {
        let score = 0;
        userAnswers.forEach((ans, idx) => {
            if (ans === questions[idx].correct) score++;
        });
        
        let message = "";
        let isPerfect = (score === questions.length);

        if (isPerfect) {
            message = "Perfect! You are a true Maple Bridge scholar.";
            // 关键修改：如果满分，设置 localStorage 标记
            localStorage.setItem('gameCompleted', 'true');
        } else if (score >= questions.length * 0.6) {
            message = "Great job! You know the history well.";
        } else {
            message = "Keep exploring! The bridge has many stories to tell.";
        }

        app.innerHTML = `
            <div class="result">
                 Quest Completed! <br>
                Your score: <span class="score">${score} / ${questions.length}</span>
                <p style="margin-top: 20px; font-size: 1rem;">${message}</p>
                ${isPerfect ? '<p style="color:#D4AF37; font-weight:bold;">Achievement Unlocked: Poetry Master! (Return to Home to view)</p>' : ''}
            </div>
            <button class="next-btn" onclick="restartQuiz()"> Play Again</button>
            <button class="back-btn" onclick="location.href='index.html'">← Back to Main Page</button>
        `;
        return;
    }
    
    const q = questions[currentIndex];
    const selected = userAnswers[currentIndex];
    let feedbackHtml = "";
    if (selected !== null) {
        const isCorrect = (selected === q.correct);
        feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? " Correct!" : " Wrong! The correct answer is: " + q.options[q.correct]}
        </div>`;
    }

    let optionsHtml = "";
    q.options.forEach((opt, idx) => {
        const isSelected = (selected === idx);
 optionsHtml += `<div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${idx})">${opt}</div>`;
    });

    app.innerHTML = `
        <div class="question-box">
            <div class="question">${currentIndex+1}. ${q.text}</div>
            <div class="options">${optionsHtml}</div>
            ${feedbackHtml}
        </div>
        <div>
            <button class="next-btn" onclick="nextQuestion()" ${selected === null ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>Next →</button>
            ${currentIndex > 0 ? `<button class="back-btn" onclick="prevQuestion()">← Previous</button>` : ""}
        </div>
        <div style="margin-top: 15px; text-align: center; color: #8B6B61;">Question ${currentIndex+1} of ${questions.length}</div>
    `;
}

function selectOption(optIndex) {
    if (quizFinished) return;
    userAnswers[currentIndex] = optIndex;
    render();
}

function nextQuestion() {
    if (quizFinished) return;
    if (userAnswers[currentIndex] === null) return;
    if (currentIndex + 1 < questions.length) {
        currentIndex++;
        render();
    } else {
        quizFinished = true;
        render();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        render();
    }
}

function restartQuiz() {
    currentIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    quizFinished = false;
    render();
}

// 初始化渲染
render();