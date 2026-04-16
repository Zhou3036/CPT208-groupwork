// js/script.js
function showEventDetail(eventId) {
    let detailContent = '';
    
    switch(eventId) {
        case 'zhangji':
            detailContent = `
                <h2>Tang Dynasty - Zhang Ji's Poem</h2>
                <p><strong>Date:</strong> Year 642</p>
                <p><strong>Significance:</strong> Zhang Ji wrote the famous poem "Mooring by Maple Bridge at Night" (枫桥夜泊), which includes the lines:</p>
                <blockquote>
                    "Moon sets, crows cry, frost fills all around<br>
                    River maples, fishing lights, melancholy thoughts bind<br>
                    Outside Hanshan Temple, at midnight, the bell rings<br>
                    Drift to the boat - mooring by Maple Bridge."
                </blockquote>
                <p>This poem made Maple Bridge one of the most famous bridges in Chinese literature and attracted countless visitors over the centuries.</p>
            `;
            break;
            
        case 'mingdynasty':
            detailContent = `
                <h2>Ming Dynasty Commerce</h2>
                <p><strong>Period:</strong> Ming Dynasty (1368-1644)</p>
                <p>During the Ming Dynasty, Maple Bridge was at the heart of commercial activity along the Grand Canal. The area served as a crucial stopover point for merchants transporting goods between northern and southern China.</p>
                <p>The bridge itself became a symbol of economic prosperity, with markets, tea houses, and warehouses clustering around its approaches. The daily life of merchants, travelers, and local residents created a vibrant cultural scene.</p>
                <p>Archaeological evidence suggests that the current stone structure of the bridge dates from this period, replacing earlier wooden versions.</p>
            `;
            break;
            
        case 'qingdynasty':
            detailContent = `
                <h2>Qing Dynasty Prosperity</h2>
                <p><strong>Period:</strong> Qing Dynasty (1644-1912)</p>
                <p>The Qing period saw continued importance for Maple Bridge, both commercially and culturally. Elaborate pavilions and viewing platforms were constructed, making it a destination for scholars and poets.</p>
                <p>Emperor Kangxi and Emperor Qianlong both visited the area during their southern tours, further enhancing the bridge's prestige. Local artisans developed specialized crafts related to the bridge's cultural significance.</p>
                <p>The area maintained its role as a cultural landmark, inspiring numerous paintings and literary works beyond Zhang Ji's original poem.</p>
            `;
            break;
            
        case 'warperiod':
            detailContent = `
                <h2>War Period Damage</h2>
                <p><strong>Date:</strong> Year 1937</p>
                <p>During the Second Sino-Japanese War, Maple Bridge and its surrounding area suffered significant damage. Bombing raids and military occupation disrupted the peaceful atmosphere that had characterized the site for centuries.</p>
                <p>Many historic buildings near the bridge were destroyed or severely damaged. The once-thriving commercial district was largely abandoned as people fled the area. Some cultural artifacts were lost forever during this turbulent period.</p>
                <p>The bridge itself survived but showed scars from the conflict that remained visible for decades.</p>
            `;
            break;
            
        case 'restoration':
            detailContent = `
                <h2>Restoration Efforts</h2>
                <p><strong>Date:</strong> Year 1980</p>
                <p>A comprehensive restoration project began in 1980 to preserve Maple Bridge and restore its historical appearance. Archaeological surveys guided the restoration process, ensuring authenticity.</p>
                <p>The project included reinforcing the stone structure, restoring traditional architectural features, and creating protective barriers against environmental damage. Historical records and remaining fragments were carefully studied to guide reconstruction decisions.</p>
                <p>Special attention was paid to preserving elements from different historical periods while maintaining structural integrity for future generations.</p>
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