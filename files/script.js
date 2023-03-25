
            // Get the coin image element
            const coinImage = document.getElementById('coinImage');

            // Change the coin image randomly on click with flip animation
            coinImage.addEventListener('click', function () {
                // Flip out the coin image
                coinImage.classList.remove('animate__flipInX');
                coinImage.classList.add('animate__flipOutX');

                // Wait for flip animation to complete
                setTimeout(() => {
                    const randomIndex = Math.floor(Math.random() * images.length);
                    coinImage.src = images[randomIndex];

                    // Flip in the new coin image
                    coinImage.classList.remove('animate__flipOutX');
                    coinImage.classList.add('animate__flipInX');
                }, 500);
            });