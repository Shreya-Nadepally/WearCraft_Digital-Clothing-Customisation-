document.querySelector(".cta-btn").addEventListener("click", () => {
  let input = document.querySelector(".search-box input").value;
  if (input.trim() !== "") {
    alert("Generating logo for: " + input);
  } else {
    alert("Please enter your business name");
  }
});



