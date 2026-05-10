// js/script.js

// Achievement tracking variables
// Read unlocked achievements from localStorage to prevent loss on refresh
let unlockedAchievements = JSON.parse(localStorage.getItem('mapleBridgeAchievements')) || [];
// Record timeline IDs clicked in the current session
let clickedTimelineEvents = new Set();

// A total of 6 events
const TOTAL_EVENTS = 6;

function showEventDetail(eventId) {
    // Record the click
    clickedTimelineEvents.add(eventId);

    // Check if "History Master" is unlocked
    // Modification: Use .some() to check if the ID exists in the object array
    const hasHistoryMaster = unlockedAchievements.some(a => a.id === 'history_master');

    if (clickedTimelineEvents.size === TOTAL_EVENTS && !hasHistoryMaster) {
        unlockAchievement('history_master', 'History Master', 'You have explored all historical periods of Maple Bridge!');
    }

    let detailContent = '';
    // ... the rest of the switch logic remains unchanged ...

    switch (eventId) {
        case 'zhangji':
            detailContent = `
                <h2>Tang Dynasty - Origin & The Poem</h2>
                <p><strong>Period:</strong> Tang Dynasty (approx. 8th Century)</p>
                <p><strong>Name Origin:</strong> Originally named "Feng Bridge" (封桥, meaning "Sealed Bridge") because checkpoints were set up here to block and inspect canal traffic. After the famous poet Zhang Ji passed by and wrote "Mooring by Maple Bridge at Night" (枫桥夜泊), the name gradually evolved into "Maple Bridge" (枫桥) due to the poem's widespread fame.</p>
                <p><strong>Cultural Impact:</strong> Zhang Ji's poem immortalized the bridge in Chinese literature. Lines like "Moon sets, crows cry, frost fills all around" made it one of the most famous bridges in history. Later poets like Du Mu, Bai Juyi, and Tang Yin also left verses here, solidifying its status as a cultural landmark.</p>
                <blockquote style="font-style: italic; border-left: 3px solid #ccc; padding-left: 10px; margin: 15px 0;">
                    "Moon sets, crows cry, frost fills all around,<br>
                    River maples, fishing lights, melancholy thoughts bind.<br>
                    Outside Hanshan Temple, at midnight, the bell rings,<br>
                    Drift to the boat - mooring by Maple Bridge."
                </blockquote>
            `;
            break;

        case 'mingdynasty':
            detailContent = `
                <h2>Ming & Qing Dynasties - Commercial Hub</h2>
                <p><strong>Period:</strong> Ming (1368-1644) & Qing (1644-1912)</p>
                <p><strong>Rice & Bean Market:</strong> Leveraging its advantage in canal transport, the Maple Bridge area developed into the nation's most important distribution center for rice and beans. It became the largest market of its kind in China during this period.</p>
                <p><strong>"Feng Hu" Standard:</strong> The "Feng Hu" (枫斛), a standard measuring vessel used here for collecting grain tax, became the national standard for rice measurements. A local proverb stated, "Check the Maple Bridge price, and you won't be cheated when buying goods," highlighting its influence on market prices across Southern Jiangsu.</p>
                <p><strong>Cultural Debate:</strong> In the Qing Dynasty, scholar Yu Yue sparked an academic debate about the poem's line "River Maples" (江枫). He argued based on historical records that it should refer to "Jiangcun Bridge" and "Maple Bridge" separately, or even "Jiang Village," adding a layer of scholarly intrigue to the site.</p>
            `;
            break;

        case 'qingdynasty':
            detailContent = `
                <h2>Late Qing - Destruction & Reconstruction</h2>
                <p><strong>1770 Reconstruction:</strong> The bridge was rebuilt on its original site during the 35th year of Emperor Qianlong's reign.</p>
                <p><strong>1860 Destruction:</strong> During the Taiping Rebellion (specifically the 10th year of Emperor Xianfeng, 1860), the bridge and surrounding structures were destroyed by war again.</p>
                <p><strong>1867 Current Structure:</strong> The existing bridge is a single-arch granite structure rebuilt in the 6th year of Emperor Tongzhi (1867). It features a semi-circular arch vault made of granite, which remains the core structure we see today.</p>
                <p><strong>Protection of Heritage:</strong> In 1906, scholar Yu Yue inscribed the "Maple Bridge Night Mooring" stone stele at Hanshan Temple. Later, during the War of Resistance against Japanese Aggression (1939), patriots created a replica stele to protect the original from plundering by Japanese forces.</p>
            `;
            break;

        case 'warperiod':
            detailContent = `
                <h2>War Period & Preservation</h2>
                <p><strong>Period:</strong> 1937-1945</p>
                <p>During the Second Sino-Japanese War, the area suffered from conflict. However, significant efforts were made to preserve cultural heritage. In 1939, to prevent the original "Maple Bridge Night Mooring" stele at Hanshan Temple from being looted by Japanese troops, patriotic figures created a high-quality replica to replace the original, successfully protecting the true artifact.</p>
                <p>The bridge itself, having survived previous conflicts in the 19th century, stood as a silent witness to these turbulent times.</p>
            `;
            break;

        case 'restoration':
            detailContent = `
                <h2>Modern Restoration</h2>
                <p><strong>Date:</strong> 1984</p>
                <p>In 1984, a major restoration project was undertaken to repair and maintain the granite structure built in 1867. This effort ensured the structural integrity of the single-arch bridge and restored the historical ambiance of the surrounding area.</p>
                <p>The restoration respected the traditional architectural style, preserving the bridge as a key component of Suzhou's historical landscape and ensuring it could withstand modern environmental challenges.</p>
            `;
            break;

        case 'digital':
            detailContent = `
                <h2>Digital Preservation Initiative</h2>
                <p><strong>Date:</strong> Year 2020</p>
                <p>The "Echoes of Maple Bridge" project uses cutting-edge XR (Extended Reality) technology to create immersive experiences showing the bridge across different historical periods.</p>
                <p>Through AR and VR technologies, visitors can experience the bridge as it appeared in Tang Dynasty times when Zhang Ji wrote his poem, during its commercial peak in Ming and Qing dynasties, and throughout other significant periods in its history.</p>
                <p>Advanced 3D scanning and modeling techniques ensure accurate preservation of the current structure, while historical research provides authentic visualizations of past appearances.</p>
            `;
            break;

        default:
            detailContent = `<h2>Event Details</h2><p>Details for this event will be available soon.</p>`;
    }

    document.getElementById('modalBody').innerHTML = detailContent;
    document.getElementById('eventModal').style.display = 'block';
}

