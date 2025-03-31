document.addEventListener("DOMContentLoaded", function () {
    // Get all input and textarea fields inside .form
    const inputs = document.querySelectorAll(".form input, .form textarea");
  
    inputs.forEach((input) => {
      input.addEventListener("keyup", handleInput);
      input.addEventListener("blur", handleInput);
      input.addEventListener("focus", handleInput);
    });
  
    function handleInput(event) {
      const input = event.target;
      const label = input.previousElementSibling; // Get the label before the input
  
      if (event.type === "keyup") {
        if (input.value === "") {
          label.classList.remove("active", "highlight");
        } else {
          label.classList.add("active", "highlight");
        }
      } else if (event.type === "blur") {
        if (input.value === "") {
          label.classList.remove("active", "highlight");
        } else {
          label.classList.remove("highlight");
        }
      } else if (event.type === "focus") {
        if (input.value !== "") {
          label.classList.add("highlight");
        }
      }
    }
  
    // Tab switching logic
    const tabs = document.querySelectorAll(".tab a");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Remove active class from all tabs
        tabs.forEach((t) => t.parentElement.classList.remove("active"));
  
        // Add active class to clicked tab
        this.parentElement.classList.add("active");
  
        const target = this.getAttribute("href"); // Get target ID (#signup or #login)
  
        // Hide all tab content
        document.querySelectorAll(".tab-content > div").forEach((div) => {
          div.style.display = "none";
        });
  
        // Show the selected tab with fade effect
        const targetElement = document.querySelector(target);
        targetElement.style.display = "block";
        targetElement.style.opacity = 0;
  
        let opacity = 0;
        const fadeIn = setInterval(() => {
          opacity += 0.1;
          targetElement.style.opacity = opacity;
          if (opacity >= 1) clearInterval(fadeIn);
        }, 50);
      });
    });
  });
  