// Complex Menu Button Toggle Logic with Simple Animations and Accessibility
document.querySelectorAll('.menu-btn').forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;

    // Toggle aria-expanded for accessibility
    button.setAttribute('aria-expanded', !isExpanded);

    // Toggle display with basic animation (max-height for smooth dropdown)
    if (!isExpanded) {
      submenu.style.display = 'block';
      submenu.style.maxHeight = submenu.scrollHeight + 'px'; // Smooth dropdown
    } else {
      submenu.style.maxHeight = '0';
      setTimeout(() => {
        submenu.style.display = 'none';
      }, 300); // Wait for transition to complete
    }
  });
});

// Modal Logic with Multiple Image Support
var modal = document.getElementById("myModal");
var modalImg = document.querySelector(".poster");
var closeBtn = document.getElementsByClassName("close")[0];

// Adding click event to all images with the class 'demoimg' for dynamic modal
document.querySelectorAll('.demoimg').forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;  // Set clicked image as modal image
    modalImg.alt = this.alt;  // Set alt text for accessibility
  });
});

// Close modal when 'X' button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close modal on outside click
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Close modal on pressing 'Esc' key
window.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});