// Select the modal and button elements
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var actionButton = document.getElementById("SubscribeButton"); // New button to trigger the modal

// Function to show the modal
function showModal() {
  if (modal.style.display !== "block") {
    modal.style.display = "block";
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
  modal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
