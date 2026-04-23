// js/portfolio-script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 平滑滚动与导航高亮
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    // 点击导航链接平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, 
                    behavior: 'smooth'
                });
                
                // 点击后自动关闭移动端菜单
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });

    // 滚动时高亮当前导航项
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 2. 移动端菜单切换 (优化版)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // 切换 show 类，配合 CSS 中的 display 逻辑
            navMenu.classList.toggle('show');
            
            // 简单的动画效果可选
            if (navMenu.classList.contains('show')) {
                navMenu.style.display = 'flex';
            } else {
                // 延迟隐藏以配合动画（如果有）
                setTimeout(() => {
                    if (!navMenu.classList.contains('show')) {
                        navMenu.style.display = ''; // 恢复由 CSS media query 控制
                    }
                }, 300);
            }
        });
    }

    console.log("Portfolio Script Loaded");
});