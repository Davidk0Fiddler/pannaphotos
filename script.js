const images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png"
];

timeSpan = 5000;

// Első galéria elem

const gallery1 = document.getElementById("galeria-item1");
let index1 = 0;

// kezdő kép
gallery1.style.backgroundImage = `url(${images[index1]})`;

setInterval(() => {
  index1 = (index1 + 1) % images.length;
  gallery1.style.backgroundImage = `url(${images[index1]})`;
}, timeSpan);


// Második galéria elem

const gallery2 = document.getElementById("galeria-item2");
let index2 = 1;

// kezdő kép
gallery2.style.backgroundImage = `url(${images[index2]})`;

setInterval(() => {
  index2 = (index2 + 1) % images.length;
  gallery2.style.backgroundImage = `url(${images[index2]})`;
}, timeSpan);


// Harmadik galéria elem

const gallery3 = document.getElementById("galeria-item3");
let index3 = 2;

// kezdő kép
gallery3.style.backgroundImage = `url(${images[index3]})`;

setInterval(() => {
  index3 = (index3 + 1) % images.length;
  gallery3.style.backgroundImage = `url(${images[index3]})`;
}, timeSpan);




// Navigation menu

document.getElementById("galeria-btn").addEventListener("click", function() {
    const target = document.getElementById("galeria-section");
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("velemeny-btn").addEventListener("click", function() {
    const target = document.getElementById("velemeny-section");
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("rolam-btn").addEventListener("click", function() {
    const target = document.getElementById("rolam-section");
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("kapcsolat-btn").addEventListener("click", function() {
    const target = document.getElementById("kapcsolat-section");
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("hero-kapcsolat-btn").addEventListener("click", function() {
    const target = document.getElementById("kapcsolat-section");
    target.scrollIntoView({ behavior: 'smooth' });
});





document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  const subject = encodeURIComponent("Kapcsolatfelvétel: " + name);
  const body = encodeURIComponent(`Név: ${name}\nEmail: ${email}\n\nÜzenet:\n${message}`);

  window.location.href = `mailto:pannaphotosofficial?subject=${subject}&body=${body}`;
});

document.getElementById('facebook-btn').addEventListener('click', function() {
  window.location.href = 'https://www.facebook.com/LiebPanna11'
});

document.getElementById('instagram-btn').addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/panna_photos2025'
});


function displayDropdownMenu(){
  var x = document.getElementById('navigation-items');
  if (x.className === "navigation-items") {
    x.className += " opened";
    document.getElementById('heroh1').style.marginTop = '30vh' 
  } else {
    x.className = "navigation-items";
    document.getElementById('heroh1').style.marginTop = '10vh' 

  }
}

document.addEventListener("keydown", function(e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
        alert("Fejlesztői eszközök letiltva!");
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        alert("Fejlesztői eszközök letiltva!");
    }
    // Ctrl+Shift+J (Chrome konzol)
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        alert("Fejlesztői eszközök letiltva!");
    }
    // Ctrl+U (forrás megtekintése)
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        alert("Forrás megtekintése letiltva!");
    }
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("Jobb klikk letiltva!");
});