// js/game.js

// 定义所有题目，按难度分类
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

// 全局状态
let currentDifficulty = 'easy'; // 默认难度
let questions = []; // 当前使用的题目列表
let currentIndex = 0;
let userAnswers = [];
let quizFinished = false;

// 初始化：根据URL参数或默认值加载难度
function initGame() {
    const urlParams = new URLSearchParams(window.location.search);
    const diff = urlParams.get('diff');
    if (diff && questionBank[diff]) {
        currentDifficulty = diff;
    }
    loadQuestions(currentDifficulty);
}

function loadQuestions(difficulty) {
    questions = questionBank[difficulty];
    currentIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    quizFinished = false;
    render();
}

function render() {
    const app = document.getElementById("quizApp");
    if (!app) return;

    // 如果是答题界面，确保底部固定的 footer 显示出来
    const fixedFooter = document.querySelector('.footer');
    if (fixedFooter) {
        fixedFooter.style.display = 'block';
    }

    // 如果尚未选择难度（首次加载且无参数），显示难度选择界面
    if (questions.length === 0) {
        renderDifficultySelection(app);
        return;
    }

    if (quizFinished) {
        renderResult(app);
        return;
    }

    const q = questions[currentIndex];
    const selected = userAnswers[currentIndex];

    // 构建反馈HTML
    let feedbackHtml = "";
    if (selected !== null) {
        const isCorrect = (selected === q.correct);
        feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? "✅ Correct!" : "❌ Wrong! The correct answer is: " + q.options[q.correct]}
        </div>`;
    }

    // 构建选项HTML
    let optionsHtml = "";
    q.options.forEach((opt, idx) => {
        const isSelected = (selected === idx);
        // 如果已选择，禁用点击效果（可选，这里保留点击可更改但通常测验不允许改，这里假设允许重选直到点Next）
        // 为了简单起见，我们允许在点Next前修改答案
        optionsHtml += `<div class="option ${isSelected ? 'selected' : ''}" onclick="selectOption(${idx})">${opt}</div>`;
    });

    app.innerHTML = `
        <div class="question-box">
            <div style="margin-bottom:10px; color:#888; font-size:0.9em; text-transform:uppercase; letter-spacing:1px;">
                ${currentDifficulty.toUpperCase()} LEVEL
            </div>
            <div class="question">${currentIndex + 1}. ${q.text}</div>
            <div class="options">${optionsHtml}</div>
            ${feedbackHtml}
        </div>
        <div style="display:flex; justify-content: space-between; align-items:center; margin-top:20px;">
            <button class="back-btn" onclick="changeDifficulty()" style="margin:0; font-size:0.9em; padding:8px 16px;">Change Level</button>
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

// 渲染难度选择界面
function renderDifficultySelection(app) {
    app.innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <h2 style="color:#5D4037; margin-bottom:30px;">Select Difficulty Level</h2>
            <div style="display:flex; flex-direction:column; gap:15px; max-width:400px; margin:0 auto;">
                <button onclick="startLevel('easy')" class="btn-start" style="background:#4CAF50; color:white; border:none; cursor:pointer;">
                    🟢 Easy (3 Questions)<br><span style="font-size:0.8em; opacity:0.9;">Unlock Achievement Here</span>
                </button>
                <button onclick="startLevel('medium')" class="btn-start" style="background:#FF9800; color:white; border:none; cursor:pointer;">
                    🟡 Medium (7 Questions)
                </button>
                <button onclick="startLevel('hard')" class="btn-start" style="background:#F44336; color:white; border:none; cursor:pointer;">
                    🔴 Hard (12 Questions)
                </button>
            </div>
            <div style="margin-top:30px;">
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
    questions = []; // 清空当前题目，触发重新渲染选择界面
    render();
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

        // 根据难度给出不同的赞美语
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
    //隐藏 HTML 底部固定的 footer，避免重复
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
        <div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap;">
            <button class="next-btn" onclick="restartQuiz()">Play Again</button>
            <button class="back-btn" onclick="changeDifficulty()">Try Another Level</button>
            <button class="back-btn" onclick="location.href='index.html'">← Back to Main Page</button>
        </div>
    `;
}

function restartQuiz() {
    loadQuestions(currentDifficulty);
}

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});