function unlockAchievement(id, title, desc) {
    // Check if already unlocked
    // Note: unlockedAchievements now stores an array of objects {id, title, desc, date}
    const alreadyUnlocked = unlockedAchievements.find(a => a.id === id);

    if (alreadyUnlocked) {
        checkGuardianStatus();
        return;
    }

    // Create a new achievement object, including the current time
    const newAchievement = {
        id: id,
        title: title,
        desc: desc,
        date: new Date().toISOString() // Record time in ISO format
    };

    // Add to the list
    unlockedAchievements.push(newAchievement);

    // Save to localStorage
    localStorage.setItem('mapleBridgeAchievements', JSON.stringify(unlockedAchievements));

    // Show current achievement popup
    showAchievementPopup(id, title, desc);

    // Refresh the achievement showcase at the bottom
    renderAchievementShowcase();

    // Check Guardian achievement status
    checkGuardianStatus();
}
// New: Helper function specifically for showing popups, avoiding code duplication
function showAchievementPopup(id, title, desc) {
    const container = document.getElementById('achievement-container');
    const icon = document.getElementById('badge-icon');
    const titleEl = document.getElementById('badge-title');
    const descEl = document.getElementById('badge-desc');

    titleEl.innerText = title;
    descEl.innerText = desc;

    if (id === 'history_master') icon.innerText = '📜';
    else if (id === 'poetry_master') icon.innerText = '🖋️';
    else if (id === 'guardian') icon.innerText = '🛡️';

    container.style.display = 'flex';
    setTimeout(() => {
        container.classList.add('show');
        icon.classList.add('unlocked');
    }, 10);
}

