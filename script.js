// Select the modal and button elements
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var actionButton = document.getElementById("SubscribeButton"); // New button to trigger the modal

// Function to show the modal
function showModal() {
  if (modal.style.display !== "block") {
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false"); // Update ARIA attribute for accessibility
    modal.focus(); // Set focus to the modal for keyboard navigation
  }
}

// Show the modal after a delay when the page loads
window.onload = function () {
  setTimeout(showModal, 2000); // Show modal after 2 seconds
};

// Show the modal when the button is clicked
actionButton.addEventListener("click", showModal);

// Close the modal when the close button is clicked
closeBtn.onclick = function () {
  closeModal();
};

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Close the modal when the Escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});

// Function to close the modal
function closeModal() {
  if (modal.style.display === "block") {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true"); // Update ARIA attribute for accessibility
    actionButton.focus(); // Return focus to the button that opened the modal
  }
}
