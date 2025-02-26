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
            descriptionElement.innerText = "Test your luck with some art exhibits from my favorite museum, The Metropolitan Museum of Art.";
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
        randomObject = Math.floor(Math.random() * 47581);
        console.log(randomObject)
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObject}`)
        .then(response => response.json())
        .then(data => {
            if (data.primaryImage) {
                // Clear previous image
                const artImage = document.getElementById("artImage");
                artImage.innerHTML = "";

                const img = document.createElement('img');
                img.src = data.primaryImage;
                img.alt = data.title;
                artImage.appendChild(img);

                const caption = document.createElement('p');
                caption.textContent = data.title;
                caption.style.fontStyle = 'italic';
                caption.style.marginTop = '8px';
                artImage.appendChild(caption);
            } else {
                console.log('No image available for this object.');
            }
        }
        )
        .catch(error => console.error("Error hitting API", error))
    });

    // Expose function globally if needed
    window.selectOption = selectOption;
});