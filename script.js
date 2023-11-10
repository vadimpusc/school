function myFunction() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
  }
  
  // Menu 

  function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    var overlay = document.getElementById('overlay');
    overlay.classList.toggle('active');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
}

