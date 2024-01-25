document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'c1c49f3d3abc4b38b0795f1b98796a68';
    
    const stopIDs = {
        bcdInbound: '70152',
        bcdOutbound: '70153',
        route1Harvard: '70152',
        route1Nubian: '70153'
    };

    // Fetch and display data for each stop
    for (const [key, stopId] of Object.entries(stopIDs)) {
        fetch(`https://api-v3.mbta.com/predictions?filter[stop]=${stopId}&api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => displayData(key, data))
            .catch(error => displayError(key, error));
    }
});

function displayData(key, data) {
    const container = document.getElementById(key);
    container.innerHTML = '<h3>Arrivals:</h3>';
    if (data.data.length > 0) {
        data.data.forEach(prediction => {
            const arrivalTime = new Date(prediction.attributes.arrival_time);
            container.innerHTML += `<p>${arrivalTime.toLocaleTimeString()}</p>`;
        });
    } else {
        container.innerHTML += `<p>No upcoming arrivals.</p>`;
    }
}

function displayError(key, error) {
    const container = document.getElementById(key);
    container.innerHTML = `<p>Error loading data: ${error}</p>`;
}
