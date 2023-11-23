const submitButton = document.querySelector(".primary-button");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const nameOutput = document.getElementById("username");
const imageSlider = document.getElementById("slider");

submitButton.addEventListener("click", function (event) {
  if (nameInput.value.length !== 0 && emailInput.value.length !== 0) {
    alert("Selamat Datang");
  } else {
    nameOutput.textContent = nameInput.value;
  }
});

nameInput.addEventListener("input", function (event) {
  if (nameInput.value.length === 0) {
    nameOutput.textContent = "Nama tidak boleh kosong";
  }
});

emailInput.addEventListener("input", function (event) {
  if (emailInput.value.length === 0) {
    emailOutput.textContent = "Email tidak boleh kosong";
  }
});

const images = [
  "assets/gambar1.jpg",
  "assets/gambar2.jpg",
  "assets/gambar3.jpg",
  "assets/gambar4.jpg"
];

let i = 0;

function bannerSlide() {
  i += 1;
  if (i === images.length) {
    i = 0;
  }
  imageSlider.src = images[i];
}

// Otomatis menjalankan fungsi bannerSlide
setInterval(bannerSlide, 1000);

console.log("Cobain pull request");
