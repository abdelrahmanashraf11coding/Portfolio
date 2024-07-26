function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  var toggleButton = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Light Mode";
  } else {
      toggleButton.textContent = "Dark Mode";
  }
}

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer',  'Graphic Design', 'Web Designer','UI/UX Design','YouTuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
