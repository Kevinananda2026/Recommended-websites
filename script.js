// 获取页面元素
const coverPage = document.getElementById('coverPage');
const mainPage = document.getElementById('mainPage');
const startBtn = document.getElementById('startBtn');
const cards = document.querySelectorAll('.card');

// 获取音乐元素
const bgm = document.getElementById('bgm');

// 点击“继续”按钮
startBtn.addEventListener('click', () => {
    coverPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
    
    // 点击继续后，开始播放音乐
    bgm.play().catch(e => console.log("播放被阻止:", e));
});

// 给每个卡片添加点击事件
cards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.open(url, '_blank');
    });
});