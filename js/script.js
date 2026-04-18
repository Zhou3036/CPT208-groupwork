// js/script.js

function showEventDetail(eventId) {
    let detailContent = '';
    
    switch(eventId) {
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

// 关闭模态框
document.querySelector('.close').onclick = function() {
    document.getElementById('eventModal').style.display = 'none';
}

// 点击外部关闭模态框
window.onclick = function(event) {
    const modal = document.getElementById('eventModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// 键盘ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('eventModal').style.display = 'none';
    }
});