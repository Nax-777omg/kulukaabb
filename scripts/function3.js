window.onload = function() {
    var messageDiv = document.getElementById("message");
    var closeButton = document.getElementById("close-btn");
    var overlayDiv = document.getElementById("overlay");
    
    closeButton.addEventListener("click", function() {
      messageDiv.style.display = "none";
      overlayDiv.style.display = "none";
    });
  }