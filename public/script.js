let cursor = document.querySelector(".cursordelay")
let cursor2 = document.querySelector(".cursordelay2");
let cursor3 = document.querySelector(".cursordelay3");
let navbar = document.querySelector("#manv");
let icon = document.querySelector(".nav");
let NavTexts = document.querySelectorAll("#main a")
let board1 = document.querySelector(".board1");
let board2 = document.querySelector(".board2");
const QuoteDay = document.querySelector(".QuoteDay")
const QuoteAuther = document.querySelector(".QuoteAuther")

//Free Cursor
window.addEventListener("mousemove", function (detail) {
    cursor.style.top = detail.clientY - 23 + "px";
    cursor.style.left = detail.clientX - 23 + "px";
})

//Animated Menu
let isOpen = false;
icon.addEventListener("click", function () {
    if (!isOpen) {
        navbar.style.animation ="mobileMenuOpen .6s ease forwards";
    } 
    else {
        navbar.style.animation ="mobileMenuClose .6s ease forwards";
    }
    isOpen = !isOpen;
})
NavTexts.forEach(function (NavText) {
    NavText.addEventListener("click", function () {
        navbar.style.animation ="mobileMenuClose .6s ease forwards";
        isOpen = false; 
    })
})

//Discorver me button
let discoverbtn = document.querySelector(".discoverbtn");
let discovericon = document.querySelector(".discovericon");

discoverbtn.addEventListener("mouseover",function(){
    discoverbtn.classList.remove("w-29");
    discoverbtn.classList.add("w-32");
    discovericon.classList.remove("hidden");
})

discoverbtn.addEventListener("mouseout",function(){
    discoverbtn.classList.remove("w-32");
    discoverbtn.classList.add("w-29");
    discovericon.classList.add("hidden");
})

const developerQuotes = [
    { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" }
];

function GetQuote() {
    const randomIndex = Math.floor(Math.random() * developerQuotes.length);
    const data = developerQuotes[randomIndex];
    QuoteDay.textContent = data.quote;
    QuoteAuther.textContent = `-${data.author}`;
}

GetQuote();
