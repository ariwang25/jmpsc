document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for interactivity
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});

function toggleDescription(element) {
    const title = element.querySelector('.title');
    const description = element.querySelector('.description');
    
    if (title.style.display === 'none') {
        title.style.display = 'block';
        description.style.display = 'none';
    } else {
        title.style.display = 'none';
        description.style.display = 'block';
    }
}