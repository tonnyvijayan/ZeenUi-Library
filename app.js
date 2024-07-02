// For Modal
const open = document.getElementById("show-modal");
const modal = document.getElementById("modal-container");
const close = document.getElementById("close-modal");

open.addEventListener("click", () => {
  modal.classList.add("show");
});
close.addEventListener("click", () => {
  modal.classList.remove("show");
});

// For Toast
const toast = document.getElementById("toastDiv");

const showToast = () => {
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 4000);
};