// New: Check if "Maple Bridge Guardian" should be unlocked
function checkGuardianStatus() {
    // Use .some() or .find() to search within the object array
    const hasHistory = unlockedAchievements.some(a => a.id === 'history_master');
    const hasPoetry = unlockedAchievements.some(a => a.id === 'poetry_master');
    const hasGuardian = unlockedAchievements.some(a => a.id === 'guardian');

    // If both history and poetry achievements are unlocked, but guardian is not
    if (hasHistory && hasPoetry && !hasGuardian) {
        // Delay unlocking slightly so the user can finish viewing the previous achievement
        setTimeout(() => {
            unlockAchievement('guardian', 'Maple Bridge Guardian', 'You have mastered both history and poetry!');
        }, 2500);
    }
}

// Close achievement popup
function closeAchievement() {
    const container = document.getElementById('achievement-container');
    container.classList.remove('show');
    setTimeout(() => {
        container.style.display = 'none';
        document.getElementById('badge-icon').classList.remove('unlocked');
    }, 300);
}


// --- Render bottom achievement showcase (Refactored version) ---
function renderAchievementShowcase() {
    const grid = document.getElementById('badge-grid');
    if (!grid) return;

    grid.innerHTML = ''; // Clear current content

    // Define all possible achievement templates
    // Note: Assuming you have corresponding image paths here. If no images, you can use a placeholder service or keep text for debugging
    const allAchievementsDef = [
        {
            id: 'history_master',
            imgSrc: 'images/K3.png', // Please replace with your actual image paths
            title: 'History Master',
            desc: 'Explore all 6 historical periods on the timeline.',
            lockedDesc: 'Click all timeline events to unlock.'
        },
        {
            id: 'poetry_master',
            imgSrc: 'images/K2.png',
            title: 'Poetry Master',
            desc: 'Get a perfect score in any quiz level.',
            lockedDesc: 'Answer all quiz questions correctly.'
        },
        {
            id: 'guardian',
            imgSrc: 'images/K1.png',
            title: 'Maple Bridge Guardian',
            desc: 'Master both history and poetry.',
            lockedDesc: 'Unlock History & Poetry badges first.'
        }
    ];

    let hasAnyAchievement = false;

    allAchievementsDef.forEach(def => {
        // Search in the unlocked list
        const unlockedData = unlockedAchievements.find(a => a.id === def.id);
        const isUnlocked = !!unlockedData;

        if (isUnlocked) {
            hasAnyAchievement = true;
        }

        // Create badge element
        const badgeDiv = document.createElement('div');
        // If unlocked, add the 'unlocked' class
        badgeDiv.className = `showcase-badge ${isUnlocked ? 'unlocked' : ''}`;

        // Build internal HTML
        // 1. Image (If image loading fails, an alt text can be used as a fallback)
        // 2. Lock icon (only shown when not unlocked)
        // 3. Tooltip (prompt text changes based on status)

        const lockIconHtml = isUnlocked ? '' : '<span class="lock-icon">🔒</span>';
        const tooltipDesc = isUnlocked ? def.desc : def.lockedDesc;

        // Format time (only shown when unlocked)
        let dateHtml = '';
        if (isUnlocked && unlockedData.date) {
            const dateObj = new Date(unlockedData.date);
            const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            dateHtml = `<span class="tooltip-date" style="display:block; margin-top:5px; font-size:0.8em; color:#aaa;">Unlocked: ${dateStr}</span>`;
        }

        badgeDiv.innerHTML = `
            <img src="${def.imgSrc}" alt="${def.title}" class="icon-img" onerror="this.style.display='none'; this.parentElement.innerText='[Img]'">
            ${lockIconHtml}
            <div class="badge-tooltip">
                <span class="tooltip-title">${def.title}</span>
                <span class="tooltip-desc">${tooltipDesc}</span>
                ${dateHtml}
            </div>
        `;

        grid.appendChild(badgeDiv);
    });

    // If there are no achievements (actually this logic is not needed much now, since we show gray unlocked badges)
    // But just in case, if the array is empty, we can show a general prompt
    if (allAchievementsDef.length === 0) {
        grid.innerHTML = '<div class="empty-state">No achievements available.</div>';
    }
}

