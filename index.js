const textareaEL = document.getElementById("textarea");
const totalcontainerEL = document.getElementById("Total-container");
const remainingcontainerEL = document.getElementById("Remaining-container");


textareaEL.addEventListener("keyup", () => {
    updatecounter();
});
updatecounter();

function updatecounter() {
    totalcontainerEL.innerText = textareaEL.value.length;
    remainingcontainerEL.innerText = textareaEL.getAttribute("maxlength") - textareaEL.value.length;
};

