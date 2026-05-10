// js/game.js

// Define all questions, categorized by difficulty
const questionBank = {
    easy: [
        {
            text: "Which famous Tang poem made Maple Bridge widely known?",
            options: [
                "\"Mooring by Maple Bridge at Night\"",
                "\"On the Tower at Youzhou\"",
                "\"Spring Dawn\"",
                "\"Climbing High\""
            ],
            correct: 0
        },
        {
            text: "In which city is Maple Bridge located?",
            options: [
                "Hangzhou",
                "Nanjing",
                "Suzhou",
                "Yangzhou"
            ],
            correct: 2
        },
        {
            text: "Which famous temple stands next to Maple Bridge?",
            options: [
                "Lingyin Temple",
                "Hanshan Temple",
                "Daming Temple",
                "Jinshan Temple"
            ],
            correct: 1
        }
    ],
    medium: [
        {
            text: "What was the original name of Maple Bridge? (Note: the character means 'to seal/block')",
            options: [
                "Feng Bridge (丰 – abundant)",
                "Feng Bridge (封 – seal)",
                "Feng Bridge (风 – wind)",
                "Feng Bridge (峰 – peak)"
            ],
            correct: 1
        },
        {
            text: "Why was it originally called that?",
            options: [
                "Because of abundant harvests",
                "Because a checkpoint was set to block canal traffic",
                "Because it was very windy",
                "Because it faced a mountain peak"
            ],
            correct: 1
        },
        {
            text: "During the Ming and Qing dynasties, what commodity was traded at Maple Bridge as a national center?",
            options: [
                "Silk",
                "Tea",
                "Rice and beans",
                "Porcelain"
            ],
            correct: 2
        },
        {
            text: "What was the name of the standard measuring vessel used for grain tax collection at Maple Bridge?",
            options: [
                "Feng Dou",
                "Feng Hu",
                "Feng Sheng",
                "Feng He"
            ],
            correct: 1
        },
        {
            text: "In which year was the existing granite arch bridge rebuilt?",
            options: [
                "1770",
                "1860",
                "1867",
                "1984"
            ],
            correct: 2
        },
        {
            text: "During the War of Resistance against Japan (1939), what did patriots do to protect the stone stele at Hanshan Temple?",
            options: [
                "Buried the original stele",
                "Created a replica to fool invaders",
                "Moved it to Chongqing",
                "Erased the inscription"
            ],
            correct: 1
        },
        {
            text: "When was the granite bridge given a major restoration?",
            options: [
                "1867",
                "1906",
                "1984",
                "2020"
            ],
            correct: 2
        }
    ],
    hard: [
        {
            text: "According to the timeline, from which dynasty does the name \"Maple Bridge\" originate through poetic influence?",
            options: [
                "Song Dynasty",
                "Tang Dynasty",
                "Ming Dynasty",
                "Qing Dynasty"
            ],
            correct: 1
        },
        {
            text: "Which Southern Song gazetteer first recorded the fame of Maple Bridge?",
            options: [
                "\"Wu Jun Zhi\"",
                "\"Zhong Wu Ji Wen\"",
                "\"Suzhou Fu Zhi\"",
                "\"Gu Su Zhi\""
            ],
            correct: 0
        },
        {
            text: "The Qing scholar Yu Yue sparked an academic debate over which two characters in Zhang Ji's poem?",
            options: [
                "\"Moon set\" (月落)",
                "\"River maples\" (江枫)",
                "\"Fishing lights\" (渔火)",
                "\"Midnight\" (夜半)"
            ],
            correct: 1
        },
        {
            text: "According to Yu Yue, the phrase \"river maples and fishing lights\" (江枫渔火) should actually refer to which two bridges?",
            options: [
                "The river and the maple trees",
                "Jiangcun Bridge and Maple Bridge",
                "The maple forest and the temple",
                "The fishing boats and the canal"
            ],
            correct: 1
        },
        {
            text: "Who affirmed Yu Yue's theory in a postscript on his stele?",
            options: [
                "Gong Mingzhi",
                "Chen Kuilong (Governor of Jiangsu)",
                "Tang Yin",
                "Gao Qi"
            ],
            correct: 1
        },
        {
            text: "The Ming poet Gao Qi wrote a line praising Maple Bridge's poetic fame. Which line is it?",
            options: [
                "\"Beyond Gusu city walls, Hanshan Temple, midnight bells reach the visitor's boat.\"",
                "\"Three hundred painted bridges grace the river city, but only Maple Bridge is famed in verse.\"",
                "\"Moon sets, crows cry, frost fills all around.\"",
                "\"Maple Bridge’s lanterns at night, fishermen sing till the third watch.\""
            ],
            correct: 1
        },
        {
            text: "Maple Bridge Scenic Area is known as the \"Five Ancients\" (五古). Which of the following is NOT one of them?",
            options: [
                "Hanshan Ancient Temple",
                "Jiangfeng Ancient Bridge",
                "Tieling Pass",
                "Suzhou Ancient City Wall"
            ],
            correct: 3
        },
        {
            text: "The military defense structure built in the Ming Dynasty at the east end of Maple Bridge is called?",
            options: [
                "Tieling Pass (Iron Bell Pass)",
                "Wanghuo Tower",
                "Drum Tower",
                "Water Gate Tower"
            ],
            correct: 0
        },
        {
            text: "According to Buddhist tradition, why does Hanshan Temple ring its bell 108 times on New Year's Eve?",
            options: [
                "To represent 108 months in a life cycle",
                "To eliminate 108 kinds of worries",
                "To mark 108 steps to enlightenment",
                "To honor 108 disciples of Buddha"
            ],
            correct: 1
        },
        {
            text: "The bridge was destroyed in 1860 during which major historical event?",
            options: [
                "First Opium War",
                "Taiping Rebellion (Xianfeng reign, 10th year)",
                "Second Opium War",
                "Boxer Rebellion"
            ],
            correct: 1
        },
        {
            text: "The folk saying \"Check the Maple Bridge price, and you won't be cheated when buying goods\" reflects Maple Bridge's dominance in which sector?",
            options: [
                "Silk trade",
                "Rice and bean market pricing",
                "Canal shipping rates",
                "Tourism souvenirs"
            ],
            correct: 1
        },
        {
            text: "Which local chronicle written by Gong Mingzhi of the Southern Song did Yu Yue cite to support his textual argument?",
            options: [
                "\"Wu Jun Zhi\"",
                "\"Zhong Wu Ji Wen\"",
                "\"Suzhou Fu Zhi\"",
                "\"Gu Su Zhi\""
            ],
            correct: 1
        }
    ]
};

