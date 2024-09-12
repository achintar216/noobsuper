document.querySelectorAll('.menu-btn').forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;

    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });
});





function fileExists(url)
    {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
    }
    
    