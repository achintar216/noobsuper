document.querySelectorAll('.menu_btn').forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded for accessibility
    button.setAttribute('aria-expanded', !isExpanded);

    // Handle opening and closing the submenu
    if (!isExpanded) {
      submenu.style.display = 'block'; // Show the menu
      submenu.style.maxHeight = submenu.scrollHeight + 'px'; // Expand the height to fit content
    } else {
      submenu.style.maxHeight = '0'; // Collapse the menu
      submenu.addEventListener('transitionend', () => {
        if (submenu.style.maxHeight === '0px') {
          submenu.style.display = 'none'; // Hide after collapse
        }
      }, { once: true }); // Ensure this listener runs only once
    }
  });
});