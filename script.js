function toggleMenu() {
    const menu=document.querySelector(".menu-links")
    const icon=document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.querySelectorAll('.slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;
  
    // Function to show the next image
    function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }
  
    // Set the first image to be visible
    images[currentIndex].classList.add('active');
  
    // Change image every 3 seconds
    setInterval(showNextImage, 3000);
  });