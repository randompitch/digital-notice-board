// Google Slide Widget
function initGoogleSlideWidget() {
    const slideWidget = document.getElementById('google-slide-widget');
    const slideId = '1DWXaxa2ev1FsA3q3e7lzasmz48JgDFwP';
    slideWidget.innerHTML = `
        <h2>Google Slide</h2>
        <iframe src="https://docs.google.com/presentation/d/${slideId}/embed?start=false&loop=false&delayms=3000" 
            frameborder="0" width="100%" height="280" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true">
        </iframe>
    `;
}

// Pomodoro Timer Widget
function initPomodoroWidget() {
    const pomodoroWidget = document.getElementById('pomodoro-widget');
    pomodoroWidget.innerHTML = `
        <h2>Pomodoro Timer</h2>
        <div id="timer">20:00</div>
        <button id="start-timer">Start</button>
        <button id="reset-timer">Reset</button>
    `;

    let timer;
    let timeLeft = 20 * 60;
    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-timer');
    const resetButton = document.getElementById('reset-timer');

    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft === 0) {
                clearInterval(timer);
                alert('Pomodoro session completed!');
            }
        }, 1000);
        startButton.textContent = 'Pause';
        startButton.removeEventListener('click', startTimer);
        startButton.addEventListener('click', pauseTimer);
    }

    function pauseTimer() {
        clearInterval(timer);
        startButton.textContent = 'Resume';
        startButton.removeEventListener('click', pauseTimer);
        startButton.addEventListener('click', startTimer);
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = 20 * 60;
        updateTimer();
        startButton.textContent = 'Start';
        startButton.removeEventListener('click', pauseTimer);
        startButton.addEventListener('click', startTimer);
    }

    startButton.addEventListener('click', startTimer);
    resetButton.addEventListener('click', resetTimer);
}

// Initialize widgets
document.addEventListener('DOMContentLoaded', () => {
    initGoogleSlideWidget();
    initPomodoroWidget();
});