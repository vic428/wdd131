// Set copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Filtering functionality
const navLinks = document.querySelectorAll(".navigation a");
const figures = document.querySelectorAll("main figure");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    const filter = this.textContent.toLowerCase();

    figures.forEach(fig => {
      const category = fig.getAttribute("data-category");

      if (filter === "home" || filter === "") {
        fig.style.display = "block";
      } else {
        fig.style.display = category === filter ? "block" : "none";
      }
    });
  });
});

// Hamburger toggle 
const menuButton =  document.getElementById('menu-button');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('show');

    //Toggle icon
    if(navigation.classList.contains('show')){
        menuButton.textContent = '✖'; // X icon
    } else {
        menuButton.textContent = '☰'; // Hamburger icon
    }
});
