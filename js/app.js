const toggleBTN = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggleBTN.addEventListener("click", () => {
  toggleBTN.classList.toggle("active");
  navigation.classList.toggle("active");
});
