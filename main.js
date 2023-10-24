// Selecting all sections with class of section

const sections = document.querySelectorAll(".section");
const firstEl = document.getElementById("first");
const secondEl = document.getElementById("second");
const thiredEl = document.getElementById("thired");
const fourthEl = document.getElementById("fourth");

console.log("hello" + first);
// console.log(section);

// on click event for each section
sections.forEach((section) => {
  section.addEventListener("click", () => {
    // remove active class from all another section

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    //  add it to the selected section

    section.classList.add("active");
  });
});

// first.addEventListener('click', function myFunction() {
// } );

firstEl.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ecf7fc";
});

secondEl.addEventListener("click", () => {
  document.body.style.backgroundColor = "#c8f6c8";
});

thiredEl.addEventListener("click", () => {
  document.body.style.backgroundColor = "#effcef";
  // .light-blue
});

fourthEl.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffffe0";
});
