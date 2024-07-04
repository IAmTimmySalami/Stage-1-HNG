document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('currentTimeUTC').innerText = utcTime;
        document.getElementById('currentDay').innerText = dayOfWeek;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
