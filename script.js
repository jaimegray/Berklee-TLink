// Example JavaScript to update the info blocks - this needs to be filled with actual data retrieval logic

document.addEventListener('DOMContentLoaded', function() {
    // Dummy data - replace this with actual API calls and dynamic data loading
    const hynesData = {
        'B': { 'Gov’t Center': 8, 'Boston College': 6 },
        'C': { 'Gov’t Center': 2, 'Cleveland Circle': 9 },
        'D': { 'Union Square': 'Arriving', 'Riverside': 2 }
        // Add more services
    };

    const massAveData = {
        'OL': { 'Oak Grove': 3, 'Forest Hills': 'Approaching' },
        // Add more services
    };

    updateInfo('train-info', hynesData);
    updateInfo('bus-info', massAveData);
});

function updateInfo(containerId, data) {
    const container = document.getElementById(containerId);
    for (const [line, times] of Object.entries(data)) {
        const lineDiv = document.createElement('div');
        for (const [destination, time] of Object.entries(times)) {
            const p = document.createElement('p');
            p.innerHTML = `<span class="line ${line.toLowerCase()}">${line}</span> ${destination} <strong>${time} mins</strong>`;
            lineDiv.appendChild(p);
        }
        container.appendChild(lineDiv);
    }
}
