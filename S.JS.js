// ======================================
// العناصر
// ======================================

const intro = document.getElementById("intro");
const mainPage = document.getElementById("mainPage");
const enterBtn = document.getElementById("enterBtn");
const hearts = document.getElementById("hearts");
const message = document.querySelector(".message");

// ======================================
// زر الدخول
// ======================================

enterBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {

        intro.style.display = "none";
        mainPage.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        typeWriter();

    },1200);

});

// ======================================
// تأثير الكتابة
// ======================================

const originalText = message.innerHTML;

message.innerHTML = "";

let index = 0;

function typeWriter(){

    const timer = setInterval(()=>{

        message.innerHTML += originalText.charAt(index);

        index++;

        if(index >= originalText.length){

            clearInterval(timer);

        }

    },25);

}

// ======================================
// إنشاء القلوب
// ======================================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize =
    (18 + Math.random()*30)+"px";

    heart.style.animationDuration =
    (4 + Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);

// ======================================
// تأثير عند تحريك الماوس
// ======================================

document.addEventListener("mousemove",(e)=>{

    const glow = document.createElement("div");

    glow.style.position="fixed";
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

    glow.style.width="8px";
    glow.style.height="8px";

    glow.style.borderRadius="50%";

    glow.style.background="#ffffff";

    glow.style.boxShadow="0 0 20px #ff66cc";

    glow.style.pointerEvents="none";

    glow.style.zIndex="9999";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.style.transition=".7s";
        glow.style.opacity="0";
        glow.style.transform="scale(4)";

    },10);

    setTimeout(()=>{

        glow.remove();

    },700);

});

// ======================================
// تشغيل فيديو واحد فقط
// ======================================

const videos = document.querySelectorAll("video");

videos.forEach(video=>{

    video.addEventListener("play",()=>{

        videos.forEach(v=>{

            if(v!==video){

                v.pause();

            }

        });

    });

});

// ======================================
// ظهور العناصر أثناء النزول
// ======================================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll(".video-card").forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(80px)";

    card.style.transition=".8s";

    observer.observe(card);

});