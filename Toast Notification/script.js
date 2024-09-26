
let toastBox=document.querySelector(".toastBox");
let successMessage='<i class="fa-solid fa-circle-check" style="color: #ff0000;"></i> Successfully submitted.';
let errorMessage=" Please fix the error.";
let invalidMessage=" Invalid input, check again.";

function showToast(message){
    let toast=document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML= message;
    toastBox.appendChild(toast);
}