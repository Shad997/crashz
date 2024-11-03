// Function to generate random "Cote" between 3.5X and 4.6X
function generateCote() {
  return (Math.random() * (4.6 - 3.5) + 3.5).toFixed(2) + "X";
}

// Function to generate random "Assurance" between 1.8X and 2.4X
function generateAssurance() {
  return (Math.random() * (2.4 - 1.8) + 1.8).toFixed(2) + "X";
}

// Function to generate random time interval between 2 and 3 minutes
function generateTimeInterval() {
  return Math.floor(Math.random() * (3 - 2 + 1)) + 2; // 2 or 3 minutes
}

// Function to format time according to user's local time zone
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Function to generate and display the next signal
function generateSignal() {
  let currentTime = new Date();
  let interval = generateTimeInterval();
  currentTime.setMinutes(currentTime.getMinutes() + interval);

  let cote = generateCote();
  let assurance = generateAssurance();

  document.getElementById("time").textContent = formatTime(currentTime);
  document.getElementById("cote").textContent = cote + "+";
  document.getElementById("assurance").textContent = assurance;
}

// Login logic
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === "admin123" && password === "password123") {
      // Change password as needed
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("signalContainer").style.display = "block";
    } else {
      document.getElementById("message").textContent =
        "Invalid credentials. Please try again.";
    }
  });
