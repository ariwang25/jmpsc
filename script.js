document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for interactivity
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});
