// Select the dialog and button elements
var dialog = document.getElementById("subscribeDialog");
var closeBtn = document.getElementsByClassName("close")[0];
var actionButton = document.getElementById("SubscribeButton"); // New button to trigger the dialog

// Function to show the dialog
function showDialog() {
  if (!dialog.open) {
    dialog.showModal();
    dialog.setAttribute("aria-hidden", "false"); // Update ARIA attribute for accessibility
  }
}

// Show the dialog when the button is clicked
actionButton.addEventListener("click", showDialog);

// Close the dialog when the close button is clicked
closeBtn.onclick = function () {
  closeDialog();
};

// Close the dialog when clicking outside of it
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    closeDialog();
  }
});

// Close the dialog when the Escape key is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && dialog.open) {
    closeDialog();
  }
});

// Function to close the dialog
function closeDialog() {
  if (dialog.open) {
    dialog.close();
    dialog.setAttribute("aria-hidden", "true"); // Update ARIA attribute for accessibility
    actionButton.focus(); // Return focus to the button that opened the dialog
  }
}

// Function to handle subscription form
function handleFormSubmit(event) {
  event.preventDefault();
  var emailInput = document.getElementById("emailInput").value;
  if (validateEmail(emailInput)) {
    alert("Thank you for subscribing!");
    closeDialog();
  } else {
    alert("Please enter a valid email address.");
  }
}

// Function to handle contact form submission
function handleContactFormSubmit(event) {
  event.preventDefault();
  var name = document.getElementById("contactName").value;
  var email = document.getElementById("contactEmail").value;
  var message = document.getElementById("contactMessage").value;

  if (validateEmail(email)) {
    alert("Thank you for your message, " + name + "!");
    document.getElementById("contactForm").reset();
  } else {
    alert("Please enter a valid email address.");
  }
}

// Function to validate email
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
  navContainer.classList.toggle("active");

  // Animate hamburger lines
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navContainer.contains(e.target)) {
    navContainer.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.classList.remove("active");
  }
});
