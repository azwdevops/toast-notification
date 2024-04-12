let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="fa fa-check-circle"></i> Successfully submitted';
let errorMsg =
  '<i class="fa fa-times-circle" aria-hidden="true"></i>Please fix the error';
let invalidMsg =
  '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>invalid input, check again';

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);
  if (message.includes("error")) {
    toast.classList.add("error");
  }
  if (message.includes("invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 2000);
}
