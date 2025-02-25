document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dropdownButton").addEventListener("click", function() {
        let dropdown = document.getElementById("dropdownContent");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    function selectOption(option) {
        document.getElementById("dropdownButton").innerText = option;
        let descriptionElement = document.getElementById("description");
        let artButton = document.getElementById("artButton");

        if (option === "Student") {
            descriptionElement.innerText = "Currently an MEng CS candidate at Cornell Tech. Recent graduate of Stony Brook University studying Applied Mathematics and Statistics.";
            artButton.classList.add("hidden"); // Hide art button
        } else if (option === "Developer") {
            descriptionElement.innerText = "Previous Software Engineer Intern at North Atlantic Industries and Data Science Intern at Outreach New York.";
            artButton.classList.add("hidden"); // Hide art button
        } else if (option === "Art Enthusiast") {
            descriptionElement.innerText = "Test your luck with some art from my favorite museum, Metropolitan Museum of Art";
            artButton.classList.remove("hidden"); // Show art button
        }
        
        document.getElementById("dropdownContent").style.display = "none"; // Hide dropdown
    }

    document.addEventListener("click", function(event) {
        let dropdown = document.getElementById("dropdownContent");
        if (!event.target.closest(".dropdown")) {
            dropdown.style.display = "none";
        }
    });

    document.getElementById("artButton").addEventListener("click", function(event) {
        
    });

    // Expose function globally if needed
    window.selectOption = selectOption;
});