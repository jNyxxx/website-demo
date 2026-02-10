// --- PART 1: MUSIC & SCROLLING ---

window.onload = function() {
    const music = document.getElementById('bg-music');
    
    // Attempt to play immediately
    music.play().catch(error => {
        console.log("Browser blocked autoplay. Waiting for interaction.");
        
        // Fallback: Play on the very first click anywhere on the page
        document.body.addEventListener('click', () => {
            music.play();
        }, { once: true });
    });
};

// Handle "Enter Museum" Button
const enterBtn = document.querySelector('.enter-btn');
enterBtn.addEventListener('click', () => {
    // Also try to play music here just in case
    document.getElementById('bg-music').play();
    
    // Scroll
    document.querySelector('.museum-container').scrollBy({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
    });
});

// --- PART 2: NAUGHTY BUTTON LOGIC ---
let yesScale = 1;
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.getElementById('noBtn');

function dodgeButton() {
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// --- PART 3: FLOWER REVEAL ---

function startFlower() {
    // 1. Hide Museum
    const museum = document.getElementById('museum');
    museum.style.opacity = '0';
    
    // 2. Reveal Flowers
    const flowerContainer = document.getElementById('flower-container');
    
    setTimeout(() => {
        museum.style.display = 'none';
        
        // Start Animations
        flowerContainer.classList.remove('not-loaded');
        flowerContainer.classList.add('active');
        
    }, 1000);
}