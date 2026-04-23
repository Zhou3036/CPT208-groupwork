// js/script.js

// 成就追踪变量
// 从 localStorage 读取已解锁的成就，防止刷新丢失
let unlockedAchievements = JSON.parse(localStorage.getItem('mapleBridgeAchievements')) || [];
// 记录当前会话中点击过的时间轴ID
let clickedTimelineEvents = new Set();

// 总共有6个事件
const TOTAL_EVENTS = 6;

function showEventDetail(eventId) {
    // 记录点击
    clickedTimelineEvents.add(eventId);

    // 检查是否解锁“历史达人” (History Master)
    // 条件：当前会话点击了所有6个，且尚未解锁该成就
    if (clickedTimelineEvents.size === TOTAL_EVENTS && !unlockedAchievements.includes('history_master')) {
        unlockAchievement('history_master', 'History Master', 'You have explored all historical periods of Maple Bridge!');
    }

    let detailContent = '';

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

// --- 修改开始：优化 unlockAchievement 函数 ---
function unlockAchievement(id, title, desc) {
    // 如果已经解锁过，不再重复显示（除非是调试需要，否则保持原样）
    if (unlockedAchievements.includes(id)) {
        // 即使已解锁，我们也可能需要检查是否能组合成“守护者”
        // 但为了避免重复弹窗，我们只在真正新解锁时触发检查，或者单独写一个检查函数
        checkGuardianStatus();
        return;
    }

    // 添加到已解锁列表
    unlockedAchievements.push(id);
    localStorage.setItem('mapleBridgeAchievements', JSON.stringify(unlockedAchievements));

    // 显示当前成就弹窗
    showAchievementPopup(id, title, desc);

    // 关键：每次解锁新成就后，检查是否满足“守护者”条件
    checkGuardianStatus();
}

// 新增：专门用于显示弹窗的辅助函数，避免代码重复
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

// 新增：检查是否应该解锁“枫桥守护者”
function checkGuardianStatus() {
    const hasHistory = unlockedAchievements.includes('history_master');
    const hasPoetry = unlockedAchievements.includes('poetry_master');
    const hasGuardian = unlockedAchievements.includes('guardian');

    // 如果同时拥有历史和诗词成就，且还没有守护者成就
    if (hasHistory && hasPoetry && !hasGuardian) {
        // 延迟一点解锁，让用户先看完上一个成就
        setTimeout(() => {
            unlockAchievement('guardian', 'Maple Bridge Guardian', 'You have mastered both history and poetry!');
        }, 2500);
    }
}

// 关闭成就弹窗
function closeAchievement() {
    const container = document.getElementById('achievement-container');
    container.classList.remove('show');
    setTimeout(() => {
        container.style.display = 'none';
        document.getElementById('badge-icon').classList.remove('unlocked');
    }, 300);
}

// --- 修改结束 ---

// 检查是否有来自游戏页面的成就通知
window.addEventListener('load', () => {
    const gameCompleted = localStorage.getItem('gameCompleted');

    if (gameCompleted === 'true') {
        // 注意：这里不要立即 removeItem，因为如果用户刷新页面，我们希望它还能被处理
        // 但为了防止无限弹窗，我们在解锁后立即清除

        // 解锁诗词达人
        unlockAchievement('poetry_master', 'Poetry Master', 'You answered all quiz questions correctly!');

        // 清除标记，防止下次刷新再次触发
        localStorage.removeItem('gameCompleted');

        // checkGuardianStatus 已经在 unlockAchievement 内部被调用了，
        // 所以如果之前已经有 history_master，守护者会自动排队解锁。
    }
});

// 关闭模态框
document.querySelector('.close').onclick = function () {
    document.getElementById('eventModal').style.display = 'none';
}

// 点击外部关闭模态框
window.onclick = function (event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// 键盘ESC键关闭模态框
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        document.getElementById('eventModal').style.display = 'none';
        closeAchievement(); // ESC也可以关闭成就弹窗
    }
});

// 新增：重置成就函数（用于调试）
function resetAchievements() {
    if (confirm(" Are you sure you want to reset ALL achievements? This cannot be undone.")) {
        localStorage.removeItem('mapleBridgeAchievements');
        localStorage.removeItem('gameCompleted');
        // 重置当前会话的时间轴点击记录
        clickedTimelineEvents.clear();
        alert("Achievements reset! Page will reload.");
        location.reload();
    }
}

let map = null;
let marker = null;

function openMap() {
    const mapSection = document.getElementById('map-section');
    
    // 1. 显示容器
    mapSection.style.display = 'block';
    
    // 2. 滚动到视图
    mapSection.scrollIntoView({ behavior: 'smooth' });

    // 3. 核心逻辑
    if (!map) {
        // 首次打开：延迟初始化以确保 DOM 渲染
        setTimeout(() => {
            initMap();
        }, 100);
    } else {
        // 再次打开：只需刷新尺寸
        map.resize();
        if (marker) {
            marker.setMap(map);
        }
    }
}

function closeMap() {
    document.getElementById('map-section').style.display = 'none';
}

function initMap() {
    const container = document.getElementById('container');
    
    if (map) return; // 防止重复初始化

    console.log("正在加载地图...");

    try {
        // 1. 创建地图实例 (直接使用枫桥精确坐标)
        map = new AMap.Map('container', {
            zoom: 16, // 稍微放大一点，看得更清
            center: [120.5683, 31.3093], // 枫桥景区精确坐标
            viewMode: '2D',
            resizeEnable: true
        });

        // 2. 创建大头钉 Marker
        marker = new AMap.Marker({
            position: [120.5683, 31.3093],
            map: map,
            icon: new AMap.Icon({
                size: new AMap.Size(25, 34),
                image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
                imageSize: new AMap.Size(25, 34)
            }),
            offset: new AMap.Pixel(-12, -34)
        });

        // 3. 添加标签
        marker.setLabel({
            content: '<div style="background-color: #fff; border: 1px solid #ccc; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; box-shadow: 0 2px 6px rgba(0,0,0,0.3); white-space: nowrap;">Maple Bridge</div>',
            direction: 'top',
            offset: new AMap.Pixel(0, -10)
        });

        // 4. 添加点击弹窗
        const infoWindow = new AMap.InfoWindow({
            content: "<div style='padding:5px;'><h3 style='margin:0 0 5px 0;'>Maple Bridge Scenic Area</h3><p style='margin:0; font-size:12px;'>Suzhou, Jiangsu Province</p></div>",
            offset: new AMap.Pixel(0, -30)
        });

        marker.on('click', function() {
            infoWindow.open(map, marker.getPosition());
        });

        // 5. 刷新
        map.resize();
        console.log("地图加载完成！");

    } catch (e) {
        console.error("地图错误:", e);
    }
}