// Close achievement popup
function closeAchievement() {
    const container = document.getElementById('achievement-container');
    container.classList.remove('show');
    setTimeout(() => {
        container.style.display = 'none';
        document.getElementById('badge-icon').classList.remove('unlocked');
    }, 300);
}

// Check if there are achievement notifications from the game page
window.addEventListener('load', () => {
    // 1. Re-parse localStorage to ensure the latest data is retrieved (including possible timestamps)
    // Note: If the old data is an array of strings, compatibility handling is needed here, but since we just changed the structure,
    // if it is the first time running the new code, localStorage might be the old string[] or empty.
    // For simplicity, we assume if it's the old format, it will be overwritten with the new format on the next unlock.
    // A better approach is to migrate the data, but here we just re-read it.
    const storedData = localStorage.getItem('mapleBridgeAchievements');
    if (storedData) {
        try {
            const parsed = JSON.parse(storedData);
            // Compatibility check: If the first element is a string instead of an object, it means it's old data
            if (parsed.length > 0 && typeof parsed[0] === 'string') {
                // Simple migration: Keep ID, lose old time, set to current time or default time
                unlockedAchievements = parsed.map(id => ({
                    id: id,
                    title: getTitleById(id), // Needs a helper function to get the title, or temporarily leave blank
                    desc: getDescById(id),
                    date: new Date().toISOString()
                }));
                localStorage.setItem('mapleBridgeAchievements', JSON.stringify(unlockedAchievements));
            } else {
                unlockedAchievements = parsed;
            }
        } catch (e) {
            unlockedAchievements = [];
        }
    }

    // 2. Render bottom showcase
    renderAchievementShowcase();

    // 3. Check game completion flag
    const gameCompleted = localStorage.getItem('gameCompleted');
    if (gameCompleted === 'true') {
        unlockAchievement('poetry_master', 'Poetry Master', 'You answered all quiz questions correctly!');
        localStorage.removeItem('gameCompleted');
    }
    // 4. Also check guardian status once upon page load
    // Prevent the case where the user already obtained the first two achievements but missed the guardian due to a bug, reissue after refreshing the page
    checkGuardianStatus();
});
// Helper function: Used to get title/description during old data migration (optional, can be ignored if migration is not wanted)
function getTitleById(id) {
    if (id === 'history_master') return 'History Master';
    if (id === 'poetry_master') return 'Poetry Master';
    if (id === 'guardian') return 'Maple Bridge Guardian';
    return 'Unknown Achievement';
}
function getDescById(id) {
    if (id === 'history_master') return 'Explored all historical periods.';
    if (id === 'poetry_master') return 'Answered all quiz questions correctly.';
    if (id === 'guardian') return 'Mastered both history and poetry.';
    return '';
}

const closeBtn = document.querySelector('.close');
if (closeBtn) {
    closeBtn.onclick = function () {
        const modal = document.getElementById('eventModal');
        if (modal) modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Close modal with ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.getElementById('eventModal').style.display = 'none';
        closeAchievement(); // ESC can also close the achievement popup
    }
});

// New: Reset achievements function (for debugging)
function resetAchievements() {
    if (confirm(" Are you sure you want to reset ALL achievements? This cannot be undone.")) {
        localStorage.removeItem('mapleBridgeAchievements');
        localStorage.removeItem('gameCompleted');
        // Reset timeline click records for the current session
        clickedTimelineEvents.clear();
        alert("Achievements reset! Page will reload.");
        location.reload();
    }
}

let map = null;
let marker = null;


// --- AI Chat Functionality ---

const DEEPSEEK_API_KEY = 'sk-d0f31dfdeb544ab5b9038220557db889';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

// System prompt, setting the AI's role
const SYSTEM_PROMPT = `
You are an intelligent and friendly guide for the "Echoes of Maple Bridge" digital heritage project. 
Your knowledge is focused on:
1. The history of Maple Bridge (Tang Dynasty to present).
2. The poem "Mooring by Maple Bridge at Night" by Zhang Ji.
3. The architectural features and restoration efforts.
4. The cultural significance of the bridge in Suzhou.

Keep answers concise, accurate, and engaging. If the user asks about something unrelated to Maple Bridge or Chinese culture, politely steer the conversation back to the topic.
`;

