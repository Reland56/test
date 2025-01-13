const modeSwitch = document.querySelector('.mode-switch');
const body = document.body;

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')) {
        modeSwitch.textContent = 'ライトモード切替';
    } else {
        modeSwitch.textContent = 'ダークモード切替';
    }
});

// フォーム送信のハンドリング
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // フォームデータの取得
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // フォーム送信時の処理（実際のプロジェクトではサーバーに送信）
    alert('お問い合わせありがとうございます。\n※これはデモです。実際には送信されません。');
    contactForm.reset();
});

// スキルタグのアニメーション
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseover', () => {
        tag.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseout', () => {
        tag.style.transform = 'scale(1)';
    });
});