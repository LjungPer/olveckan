function navigateTo(page) {
    window.location.href = page;
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Function to replace newline characters with <br> tags
function nl2br(str) {
    return str.replace(/\n/g, '<br>');
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.getElementById('posts-container');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                
                const postContentElement = document.createElement('div');
                postContentElement.className = 'post-content';

                const imgElement = document.createElement('img');
                imgElement.src = post.image;
                imgElement.alt = 'Post Image';
                imgElement.className = 'post-image';
                
                const postTextElement = document.createElement('div');
                postTextElement.className = 'post-text';
                
                const titleElement = document.createElement('h2');
                titleElement.className = 'post-title';
                titleElement.textContent = post.title;
                
                const sampleElement = document.createElement('p');
                sampleElement.className = 'post-sample';
                sampleElement.innerHTML = nl2br(post.text);

                const signatureElement = document.createElement('div');
                signatureElement.className = 'post-signature';
                signatureElement.innerHTML = `${post.author}<br>${post.position}<br>${post.corporate}`;

                postTextElement.appendChild(titleElement);
                postTextElement.appendChild(sampleElement);
                postTextElement.appendChild(signatureElement); // Include signature in the post text container
                postContentElement.appendChild(imgElement);
                postContentElement.appendChild(postTextElement);
                postElement.appendChild(postContentElement);
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
