function toggleDetails() {
    var details = document.getElementById("details");
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }


  }

  function closeDetails() {
    var details = document.getElementById("details");
    details.style.display = "none";
  }