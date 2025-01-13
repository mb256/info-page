// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const sentences = [
        "Prvni velke moudro",
        "Druhe velke moudro",
        "Treti velke moudro",
        "Ctvrte velke moudro"
    ];

    const textDisplay = document.getElementById('text-display');
    let currentSentenceIndex = 0;

    async function displayText() {
        try {
            while (true) {
                const currentSentence = sentences[currentSentenceIndex];
                
                // Display letters one by one
                for (let i = 0; i <= currentSentence.length; i++) {
                    if (textDisplay) {
                        textDisplay.textContent = currentSentence.slice(0, i);
                        await new Promise(resolve => setTimeout(resolve, 30));
                    }
                }

                // Keep the full sentence displayed for 3 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));

                // Clear the text
                if (textDisplay) {
                    textDisplay.textContent = '';
                }

                // Move to next sentence
                currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // Start the animation
    displayText();
});
