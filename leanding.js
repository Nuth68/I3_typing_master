document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('.start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Get ready to start your typing test!');
            window.location.href = 'typing.html';
        });
    }
});