// Global state
let currentDifficulty = null; // Initially null, indicating difficulty has not been selected yet
let questions = [];
let currentIndex = 0;
let userAnswers = [];
let quizFinished = false;

// Initialize: Check if difficulty has been selected
function initGame() {
    // If currentDifficulty is null, render the selection interface
    if (!currentDifficulty) {
        renderDifficultySelection();
    } else {
        loadQuestions(currentDifficulty);
    }
}

function loadQuestions(difficulty) {
    currentDifficulty = difficulty;
    questions = questionBank[difficulty];
    currentIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    quizFinished = false;
    render();
}

function render() {
    const app = document.getElementById("quizApp");
    if (!app) return;

    // If on the quiz interface, ensure the fixed footer at the bottom is displayed
    const fixedFooter = document.querySelector('.footer');
    if (fixedFooter) {
        fixedFooter.style.display = 'block';
    }

    // If difficulty hasn't been selected yet, show the difficulty selection interface
    if (!currentDifficulty || questions.length === 0) {
        renderDifficultySelection();
        return;
    }

    if (quizFinished) {
        renderResult(app);
        return;
    }

    const q = questions[currentIndex];
    const selected = userAnswers[currentIndex];

    // Build feedback HTML
    let feedbackHtml = "";
    if (selected !== null) {
        const isCorrect = (selected === q.correct);
        feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? "✅ Correct!" : "❌ Wrong! The correct answer is: " + q.options[q.correct]}
        </div>`;
    }

    // Build options HTML
    let optionsHtml = "";
    q.options.forEach((opt, idx) => {
        const isSelected = (selected === idx);
        optionsHtml += `<div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${idx})">${opt}</div>`;
    });

