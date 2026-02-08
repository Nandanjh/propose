document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const proposalContainer = document.getElementById("proposal-container");
    const celebrationContainer = document.getElementById("celebration-container");

    // 1. "No" Button Interaction (Run Away)
    const moveNoButton = () => {
        // Get window dimensions
        const width = window.innerWidth;
        const height = window.innerHeight;
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        // Calculate random position within valid bounds
        // We subtract button size to keep it fully on screen
        const newX = Math.random() * (width - btnWidth - 50); // 50px buffer
        const newY = Math.random() * (height - btnHeight - 50);

        // Apply new position
        noBtn.style.position = "fixed"; // Switch to fixed to move anywhere
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    };

    // Trigger move on hover (desktop) and touch (mobile)
    noBtn.addEventListener("mouseover", moveNoButton);
    noBtn.addEventListener("touchstart", moveNoButton); // For mobile users
    noBtn.addEventListener("click", moveNoButton); // Just in case they click fast!

    // 2. "Yes" Button Interaction
    yesBtn.addEventListener("click", () => {
        // Hide proposal, show celebration
        proposalContainer.classList.add("hidden");
        celebrationContainer.classList.remove("hidden");

        // Trigger Flower Rain
        createFlowerRain();
    });

    // 3. Flower Rain Function
    function createFlowerRain() {
        const flowers = ["🌸", "🌹", "🌺", "🌷", "💐", "💖"];
        const container = document.body;

        // Create 100 flowers over time
        let count = 0;
        const interval = setInterval(() => {
            const flower = document.createElement("div");
            flower.classList.add("flower");
            
            // Random Emoji
            flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
            
            // Random horizontal position (0 to 100vw)
            flower.style.left = Math.random() * 100 + "vw";
            
            // Random animation duration (2s to 5s)
            flower.style.animationDuration = Math.random() * 3 + 2 + "s";
            
            // Random font size
            flower.style.fontSize = Math.random() * 20 + 20 + "px";

            container.appendChild(flower);

            // Remove flower after animation to keep browser clean
            setTimeout(() => {
                flower.remove();
            }, 5000);

            count++;
            if (count > 100) clearInterval(interval); // Stop creating after 100
        }, 100);
    }
});