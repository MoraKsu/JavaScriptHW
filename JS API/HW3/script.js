document.addEventListener('DOMContentLoaded', function() {
    const UNSPLASH_API_KEY = 'XTuPKsuysLok-j3Vs1_UmIviVmramr-rsCrZIskkwfw';
    const UNSPLASH_URL = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}`;
    const imageContainer = document.getElementById('daily-image');
    const photographerName = document.getElementById('photographer-name');
    const likeButton = document.getElementById('like-button');
    const likeCountSpan = document.getElementById('like-count');

    let currentImageUrl = '';

    function updateLikeCount() {
        const likeCount = localStorage.getItem(currentImageUrl) ? parseInt(localStorage.getItem(currentImageUrl)) : 0;
        likeCountSpan.textContent = likeCount;
    }

    likeButton.addEventListener('click', function() {
        let likeCount = localStorage.getItem(currentImageUrl) ? parseInt(localStorage.getItem(currentImageUrl)) : 0;
        likeCount += 1;
        localStorage.setItem(currentImageUrl, likeCount);
        updateLikeCount();
    });

    function saveImageToHistory(imageUrl, photographer) {
        let imageHistory = JSON.parse(localStorage.getItem('imageHistory')) || [];
        imageHistory.push({ url: imageUrl, photographer: photographer });
        localStorage.setItem('imageHistory', JSON.stringify(imageHistory));
    }

    function fetchRandomImage() {
        fetch(UNSPLASH_URL)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.urls.regular;
                const photographer = `Photo by ${data.user.name}`;
                imageContainer.src = imageUrl;
                photographerName.textContent = photographer;
                currentImageUrl = imageUrl;
                updateLikeCount();
                saveImageToHistory(imageUrl, photographer);
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }

    function displayImageHistory() {
        const historyContainer = document.createElement('div');
        historyContainer.innerHTML = '<h2>Image History</h2>';
        let imageHistory = JSON.parse(localStorage.getItem('imageHistory')) || [];
        imageHistory.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.photographer;
            imgElement.style.maxWidth = '100px';
            imgElement.style.margin = '5px';
            imgElement.style.cursor = 'pointer';
            imgElement.addEventListener('click', function() {
                imageContainer.src = image.url;
                photographerName.textContent = image.photographer;
                currentImageUrl = image.url;
                updateLikeCount();
            });
            historyContainer.appendChild(imgElement);
        });
        document.body.appendChild(historyContainer);
    }

    fetchRandomImage();
    displayImageHistory();
});
