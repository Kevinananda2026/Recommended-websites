// 获取页面元素
const coverPage = document.getElementById('coverPage');
const mainPage = document.getElementById('mainPage');
const startBtn = document.getElementById('startBtn');
const cards = document.querySelectorAll('.card');

// 点击“继续”按钮，切换到目录页
startBtn.addEventListener('click', () => {
    coverPage.classList.add('hidden');
    mainPage.classList.remove('hidden');
});

// 给每个卡片添加点击事件
cards.forEach(card => {
    card.addEventListener('click', () => {
        // 获取卡片上设置的 data-url 属性
        const url = card.getAttribute('data-url');
        // 跳转到对应的网址
        window.open(url, '_blank'); // '_blank' 表示在新标签页打开
    });
});