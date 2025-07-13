const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("hamburger-icon");





// Toggle mobile menu
function toggleMobileMenu() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Toggle mobile menu for button click
function toggleMobileMenubtn() {
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const images = [
  'Assets/Hair Gallery/img1.jpg',
  'Assets/Hair Gallery/img2.jpg',
  'Assets/Hair Gallery/img3.jpg',
  'Assets/Hair Gallery/img4.jpg',
  'Assets/Hair Gallery/img5.jpg',
  'Assets/Hair Gallery/img6.jpg',
  'Assets/Hair Gallery/img7.jpg',
  'Assets/Hair Gallery/img8.jpg',
  'Assets/Hair Gallery/img9.jpg',
  'Assets/Hair Gallery/img10.jpg',
  'Assets/Hair Gallery/img11.jpg',
  'Assets/Hair Gallery/img12.jpg',
  'Assets/Hair Gallery/img13.jpg',
  'Assets/Hair Gallery/img14.jpg'
];


let currentIndex = 0;
const galleryImage = document.getElementById('gallery-image');

function showImage(index) {
  galleryImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
