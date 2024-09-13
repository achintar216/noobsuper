
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

//this is a gpt code //
var modal = document.getElementById("myModal");


var img = document.getElementById("demoimg");


var closeBtn = document.getElementsByClassName("close")[0];


img.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//this is a gpt code ^^//