document.addEventListener("DOMContentLoaded", function () {
    const checkForButton = setInterval(() => {
      const searchButton = document.getElementById("searchButton");
      if (searchButton) {
        clearInterval(checkForButton); // Stop checking once the button is found
        searchButton.addEventListener("click", function () {
          console.log("Search button clicked");
          window.location.href = "nextPage.html"; // Update with the actual next page URL
        });
      }
    }, 100); // Check every 100ms
  });