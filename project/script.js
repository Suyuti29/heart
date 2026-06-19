const text = `
Terima kasih karena sudah hadir dalam hidupku.

Mungkin aku tidak selalu bisa membuatmu tersenyum setiap hari,
tetapi aku selalu berusaha menjadi seseorang yang bisa kamu andalkan.

Bersamamu membuat hari-hariku terasa lebih indah.

Aku sayang kamu hari ini,
besok,
dan seterusnya ❤️
`;

let i = 0;

function openLetter(){

document.getElementById("opening").style.display="none";

document.getElementById("mainContent").classList.remove("hidden");

document.getElementById("music").play();

typeWriter();

}

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

const startDate = new Date("2024-01-01");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

document.getElementById("counter").innerHTML =
"💞 Sudah bersama selama <br><b>"+days+" Hari</b>";

}

setInterval(updateCounter,1000);

updateCounter();

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*4+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,300);