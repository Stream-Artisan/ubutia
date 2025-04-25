document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdown && dropdownMenu) {
    dropdown.addEventListener("mouseenter", function () {
      dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
      dropdownMenu.style.display = "none";
    });
  }
});
