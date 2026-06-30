// دکمه شروع

function startReading() {

    document.querySelector(".message").scrollIntoView({

        behavior: "smooth"

    });

}


// ظاهر شدن متن‌ها هنگام اسکرول

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.25

});

hiddenElements.forEach(section => {

    observer.observe(section);

});


// افکت تایپ برای عنوان صفحه

const title = document.querySelector(".hero h1");

const text = title.innerText;

title.innerText = "";

let i = 0;

function typing() {

    if (i < text.length) {

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 120);

    }

}

typing();


// ستاره‌های ریز اضافه

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("span");

    star.style.position = "absolute";

    star.style.width = Math.random() * 3 + "px";

    star.style.height = star.style.width;

    star.style.background = "white";

    star.style.borderRadius = "50%";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    stars.appendChild(star);

}
for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration = (Math.random()*3+1)+"s";

    document.body.appendChild(star);

}
const music=document.getElementById("music");

const button=document.querySelector(".music-btn");

let playing=false;

function toggleMusic(){

if(!playing){

music.play();

button.innerHTML="⏸️";

playing=true;

}else{

music.pause();

button.innerHTML="🎵";

playing=false;

}

}