// [Modification]: Move the Change Level button to the top right above the question, change style to a subtle text link or small button
    app.innerHTML = `
        <div style="display:flex; justify-content:flex-end; margin-bottom:10px;">
             <button onclick="changeDifficulty()" style="background:none; border:none; color:#8B6B61; cursor:pointer; font-size:0.9em; text-decoration:underline; padding:5px;">
                Change Difficulty Level
            </button>
        </div>

        <div class="question-box">
            <div style="margin-bottom:10px; color:#888; font-size:0.9em; text-transform:uppercase; letter-spacing:1px;">
                ${currentDifficulty.toUpperCase()} LEVEL
            </div>
            <div class="question">${currentIndex + 1}. ${q.text}</div>
            <div class="options">${optionsHtml}</div>
            ${feedbackHtml}
        </div>

        <div style="display:flex; justify-content: space-between; align-items:center; margin-top:20px;">
            <!-- [Modification]: Removed the Change Level button on the left -->
            <div></div> 
            <div>
                 ${currentIndex > 0 ? `<button class="back-btn" onclick="prevQuestion()">← Prev</button>` : ""}
                <button class="next-btn" onclick="nextQuestion()" ${selected === null ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                    ${currentIndex + 1 === questions.length ? 'Finish' : 'Next →'}
            </button>
            </div>
        </div>
        <div style="margin-top: 15px; text-align: right; color: #8B6B61; font-size: 0.9em;">
            Question ${currentIndex + 1} of ${questions.length}
        </div>
    `;
}
// --- Core modification: Render a more guided difficulty selection interface ---
function renderDifficultySelection() {
    const app = document.getElementById("quizApp");
    if (!app) return;

    // Hide the fixed footer at the bottom of the HTML, as the selection interface has its own back button
    const fixedFooter = document.querySelector('.footer');
    if (fixedFooter) {
        fixedFooter.style.display = 'none';
    }

    app.innerHTML = `
        <div style="text-align:center; padding: 20px 10px;">
            <h2 style="color:#5D4037; margin-bottom:10px; font-family:'Georgia', serif;">Choose Your Challenge</h2>
            <p style="color:#666; margin-bottom:30px; font-size:1.1em;">
                How well do you know the echoes of Maple Bridge?
            </p>
            
            <div style="display:flex; flex-direction:column; gap:20px; max-width:500px; margin:0 auto;">
                
                <!-- Easy Option -->
                <div onclick="startLevel('easy')" style="background:white; padding:20px; border-radius:15px; box-shadow:0 4px 10px rgba(0,0,0,0.05); cursor:pointer; transition:0.2s; border-left:5px solid #4CAF50;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                    <h3 style="color:#4CAF50; margin:0 0 5px 0;">🟢 Like a simple challenge?</h3>
                    <p style="color:#666; margin:0; font-size:0.95em;">Perfect for beginners. 3 basic questions about the poem and location.</p>
                    <div style="margin-top:10px; font-size:0.85em; color:#4CAF50; font-weight:bold;">🏆 Get a perfect score to unlock "Poetry Master"!</div>
                </div>

                <!-- Medium Option -->
                <div onclick="startLevel('medium')" style="background:white; padding:20px; border-radius:15px; box-shadow:0 4px 10px rgba(0,0,0,0.05); cursor:pointer; transition:0.2s; border-left:5px solid #FF9800;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                    <h3 style="color:#FF9800; margin:0 0 5px 0;">🟡 Know your history?</h3>
                    <p style="color:#666; margin:0; font-size:0.95em;">7 questions about the bridge's reconstruction, trade, and cultural debates.</p>
                    <div style="margin-top:10px; font-size:0.85em; color:#FF9800; font-weight:bold;">🏆 Get a perfect score to unlock "Poetry Master"!</div>
                </div>

                <!-- Hard Option -->
                <div onclick="startLevel('hard')" style="background:white; padding:20px; border-radius:15px; box-shadow:0 4px 10px rgba(0,0,0,0.05); cursor:pointer; transition:0.2s; border-left:5px solid #F44336;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                    <h3 style="color:#F44336; margin:0 0 5px 0;">🔴 Confident in your knowledge?</h3>
                    <p style="color:#666; margin:0; font-size:0.95em;">12 deep-dive questions for true scholars. Academic debates and ancient records.</p>
                    <div style="margin-top:10px; font-size:0.85em; color:#F44336; font-weight:bold;">🏆 Get a perfect score to unlock "Poetry Master"!</div>
                </div>

            </div>
            
            <div style="margin-top:40px;">
                 <button class="back-btn" onclick="location.href='index.html'">← Back to Home</button>
            </div>
        </div>
    `;
}

function startLevel(diff) {
    currentDifficulty = diff;
    loadQuestions(diff);
}

function changeDifficulty() {
    currentDifficulty = null; // Reset difficulty
    questions = [];
    render(); // Re-render selection interface
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

function renderResult(app) {
    let score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === questions[idx].correct) score++;
    });

    const total = questions.length;
    const percentage = score / total;

    let message = "";
    let isPerfect = (score === total);
    let shouldUnlockAchievement = false;

    if (isPerfect) {
        shouldUnlockAchievement = true;
        localStorage.setItem('gameCompleted', 'true');

        // Give different praises based on difficulty
        if (currentDifficulty === 'easy') {
            message = "Perfect! A great start to your journey.";
        } else if (currentDifficulty === 'medium') {
            message = "Impressive! You have a solid grasp of the history.";
        } else {
            message = "Outstanding! You are a true Maple Bridge scholar.";
        }
    }

    else if (percentage >= 0.6) {
        message = "Great job! You know the history well.";
    } else {
        message = "Keep exploring! The bridge has many stories to tell.";
    }

    // Hide the fixed footer at the bottom of the HTML
    const fixedFooter = document.querySelector('.footer');
    if (fixedFooter) {
        fixedFooter.style.display = 'none';
    }

    app.innerHTML = `
        <div class="result">
             Quest Completed! <br>
            <div style="font-size:1rem; color:#666; margin-bottom:10px;">Level: ${currentDifficulty.toUpperCase()}</div>
            Your score: <span class="score">${score} / ${total}</span>
            <p style="margin-top: 20px; font-size: 1.1em;">${message}</p>
            
            ${shouldUnlockAchievement ?
        '<p style="color:#D4AF37; font-weight:bold; margin-top:15px; animation: pulse 1s infinite;">🏆 Achievement Unlocked: Poetry Master!</p>'
        :
        '<p style="font-size:0.9em; color:#888; margin-top:10px;">Tip: Get a perfect score in ANY level to unlock the Poetry Master badge.</p>'
    }
        </div>
        <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap; margin-top:20px;">
            <button class="next-btn" onclick="restartQuiz()">Play Again</button>
            <button class="back-btn" onclick="changeDifficulty()">Try Another Level</button>
            <button class="back-btn" onclick="location.href='index.html'">← Back to Main Page</button>
        </div>
    `;
}

function restartQuiz() {
    loadQuestions(currentDifficulty);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});