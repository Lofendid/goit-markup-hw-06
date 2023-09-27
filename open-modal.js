document.addEventListener("DOMContentLoaded", function () {
// Your JavaScript code here

// Add your backdrop class name here 
// (instead of ".backdrop", dont forget to use a '.' before class name)

const modal = document.querySelector(".backdrop");

//Add your hero button class name here

const openModalBtn = document.querySelector(".hero-button");

//Add your close button modal class here

const closeModalBtn = document.querySelector(".close-btn");

// Function to open the modal
function openModal() {
    modal.classList.add("is-open");
}

// Function to close the modal
function closeModal() {
    modal.classList.remove("is-open");
}

// Function to close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Function to close modal when pressing the 'Esc' key
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Attach click event listener to open button
openModalBtn.addEventListener("click", openModal);

// Attach click event listener to close button
closeModalBtn.addEventListener("click", closeModal);

});