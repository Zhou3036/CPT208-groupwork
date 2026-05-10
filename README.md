# Echoes of Maple Bridge 🍁

**CPT208 Human-Centric Computing | Coursework Project** **Design Theme:** Digital Heritage & Play (Topic A2: Suzhou Grand Canal - Maple Bridge)

[cite_start]Welcome to the official repository for **Echoes of Maple Bridge**, a playful, WebVR-ready application designed to provide a frictionless, human-centric heritage experience for tourists and scholars alike[cite: 1, 2].

---

## 🔗 Project Links
* **Live Prototype URL:** [点击此处访问你的项目链接] (e.g., Netlify/Vercel)
* **Process Portfolio:** [点击此处访问你的 GitHub Pages]
* **Demo Video:** [点击此处查看 2 分钟 CHI-style 演示视频]

---

## 👥 Team Members (Group A2-6)

* **Lewei Zhou** (ID: 2361138) — *Frontend Lead & Researcher*
* **Xingjian Wu** (ID: 2361742) — *UI/UX Designer & Lead Prototyper*
* **Wenbo Xu** (ID: 2361657) — *Full-stack Developer*
* **Shaohui Shen** (ID: 2362476) — *Content & QA Specialist*

---

## 🎯 Core Playful Features
Our system implements three mandatory "Must-Have" playful features to address the gaps identified in our research:

1.  **Frictionless WebVR Roaming:** A browser-based 360° panoramic environment (via A-Frame) that eliminates "App Friction," allowing tourists to explore the night mooring scene instantly.
2.  **Dynamic Historical Timeline:** An interactive UI slider enabling users to toggle between Tang, Ming, and Modern era reconstructions with verified academic citations for scholarly accuracy.
3.  **Interactive Quiz & Achievement System:** A gamified module that transforms dense history into digestible challenges, rewarding users with "Heritage Medals" to foster active participation.

---

## 🛠️ Technology Stack
* **Frontend:** HTML5, CSS3 (Mobile-first, "One-handed UI" optimization), JavaScript (ES6+).
* **Immersive Tech:** A-Frame & WebVR for zero-install immersive experiences.
* **APIs:** Gaode Map API (AMap) for high-precision onsite navigation.
* [cite_start]**Deployment:** Netlify (System) and GitHub Pages (Portfolio)[cite: 78, 81].

---

## 🤖 AI Disclosure & Academic Integrity
[cite_start]In compliance with the **University Academic Integrity Policy** and CPT208 AI permissions[cite: 16, 22, 28, 40]:

### 1. Permitted Substantive Use (System & Video)
* **Vibe Coding (Gemini 1.5 Pro [6]):** Used to scaffold responsive CSS layouts, implement interactive JavaScript logic for the accordion panels, and troubleshoot Git SSL handshake issues.
* **Persona Drafting (Doubao [7]):** Used to generate initial user persona drafts (Li Ming and Chen Min) based on our primary field research data.

### 2. Mandatory Verification & Logs
* [cite_start]**Vibe Coding Logs:** All primary prompts and AI-generated snippets are documented in the [**/ai-logs**](./ai-logs) folder[cite: 209].
* **Human-in-the-Loop (HIL):** Every AI-generated component was manually verified to ensure it meets **WCAG accessibility requirements** and historical accuracy.

> [cite_start]**Note:** Core design logic, project motivation, and user research remain the original work of Group A2-6[cite: 27, 36, 76].

---

## 🏗️ System Architecture
The system follows a three-tier human-centric architecture:
1.  **Interaction Layer:** Responsive UI featuring high-contrast modes for outdoor reading.
2.  **Logic Layer:** JS-driven timeline and gamification states managed via Local Storage.
3.  **Data Layer:** External LBS (AMap API) and 3D asset delivery (.glb format).

---

## 📚 References

[1] J. Tromp *et al.*, "Designing and Evaluating VR Cultural Heritage Applications Through Human–Computer Interaction Methods: Insights from Ten International Case Studies," *Appl. Sci.*, vol. 15, no. 14, Art. no. 7973, 2025. doi: 10.3390/app15147973.

[2] Y. Lu, G. Mi, H. Lu, and Y. Wang, "Immersive Technologies in Built Heritage Spaces: Understanding Tourists' Continuance Intention Toward Sustainable AR and VR Applications at the Terracotta Warriors Museum," *Buildings*, vol. 15, no. 19, p. 3481, Sep. 2025. doi: 10.3390/buildings15193481.

[3] X. Su, X. Huang, and X. Sun, "Multi-modal digital exhibition hall design integrating virtual reality, augmented reality and artificial intelligence toward immersive interaction and intelligent cultural services," *Eng. Appl. Artif. Intell.*, vol. 176, p. 114712, 2026.

[4] S. Zhang, X. Xie, D. Lyu, and Y. Shu, "KiteMR: An Interactive Mixed Reality System for Preserving and Experiencing Traditional Chinese Kite Craftsmanship," *Int. J. Hum.-Comput. Interact.*, vol. 41, no. 22, pp. 14321-14342, 2025.

[5] A. P. Madathil, X. Luo, Q. Liu, C. Walker, R. Madarkar, and Y. Qin, "A review of explainable artificial intelligence in smart manufacturing," *Int. J. Prod. Res.*, vol. 63, no. 23, pp. 8654-8697, 2025. doi: 10.1080/00207543.2025.2513574.

[6] Gemini (Google), version 1.5 Pro, accessed on 2026-05-10, available at [https://gemini.google.com](https://gemini.google.com). Used for vibe coding the responsive image gallery and refining the academic tone.

[7] Doubao (ByteDance), version 1.0, accessed on 2026-04-24, available at [https://www.doubao.com/](https://www.doubao.com/). Used for generating initial user persona drafts based on field research insights.

---
*Developed for CPT208 Human-Centric Computing @ Xi'an Jiaotong-Liverpool University.*