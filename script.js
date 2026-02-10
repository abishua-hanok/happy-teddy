const btn = document.getElementById("surpriseBtn");
const text = document.getElementById("surpriseText");

btn.addEventListener("click", () => {
  text.style.display = "block";
  btn.innerText = "I Love You 🤍";
  btn.disabled = true;
});