let chatHistory = [
    { role: "system", content: SYSTEM_PROMPT }
];

function toggleChat() {
    const chatWindow = document.getElementById('ai-chat-window');
    if (chatWindow.style.display === 'none') {
        chatWindow.style.display = 'flex';
        // Focus the input box
        setTimeout(() => document.getElementById('chat-input').focus(), 100);
    } else {
        chatWindow.style.display = 'none';
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

async function sendMessage() {
    const inputEl = document.getElementById('chat-input');
    const message = inputEl.value.trim();

    if (!message) return;

    // 1. Show user message
    addMessageToUI(message, 'user');
    inputEl.value = '';

    // 2. Show loading state
    const loadingId = showLoading();

    // 3. Update history record
    chatHistory.push({ role: "user", content: message });

    try {
        // 4. Call DeepSeek API
        const response = await fetch(DEEPSEEK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",

                messages: chatHistory,
                stream: false // Simplified processing, not using streaming output
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // 5. Remove loading state and show AI response
        removeLoading(loadingId);
        addMessageToUI(aiResponse, 'ai');

        // 6. Update history record
        chatHistory.push({ role: "assistant", content: aiResponse });

    } catch (error) {
        console.error("Error calling DeepSeek API:", error);
        removeLoading(loadingId);
        addMessageToUI("Sorry, I encountered an error connecting to the AI service. Please check your network or API key.", 'ai');
    }
}

function addMessageToUI(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');

    // Simple line break handling
    messageDiv.innerText = text;

    messagesContainer.appendChild(messageDiv);

    // Scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showLoading() {
    const messagesContainer = document.getElementById('chat-messages');
    const loadingDiv = document.createElement('div');
    const id = 'loading-' + Date.now();
    loadingDiv.id = id;
    loadingDiv.classList.add('message', 'ai-message', 'typing-indicator');
    loadingDiv.innerText = "Thinking...";
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return id;
}

function removeLoading(id) {
    const loadingEl = document.getElementById(id);
    if (loadingEl) {
        loadingEl.remove();
    }
}




// Jump for three types of tags
function scrollToSection(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Use scrollIntoView to implement smooth scrolling
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.warn(`Element with ID "${elementId}" not found.`);
    }
}
// --- New: Night filter on Hero section fades out on scroll ---
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // Get the height of the Hero section
    const heroHeight = heroSection.offsetHeight;
    // Get current scroll distance
    const scrollPos = window.scrollY;

    // Calculate opacity:
    // When scrollPos is 0, opacity is 1 (fully night)
    // When scrollPos reaches half of heroHeight, opacity approaches 0 (filter disappears)
    // We set a threshold, e.g., fades completely when scrolling 60% of the Hero height
    const threshold = heroHeight * 0.6;

    let opacity = 1 - (scrollPos / threshold);

    // Limit opacity between 0 and 1
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;


    heroSection.style.setProperty('--night-overlay-opacity', opacity);
});

// =========================================
// Poetry Accordion Logic
// =========================================
function toggleAccordion(headerElement) {
    // 1. Toggle active state of the currently clicked item
    headerElement.classList.toggle("active");

    // 2. Get the corresponding content panel
    const content = headerElement.nextElementSibling;

    // 3. Determine if currently expanded or collapsed
    if (content.style.maxHeight) {
        // If already expanded, then collapse
        content.style.maxHeight = null;
        content.classList.remove("open"); // Remove 'open' class to trigger animation reset
    } else {
        // If currently collapsed, then expand

        // (Optional) If you want only one open at a time, you can close all other items:
        // closeAllAccordions();

        content.style.maxHeight = content.scrollHeight + "px";
        // Add 'open' class with a slight delay, ensuring text fades in after max-height transition starts
        setTimeout(() => {
            content.classList.add("open");
        }, 100);
    }
}

// Helper function: Close all other accordion items (If mutually exclusive effect is needed, uncomment below and call inside toggleAccordion)
/*
function closeAllAccordions() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        if (header.classList.contains('active')) {
            header.classList.remove('active');
            const content = header.nextElementSibling;
            content.style.maxHeight = null;
            content.classList.remove('open');
        }
    });
}
*/