const square = document.querySelector(".team-codehelp");
const image = document.querySelector(".right-image");
const founder = document.querySelector(".founder");
// square.classList.remove("team-codehelp");

// Create the observer, same as before:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      square.classList.add("team-codehelp");
      image.classList.add("right-image-animatio");
      founder.classList.add("down-top");

      return;
    }

    square.classList.remove("team-codehelp");
    image.classList.remove("right-image-animatio");
    founder.classList.remove("down-top");
  });
});

observer.observe(square);
observer.observe(image);
observer.observe(founder);
