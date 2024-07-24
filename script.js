function changeGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Hello, Universe!';
}

function navigateTo(page) {
    window.location.href = page;
}

function showImage(year) {
    const imageElement = document.getElementById('schema-image');
    imageElement.src = year + '.jpg';
    imageElement.alt = `Schema ${year}`;
}
