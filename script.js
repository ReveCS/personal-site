document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dropdownButton").addEventListener("click", function() {
        let dropdown = document.getElementById("dropdownContent");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    function selectOption(option) {
        document.getElementById("dropdownButton").innerText = option;
        let descriptionText = option === "Student" 
            ? "Currently an MEng CS candidate at Cornell Tech. Recent graduate of Stony Brook University studying Applied Mathematics and Statistics."
            : "Previous software engineer intern at North Atlantic Industries and data science intern at Outreach New York.";

        document.getElementById("description").innerText = descriptionText;

        document.getElementById("dropdownContent").style.display = "none"; // Hide dropdown
    }

    document.addEventListener("click", function(event) {
        let dropdown = document.getElementById("dropdownContent");
        if (!event.target.closest(".dropdown")) {
            dropdown.style.display = "none";
        }
    });

    // Expose function globally if needed
    window.selectOption = selectOption;
});