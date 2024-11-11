document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const button = document.getElementById('get-joke');
    const likeButton = document.getElementById('like');
    const dislikeButton = document.getElementById('dislike');
    const copyButton = document.getElementById('copy-joke');
    const stars = document.querySelectorAll('.star');
    const ratingResult = document.getElementById('rating-result');

    button.addEventListener('click', getJoke);
    likeButton.addEventListener('click', () => alert('You liked this joke!'));
    dislikeButton.addEventListener('click', () => alert('You disliked this joke.'));
    copyButton.addEventListener('click', copyJokeToClipboard);

    function getJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = `${data.setup} - ${data.punchline}`;
            })
            .catch(error => {
                jokeElement.textContent = 'Oops! Something went wrong.';
            });
    }

    function copyJokeToClipboard() {
        const jokeText = jokeElement.textContent;
        navigator.clipboard.writeText(jokeText).then(() => {
            alert('Joke copied to clipboard!');
        }).catch(error => {
            alert('Failed to copy joke.');
        });
    }

    // Add event listeners to each star for rating functionality
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-rating');
            ratingResult.textContent = `You rated this joke: ${rating} star(s)!`;
            
            // Highlight the selected stars
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
        });
    });
});
