document.addEventListener('DOMContentLoaded', () => {
    
    const searchBar = document.querySelector('.search-bar');
    const videoCards = document.querySelectorAll('.video-card');

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();

        videoCards.forEach(card => {
            const title = card.querySelector('.video-title').textContent.toLowerCase();
            
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();

            const isLiked = button.classList.toggle('liked');

            button.textContent = isLiked ? '❤️ Liked' : '👍 Like';
            button.setAttribute('data-liked', isLiked);
        });
    });

    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoTitle = card.querySelector('.video-title').textContent;
            alert('Playing: ' + videoTitle);
        });
    });
    
    console.log('YouTube Clone enhancements loaded successfully!');
});
