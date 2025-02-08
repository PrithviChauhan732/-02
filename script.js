document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class "image1"
  var images = document.querySelectorAll(".image1");

  // Function to set random position for an element
  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  // Set random position for each image
  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

function angry() {
  // get all image with class image1 and change the src
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/sad1.gif";

  absImg.style.display = "flex";

  images.forEach(function (image) {
    image.src = "./resources/sad.gif";
  });
}
function happy() {
  // get all image with class image1 and change the src
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  absImg.style.display = "flex";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/happy3.gif";

  images.forEach(function (image) {
    image.src = "./resources/heart.gif";
  });
}

const sadCat = [
  "https://i.redd.it/i-keep-seeing-this-angry-cat-meme-does-anyone-know-what-v0-0o96ygkg9jw91.jpg?width=1080&format=pjpg&auto=webp&s=8a7220f58ae5e5ecbef518367d48b96f7327e06d",
  "https://imgflip.com/s/meme/Cute-Cat.jpg",
  "https://i.pinimg.com/originals/ea/0b/36/ea0b36dfa8e14f15b515bc469070de06.jpg",
  "https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg",
  "https://i.ytimg.com/vi/eXwZMAz9Vh8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAVeD81lYf_ygdk1dICZMM1AtEY0w",
  "resources/PHOTO-2025-02-08-20-33-19.jpg",
];

const blackmail = [
  "Chaayos ka cake treat!?",
  "Will eat you",
  "Paani mai fenk doonga",
  "Regret mat karna phir",
  "HUHUHUHU",
  "Hn bhi bol de ab",
];

function normal() {
  var absImg = document.getElementById("absImg");
  absImg.style.display = "none";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/happy1.gif";
}

let counter = 0;

function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  let model = document.getElementById("model");
  model.style.display = "none";
  setTimeout(() => {
    model.style.display = "flex";
    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");
    modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    modelText.innerText =
      blackmail[Math.floor(Math.random() * blackmail.length)];
  }, 100);
}

function yes() {
  if (counter >= 3) {
    let model = document.getElementById("model2");
    let model2 = document.getElementById("model");
    let sadMusic = document.getElementById("sadMusic");
    model2.style.display = "none";
    let happyMusic = document.getElementById("happyMusic");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
    }, 100);
    const wedate = document.getElementById("wedate");
    const btns = document.getElementById("btns");
    btns.style.display = "none";
    wedate.innerText = "That was all for today. All for you :) 😊";
  } else {
    alert("Kuch to bhao khaa. Sidhe hn bhi mat bol.");
  }
}

function ly2() {
  let model = document.getElementById("model2");
  model.style.display = "none";
  let model2 = document.getElementById("model");
  model2.style.display = "none";
}
