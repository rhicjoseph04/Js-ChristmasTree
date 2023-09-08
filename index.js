var treeContainer = document.getElementById("treeContainer");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var isBlinking = false;
var blinkInterval = null;
var currentColorIndex = 0;
var lightColors = ["#F00", "#0F0", "#00F"]; // Red, Green, Blue


// Function to generate the Christmas tree content with blinking lights
function generateTreeContent() {
    var treeContent = "<div style='font-family:monospace;text-align:center;color:" + lightColors[currentColorIndex] + "'>";
    for (var i = 1; i <= 25; i++) {
        for (var j = 1; j <= i; j++) {
            treeContent += "<span class='blinking-light'>rj</span>"; // Use "o" for blinking
            treeContent += "<span>#</span>"; // Use "#" for non-blinking
        }
        treeContent += "<br>";
    }
    treeContent += "</div>";
    return treeContent;
}

function startBlinking() {
    if (!isBlinking) {
        isBlinking = true;
        blinkInterval = setInterval(function () {
            currentColorIndex = (currentColorIndex + 1) % lightColors.length;
            treeContainer.innerHTML = generateTreeContent();
        }, 500); // Blink every 500ms
     
    }
}

startButton.addEventListener("click", startBlinking);

stopButton.addEventListener("click", function () {
    if (isBlinking) {
        clearInterval(blinkInterval);
        isBlinking = false;
        treeContainer.innerHTML = generateTreeContent(); // Reset to non-blinking state
     
    }
});

// Initial tree content (not blinking)
treeContainer.innerHTML = generateTreeContent();


document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        item.addEventListener('slid.bs.carousel', () => {
            const audioElements = document.querySelectorAll(
                'audio');
            audioElements.forEach(audio => {
                audio.pause();
            });
        });
    });
});

// Media Query for Responsiveness
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaQueryChange(event) {
    if (event.matches) {
        // Apply responsive changes for screens <= 768px width
        // For example, you can hide or modify certain elements
    } else {
        // Revert changes for screens > 768px width
    }
}

mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery); // Call the function to handle initial state

